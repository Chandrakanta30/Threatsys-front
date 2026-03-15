import db from "@/app/lib/db";
import { NextResponse } from "next/server";

// GET: Returns both sections so the CMS can populate state in one go
export async function GET() {
  try {
    const mainIntro = await db.query(
      "SELECT * FROM career_mentorship_intro LIMIT 1"
    );
    const featureIntro = await db.query(
      "SELECT * FROM career_feature_intro LIMIT 1"
    );

    return NextResponse.json({
      intro: mainIntro[0][0] || {},
      featureIntro: featureIntro[0] || {},
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch intro data" },
      { status: 500 }
    );
  }
}

// POST: Handles both Creating and Updating for both tables
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      id,
      heading,
      highlight_text,
      subheading,
      description,
      button_text,
      image,
      type, // 'main' or 'feature'
    } = body;

    // Determine which table to update
    const tableName =
      type === "feature" ? "career_feature_intro" : "career_mentorship_intro";

    if (id) {
      // UPDATE existing record
      const result = await db.query(
        `UPDATE ${tableName} 
         SET heading=?, highlight_text=?, subheading=?, description=?, button_text=?, image=? 
         WHERE id=?`,
        [
          heading,
          highlight_text,
          subheading || null,
          description,
          button_text,
          image || null,
          id,
        ]
      );
      return NextResponse.json({ message: "Update successful", result });
    } else {
      // INSERT new record if none exists
      const result = await db.query(
        `INSERT INTO ${tableName} (heading, highlight_text, subheading, description, button_text, image) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [
          heading,
          highlight_text,
          subheading || null,
          description,
          button_text,
          image || null,
        ]
      );
      return NextResponse.json({ message: "Insert successful", result });
    }
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
