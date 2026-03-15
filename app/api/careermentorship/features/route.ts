import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  const [rows] = await db.query(
    "SELECT * FROM career_features ORDER BY position"
  );

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const [result]: any = await db.query(
    "INSERT INTO career_features (icon,title,position) VALUES (?,?,?)",
    [data.icon, data.title, data.position]
  );

  return NextResponse.json({ id: result.insertId });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();

  await db.query(
    "UPDATE career_features SET icon=?,title=?,position=? WHERE id=?",
    [data.icon, data.title, data.position, data.id]
  );

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await db.query("DELETE FROM career_features WHERE id=?", [id]);

  return NextResponse.json({ success: true });
}
