import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
  connectionLimit: 10,
});
export async function GET() {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query(
      "SELECT * FROM video_gallery ORDER BY position ASC"
    );

    return NextResponse.json(rows);
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();
  const data = await req.json();

  try {
    const [result]: any = await conn.query(
      "INSERT INTO video_gallery (image,video_url,position) VALUES (?,?,?)",
      [data.image, data.video_url, data.position]
    );

    return NextResponse.json({ id: result.insertId });
  } finally {
    conn.release();
  }
}

export async function PUT(req: NextRequest) {
  const conn = await pool.getConnection();
  const data = await req.json();

  try {
    await conn.query(
      "UPDATE video_gallery SET image=?,video_url=?,position=? WHERE id=?",
      [data.image, data.video_url, data.position, data.id]
    );

    return NextResponse.json({ message: "Updated" });
  } finally {
    conn.release();
  }
}

export async function DELETE(req: NextRequest) {
  const conn = await pool.getConnection();
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  try {
    await conn.query("DELETE FROM video_gallery WHERE id=?", [id]);

    return NextResponse.json({ message: "Deleted" });
  } finally {
    conn.release();
  }
}
