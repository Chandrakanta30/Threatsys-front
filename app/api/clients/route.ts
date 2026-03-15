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
    const [rows]: any = await conn.query(
      "SELECT * FROM clients ORDER BY id DESC"
    );
    return NextResponse.json(rows);
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const { name, logo } = await req.json();

    const [result]: any = await conn.query(
      "INSERT INTO clients (name, logo_url) VALUES (?,?)",
      [name, logo]
    );

    return NextResponse.json({
      message: "Client added",
      id: result.insertId,
    });
  } finally {
    conn.release();
  }
}

export async function PUT(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const { id, name, logo } = await req.json();

    await conn.query("UPDATE clients SET name=?, logo_url=? WHERE id=?", [
      name,
      logo,
      id,
    ]);

    return NextResponse.json({
      message: "Client updated",
    });
  } finally {
    conn.release();
  }
}

export async function DELETE(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await conn.query("DELETE FROM clients WHERE id=?", [id]);

    return NextResponse.json({
      message: "Client deleted",
    });
  } finally {
    conn.release();
  }
}
