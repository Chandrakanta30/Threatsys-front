import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM one_on_one_header LIMIT 1");

  return NextResponse.json(rows[0] || {});
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  await db.query(
    `
    INSERT INTO one_on_one_header
    (heading,highlight_text,description,button_text)
    VALUES (?,?,?,?)
  `,
    [data.heading, data.highlight_text, data.description, data.button_text]
  );

  return NextResponse.json({ success: true });
}

export async function PUT(req: NextRequest) {
  const data = await req.json();

  await db.query(
    `
    UPDATE one_on_one_header
    SET heading=?,highlight_text=?,description=?,button_text=?
    WHERE id=?
  `,
    [
      data.heading,
      data.highlight_text,
      data.description,
      data.button_text,
      data.id,
    ]
  );

  return NextResponse.json({ success: true });
}
