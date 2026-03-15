import { NextResponse } from "next/server";
import db from "@/app/lib/db";

// GET all page content
export async function GET() {
  const conn = await db.getConnection();
  try {
    const [description] = await conn.query(
      "SELECT * FROM free_cyber_training_description"
    );
    const [features] = await conn.query(
      "SELECT * FROM free_cyber_training_features"
    );
    const [benefits] = await conn.query(
      "SELECT * FROM free_cyber_training_benefits"
    );
    const [faqs] = await conn.query("SELECT * FROM free_cyber_training_faq");
    const [cta] = await conn.query("SELECT * FROM free_cyber_training_cta");

    return NextResponse.json({ description, features, benefits, faqs, cta });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}

// POST to add content
export async function POST(req: Request) {
  const conn = await db.getConnection();
  const data = await req.json();

  try {
    // Example: adding a feature
    const { title, description, image } = data;
    await conn.query(
      "INSERT INTO free_cyber_training_features (title, description, image) VALUES (?,?,?)",
      [title, description, image]
    );
    return NextResponse.json({ message: "Feature added" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}

// PUT to update
export async function PUT(req: Request) {
  const conn = await db.getConnection();
  const data = await req.json();

  try {
    const { id, table, values } = data;

    const columns = Object.keys(values)
      .map((col) => `${col}=?`)
      .join(",");
    const sql = `UPDATE ${table} SET ${columns} WHERE id=?`;

    await conn.query(sql, [...Object.values(values), id]);
    return NextResponse.json({ message: "Updated successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}

// DELETE an item
export async function DELETE(req: Request) {
  const conn = await db.getConnection();
  const data = await req.json();

  try {
    const { id, table } = data;
    await conn.query(`DELETE FROM ${table} WHERE id=?`, [id]);
    return NextResponse.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}
