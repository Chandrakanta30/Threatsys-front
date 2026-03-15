import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await db.query(
    "SELECT * FROM career_journey ORDER BY position ASC"
  );
  return NextResponse.json(data[0]);
}

export async function POST(req: Request) {
  try {
    const { id, icon, title, text, position } = await req.json();
    if (id) {
      await db.query(
        "UPDATE career_journey SET icon=?, title=?, text=?, position=? WHERE id=?",
        [icon, title, text, position, id]
      );
    } else {
      await db.query(
        "INSERT INTO career_journey (icon, title, text, position) VALUES (?, ?, ?, ?)",
        [icon, title, text, position || 0]
      );
    }
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Error saving card" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  await db.query("DELETE FROM career_journey WHERE id = ?", [id]);
  return NextResponse.json({ message: "Deleted" });
}
