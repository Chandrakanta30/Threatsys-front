import db from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, icon, title, text, section, position } = body;

    // Dynamically choose table based on section sent from CMS
    const table = section === "steps" ? "career_steps" : "career_features";

    if (id) {
      const query =
        section === "steps"
          ? `UPDATE ${table} SET icon=?, text=?, position=? WHERE id=?`
          : `UPDATE ${table} SET icon=?, title=?, position=? WHERE id=?`;

      const params =
        section === "steps"
          ? [icon, text, position, id]
          : [icon, title, position, id];
      await db.query(query, params);
    } else {
      const query =
        section === "steps"
          ? `INSERT INTO ${table} (icon, text, position) VALUES (?, ?, ?)`
          : `INSERT INTO ${table} (icon, title, position) VALUES (?, ?, ?)`;

      const params =
        section === "steps"
          ? [icon, text, position || 0]
          : [icon, title, position || 0];
      await db.query(query, params);
    }

    return NextResponse.json({ message: "Item Saved" });
  } catch (error) {
    return NextResponse.json({ error: "Operation failed" }, { status: 500 });
  }
}
