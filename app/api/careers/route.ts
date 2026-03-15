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
    const [[intro]]: any = await conn.query(
      "SELECT * FROM career_intro LIMIT 1"
    );

    const [[happy]]: any = await conn.query(
      "SELECT * FROM career_happy_workplace LIMIT 1"
    );

    const [videos]: any = await conn.query("SELECT * FROM career_videos");

    const [jobs]: any = await conn.query("SELECT * FROM jobs ORDER BY id DESC");

    return NextResponse.json({
      intro,
      happy,
      videos,
      jobs,
    });
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();

  try {
    const data = await req.json();

    if (data.type === "job") {
      const [result]: any = await conn.query(
        `INSERT INTO jobs 
        (title, company, profile, location, working_day, description, experience, posted)
        VALUES (?,?,?,?,?,?,?,?)`,
        [
          data.title,
          data.company,
          data.profile,
          data.location,
          data.working_day,
          data.description,
          data.experience,
          data.posted,
        ]
      );

      return NextResponse.json({ id: result.insertId });
    }

    if (data.type === "video") {
      const [result]: any = await conn.query(
        "INSERT INTO career_videos (video_url) VALUES (?)",
        [data.video_url]
      );

      return NextResponse.json({ id: result.insertId });
    }
  } finally {
    conn.release();
  }
}

export async function PUT(req: NextRequest) {
  const conn = await pool.getConnection();
  const data = await req.json();

  try {
    if (data.type === "intro") {
      await conn.query(
        `UPDATE career_intro 
            SET heading_before=?, heading_highlight=?, heading_after=?,
            description1=?, description2=?, image1=?, image2=?
            WHERE id=1`,
        [
          data.heading_before,
          data.heading_highlight,
          data.heading_after,
          data.description1,
          data.description2,
          data.image1,
          data.image2,
        ]
      );
    }

    if (data.type === "happy") {
      await conn.query(
        `UPDATE career_happy_workplace 
        SET heading=?, highlight_word=?, description=? 
        WHERE id=1`,
        [data.heading, data.highlight_word, data.description]
      );
    }

    if (data.type === "job") {
      await conn.query(
        `UPDATE jobs 
        SET title=?, company=?, profile=?, location=?, working_day=?, description=?, experience=?, posted=? 
        WHERE id=?`,
        [
          data.title,
          data.company,
          data.profile,
          data.location,
          data.working_day,
          data.description,
          data.experience,
          data.posted,
          data.id,
        ]
      );
    }

    return NextResponse.json({ message: "Updated" });
  } finally {
    conn.release();
  }
}

export async function DELETE(req: NextRequest) {
  const conn = await pool.getConnection();

  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  const type = searchParams.get("type");

  try {
    if (type === "job") {
      await conn.query("DELETE FROM jobs WHERE id=?", [id]);
    }

    if (type === "video") {
      await conn.query("DELETE FROM career_videos WHERE id=?", [id]);
    }

    return NextResponse.json({ message: "Deleted" });
  } finally {
    conn.release();
  }
}
