import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id?: string[] }> }
) {
  try {
    if (context.params != undefined) {
      const { id } = await context.params;
      if (id?.[0]) {
        const [rows]: any = await db.query(
          "SELECT * FROM banner_slides WHERE id = ?",
          [id[0]]
        );
        return NextResponse.json(rows[0]);
      }
    }
    const [rows] = await db.query(
      "SELECT * FROM banner_slides ORDER BY position ASC"
    );
    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const b = await req.json();
    await db.query(
      "INSERT INTO banner_slides (tag, title_line1, title_highlight, description, button_text, button_link, image_url, position) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        b.tag,
        b.title_line1,
        b.title_highlight,
        b.description,
        b.button_text,
        b.button_link,
        b.image_url,
        b.position,
      ]
    );
    return NextResponse.json({ message: "Slide added" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = await params;
  await db.query("DELETE FROM banner_slides WHERE id = ?", [id[0]]);
  return NextResponse.json({ message: "Deleted" });
}
