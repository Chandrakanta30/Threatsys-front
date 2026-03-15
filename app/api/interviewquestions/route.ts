import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  try {
    const [rows] = await db.query(
      "SELECT * FROM interview_questions ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { title, image, link, author, date } = await req.json();
    const [result]: any = await db.query(
      "INSERT INTO interview_questions (title, image, link, author, date) VALUES (?, ?, ?, ?, ?)",
      [title, image, link, author, date]
    );
    return NextResponse.json({ id: result.insertId, message: "Created" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Fixed PUT method for Next.js 15
export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id?: string[] }> } // Type is now a Promise
) {
  try {
    const resolvedParams = await params; // Must await params
    const id = resolvedParams.id?.[0];

    const { title, image, link, author, date } = await req.json();

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db.query(
      "UPDATE interview_questions SET title=?, image=?, link=?, author=?, date=? WHERE id=?",
      [title, image, link, author, date, id]
    );
    return NextResponse.json({ message: "Updated" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Fixed DELETE method for Next.js 15
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id?: string[] }> } // Type is now a Promise
) {
  try {
    const resolvedParams = await params; // Must await params
    const id = resolvedParams.id?.[0];

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    await db.query("DELETE FROM interview_questions WHERE id = ?", [id]);
    return NextResponse.json({ message: "Deleted" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
