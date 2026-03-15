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
    const [[about]]: any = await conn.query("SELECT * FROM about_page LIMIT 1");

    if (!about) {
      return NextResponse.json({});
    }

    const aboutId = about.id;

    const [images]: any = await conn.query(
      "SELECT image_url FROM about_intro_images WHERE about_id=?",
      [aboutId]
    );

    const [stats]: any = await conn.query(
      "SELECT number,label,icon FROM about_stats WHERE about_id=?",
      [aboutId]
    );

    const [missions]: any = await conn.query(
      "SELECT title,description,icon FROM about_missions WHERE about_id=?",
      [aboutId]
    );

    const [faqs]: any = await conn.query(
      "SELECT question,answer FROM about_faqs WHERE about_id=?",
      [aboutId]
    );

    const [clients]: any = await conn.query("SELECT logo_url FROM clients", [
      aboutId,
    ]);

    return NextResponse.json({
      banner_heading: about.banner_heading,

      intro_heading: about.intro_heading,
      intro_subheading: about.intro_subheading,
      intro_paragraph1: about.intro_paragraph1,
      intro_paragraph2: about.intro_paragraph2,
      intro_experience_years: about.intro_experience_years,

      intro_images: images.map((img: any) => img.image_url),

      stats,
      mission_items: missions,
      faqs,

      client_logos: clients.map((c: any) => c.logo_url),
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

    const aboutId = 1;

    await conn.query(
      `UPDATE about_page SET 
        banner_heading=?,
        intro_heading=?,
        intro_subheading=?,
        intro_paragraph1=?,
        intro_paragraph2=?,
        intro_experience_years=?
      WHERE id=?`,
      [
        data.banner_heading,
        data.intro_heading,
        data.intro_subheading,
        data.intro_paragraph1,
        data.intro_paragraph2,
        data.intro_experience_years,
        aboutId,
      ]
    );

    await conn.query("DELETE FROM about_intro_images WHERE about_id=?", [
      aboutId,
    ]);

    for (const img of data.intro_images) {
      await conn.query(
        "INSERT INTO about_intro_images (about_id,image_url) VALUES (?,?)",
        [aboutId, img]
      );
    }

    await conn.query("DELETE FROM about_stats WHERE about_id=?", [aboutId]);

    for (const stat of data.stats) {
      await conn.query(
        "INSERT INTO about_stats (about_id,number,label,icon) VALUES (?,?,?,?)",
        [aboutId, stat.number, stat.label, stat.icon]
      );
    }

    await conn.query("DELETE FROM about_missions WHERE about_id=?", [aboutId]);

    for (const mission of data.mission_items) {
      await conn.query(
        "INSERT INTO about_missions (about_id,title,description,icon) VALUES (?,?,?,?)",
        [aboutId, mission.title, mission.description, mission.icon]
      );
    }

    await conn.query("DELETE FROM about_faqs WHERE about_id=?", [aboutId]);

    for (const faq of data.faqs) {
      await conn.query(
        "INSERT INTO about_faqs (about_id,question,answer) VALUES (?,?,?)",
        [aboutId, faq.question, faq.answer]
      );
    }

    // await conn.query("DELETE FROM about_clients WHERE about_id=?", [aboutId]);

    for (const logo of data.client_logos) {
      await conn.query("INSERT INTO clients (logo_url) VALUES (?)", [
        aboutId,
        logo,
      ]);
    }

    return NextResponse.json({
      message: "About page updated successfully",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  } finally {
    conn.release();
  }
}
