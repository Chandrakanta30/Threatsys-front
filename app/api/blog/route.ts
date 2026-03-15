import { NextResponse } from "next/server";
import db from "@/app/lib/db";

// --- READ (All or Single) ---
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id?: string[] }> }
) {
  try {
    // 1. Await the params first
    const resolvedParams = await params;
    console.log("resolvedParams", resolvedParams);

    if (resolvedParams != undefined) {
      // 2. Access the array from the catch-all [[...id]]
      const id = resolvedParams.id?.[0];

      if (id) {
        const [article]: any = await db.query(
          "SELECT * FROM articles WHERE id = ?",
          [id]
        );
        const [sections] = await db.query(
          "SELECT * FROM article_sections WHERE article_id = ?",
          [id]
        );
        return NextResponse.json({ ...article[0], sections });
      }
    }

    const [articles] = await db.query(
      "SELECT * FROM articles ORDER BY id DESC"
    );
    return NextResponse.json({ articles });
  } catch (err: any) {
    console.log("err");
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
// --- CREATE ---
export async function POST(req: Request) {
  try {
    const { title, author, publish_date, sections } = await req.json();
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    // 1. Insert Main Article
    const [res]: any = await db.query(
      "INSERT INTO articles (title, author, publish_date, slug) VALUES (?, ?, ?, ?)",
      [title, author, publish_date, slug]
    );
    const newId = res.insertId;

    // 2. Insert TOC Sections
    if (sections && sections.length > 0) {
      const sectionValues = sections.map((s: any, i: number) => [
        newId,
        s.title,
        s.content,
        i,
      ]);
      await db.query(
        "INSERT INTO article_sections (article_id, section_title, content, sort_order) VALUES ?",
        [sectionValues]
      );
    }

    return NextResponse.json({
      id: newId,
      message: "Blog published successfully",
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// --- UPDATE ---
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id?: string[] }> } // Changed to Promise
) {
  try {
    const resolvedParams = await params; // Await the promise
    const id = resolvedParams.id?.[0];

    const { title, author, publish_date, sections } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    // 1. Update Main Article
    await db.query(
      "UPDATE articles SET title=?, author=?, publish_date=? WHERE id=?",
      [title, author, publish_date, id]
    );

    // 2. Refresh Sections
    await db.query("DELETE FROM article_sections WHERE article_id = ?", [id]);

    if (sections && sections.length > 0) {
      const sectionValues = sections.map((s: any, i: number) => [
        id,
        s.title,
        s.content,
        i,
      ]);
      await db.query(
        "INSERT INTO article_sections (article_id, section_title, content, sort_order) VALUES ?",
        [sectionValues]
      );
    }

    return NextResponse.json({ message: "Updated successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// --- DELETE ---
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id?: string[] }> } // Changed to Promise
) {
  try {
    const resolvedParams = await params; // Await the promise
    const id = resolvedParams.id?.[0];

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db.query("DELETE FROM articles WHERE id = ?", [id]);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
