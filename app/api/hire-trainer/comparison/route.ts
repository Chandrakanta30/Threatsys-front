import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  const [rows] = await db.query(
    "SELECT * FROM hire_trainer_comparison ORDER BY position"
  );

  return NextResponse.json(rows);
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  const [result]: any = await db.query(
    "INSERT INTO hire_trainer_comparison (side,text,position) VALUES (?,?,?)",
    [data.side, data.text, data.position]
  );

  return NextResponse.json({ id: result.insertId });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();

  await db.query(
    "UPDATE hire_trainer_comparison SET side=?,text=?,position=? WHERE id=?",
    [data.side, data.text, data.position, data.id]
  );

  return NextResponse.json({ success: true });
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  await db.query("DELETE FROM hire_trainer_comparison WHERE id=?", [id]);

  return NextResponse.json({ success: true });
}
