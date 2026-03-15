import db from "@/app/lib/db";
import { NextResponse } from "next/server";

/**
 * READ: Fetch items for a specific section
 * Usage: /api/careermentorship/items?section=steps
 */
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const section = searchParams.get("section");

    if (!section) {
      return NextResponse.json(
        { error: "Section is required" },
        { status: 400 }
      );
    }

    const table = section === "steps" ? "career_steps" : "career_features";
    const data = await db.query(`SELECT * FROM ${table} ORDER BY position ASC`);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch items" },
      { status: 500 }
    );
  }
}

/**
 * CREATE & UPDATE: Save an item
 */
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { id, icon, title, text, section, position } = body;

    if (!section) {
      return NextResponse.json(
        { error: "Section is required" },
        { status: 400 }
      );
    }

    const table = section === "steps" ? "career_steps" : "career_features";

    if (id) {
      // UPDATE
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
      // INSERT
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

/**
 * DELETE: Remove an item
 * Usage: /api/careermentorship/items?section=steps&id=5
 */
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    const section = searchParams.get("section");

    if (!id || !section) {
      return NextResponse.json(
        { error: "ID and Section are required" },
        { status: 400 }
      );
    }

    const table = section === "steps" ? "career_steps" : "career_features";
    await db.query(`DELETE FROM ${table} WHERE id = ?`, [id]);

    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}
