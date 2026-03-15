import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/lib/db";

export async function GET() {
  const conn = await pool.getConnection();

  try {
    const [logos] = await conn.query(
      "SELECT * FROM client_logos ORDER BY position"
    );
    const [stats] = await conn.query(
      "SELECT * FROM growth_stats ORDER BY position"
    );
    // const [tabs] = await conn.query(
    //   "SELECT * FROM corporate_tabs ORDER BY position"
    // );
    const [gallery] = await conn.query(
      "SELECT * FROM gallery_images ORDER BY position"
    );
    const [courses] = await conn.query(
      "SELECT * FROM  corporate_courses ORDER BY position"
    );
    const [faqs] = await conn.query(
      "SELECT * FROM training_faqs ORDER BY position"
    );
    const [rawTabs]: any = await conn.query(
      "SELECT * FROM corporate_tabs ORDER BY position"
    );

    // PARSE JSON FEATURES: Convert the string from DB back into a JS Array
    const tabs = rawTabs.map((tab: any) => ({
      ...tab,
      features:
        typeof tab.features === "string"
          ? JSON.parse(tab.features)
          : tab.features || [],
    }));

    return NextResponse.json({
      logos,
      stats,
      tabs,
      gallery,
      courses,
      faqs,
    });
  } finally {
    conn.release();
  }
}

export async function POST(req: NextRequest) {
  const conn = await pool.getConnection();
  const data = await req.json();

  try {
    await conn.beginTransaction();

    await conn.query("DELETE FROM client_logos");
    await conn.query("DELETE FROM growth_stats");
    await conn.query("DELETE FROM gallery_images");
    await conn.query("DELETE FROM corporate_courses");
    await conn.query("DELETE FROM training_faqs");
    await conn.query("DELETE FROM corporate_tabs");

    for (const item of data.logos) {
      await conn.query(
        "INSERT INTO client_logos (image,slider,position) VALUES (?,?,?)",
        [item.image, item.slider, item.position]
      );
    }

    for (const item of data.stats) {
      await conn.query(
        "INSERT INTO growth_stats (icon,number,text,position) VALUES (?,?,?,?)",
        [item.icon, item.number, item.text, item.position]
      );
    }

    for (const item of data.gallery) {
      await conn.query(
        "INSERT INTO gallery_images (image,position) VALUES (?,?)",
        [item.image, item.position]
      );
    }

    for (const item of data.courses) {
      await conn.query(
        "INSERT INTO corporate_courses (icon,title,description,position) VALUES (?,?,?,?)",
        [item.icon, item.title, item.description, item.position]
      );
    }

    for (const item of data.faqs) {
      await conn.query(
        "INSERT INTO training_faqs (question,answer,position) VALUES (?,?,?)",
        [item.question, item.answer, item.position]
      );
    }

    for (const item of data.tabs) {
      await conn.query(
        "INSERT INTO corporate_tabs (tab_type, title, description, image, icon, features, position) VALUES (?,?,?,?,?,?,?)",
        [
          item.tab_type,
          item.title,
          item.description,
          item.image,
          item.icon,
          JSON.stringify(item.features), // Ensure array is saved as string
          item.position,
        ]
      );
    }

    await conn.commit();

    return NextResponse.json({ success: true });
  } catch (err) {
    await conn.rollback();
    return NextResponse.json({ error: err });
  } finally {
    conn.release();
  }
}
