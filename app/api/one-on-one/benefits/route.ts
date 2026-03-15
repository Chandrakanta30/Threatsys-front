import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  const [rows] = await db.query(
    "SELECT * FROM one_on_one_benefits ORDER BY position"
  );

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const [result]: any = await db.query(
    "INSERT INTO one_on_one_benefits (img,text,position) VALUES (?,?,?)",
    [data.img, data.text, data.position]
  );

  return NextResponse.json({ id: result.insertId });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();

  await db.query(
    "UPDATE one_on_one_benefits SET img=?,text=?,position=? WHERE id=?",
    [data.img, data.text, data.position, data.id]
  );

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await db.query("DELETE FROM one_on_one_benefits WHERE id=?", [id]);

  return NextResponse.json({ success: true });
}
