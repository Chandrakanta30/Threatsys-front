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

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();
  const data = await req.json();

  try {
    await conn.query(
      "INSERT INTO contact_messages (name,email,topic,phone,message) VALUES (?,?,?,?,?)",
      [data.name, data.email, data.topic, data.phone, data.message]
    );

    return NextResponse.json({ message: "Message sent" });
  } finally {
    conn.release();
  }
}

export async function GET() {
  const conn = await pool.getConnection();

  try {
    const [rows] = await conn.query(
      "SELECT * FROM contact_messages ORDER BY id DESC"
    );

    return NextResponse.json(rows);
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  } finally {
    conn.release();
  }
}
