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
    const [[section]]: any = await conn.query(
      "SELECT * FROM instructor_section LIMIT 1"
    );

    const [instructors]: any = await conn.query(
      "SELECT * FROM instructors ORDER BY id DESC"
    );

    return NextResponse.json({
      section,
      instructors,
    });
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const data = await req.json();

    const [result]: any = await conn.query(
      `INSERT INTO instructors 
      (name, experience, skills, image, link)
      VALUES (?,?,?,?,?)`,
      [data.name, data.experience, data.skills, data.image, data.link]
    );

    return NextResponse.json({
      message: "Instructor added",
      id: result.insertId,
    });
  } finally {
    conn.release();
  }
}

export async function PUT(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const data = await req.json();

    if (data.type === "section") {
      await conn.query(
        `UPDATE instructor_section
         SET heading=?, highlight_text=?
         WHERE id=1`,
        [data.heading, data.highlight_text]
      );

      return NextResponse.json({ message: "Heading updated" });
    }

    if (data.type === "instructor") {
      await conn.query(
        `UPDATE instructors
         SET name=?, experience=?, skills=?, image=?, link=?
         WHERE id=?`,
        [
          data.name,
          data.experience,
          data.skills,
          data.image,
          data.link,
          data.id,
        ]
      );

      return NextResponse.json({ message: "Instructor updated" });
    }
  } finally {
    conn.release();
  }
}

export async function DELETE(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await conn.query("DELETE FROM instructors WHERE id=?", [id]);

    return NextResponse.json({
      message: "Instructor deleted",
    });
  } finally {
    conn.release();
  }
}
