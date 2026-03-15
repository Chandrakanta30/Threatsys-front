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
      "SELECT * FROM team_section LIMIT 1"
    );

    const [members]: any = await conn.query(
      "SELECT * FROM team_members ORDER BY id DESC"
    );

    return NextResponse.json({
      section,
      members,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const data = await req.json();

    const [result]: any = await conn.query(
      "INSERT INTO team_members (name, role, image_url, bio) VALUES (?,?,?,?)",
      [data.name, data.role, data.image_url, data.bio]
    );

    return NextResponse.json({
      message: "Team member added",
      id: result.insertId,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
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
        `UPDATE team_section 
         SET heading=?, highlight_text=?, description=? 
         WHERE id=1`,
        [data.heading, data.highlight_text, data.description]
      );

      return NextResponse.json({ message: "Section updated" });
    }

    if (data.type === "member") {
      await conn.query(
        `UPDATE team_members 
         SET name=?, role=?, image_url=?, bio=? 
         WHERE id=?`,
        [data.name, data.role, data.image_url, data.bio, data.id]
      );

      return NextResponse.json({ message: "Member updated" });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    conn.release();
  }
}

export async function DELETE(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    await conn.query("DELETE FROM team_members WHERE id=?", [id]);

    return NextResponse.json({
      message: "Member deleted",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    conn.release();
  }
}
