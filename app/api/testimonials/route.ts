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

export async function GET(req: NextRequest) {
  const conn = await pool.getConnection();

  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get("page")) || 1;
  const limit = 5;
  const offset = (page - 1) * limit;

  try {
    const [rows]: any = await conn.query(
      "SELECT * FROM testimonials ORDER BY id DESC LIMIT ? OFFSET ?",
      [limit, offset]
    );

    const [[count]]: any = await conn.query(
      "SELECT COUNT(*) as total FROM testimonials"
    );

    return NextResponse.json({
      testimonials: rows,
      total: count.total,
      totalPages: Math.ceil(count.total / limit),
    });
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();
  const data = await req.json();

  try {
    const [result]: any = await conn.query(
      "INSERT INTO testimonials (name,rating,comment,image) VALUES (?,?,?,?)",
      [data.name, data.rating, data.comment, data.image]
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
      "UPDATE testimonials SET name=?,rating=?,comment=?,image=? WHERE id=?",
      [data.name, data.rating, data.comment, data.image, data.id]
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
    await conn.query("DELETE FROM testimonials WHERE id=?", [id]);

    return NextResponse.json({ message: "Deleted" });
  } finally {
    conn.release();
  }
}
