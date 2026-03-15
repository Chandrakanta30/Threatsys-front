import { NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  const conn = await db.getConnection();
  try {
    const [rows] = await conn.query(
      "SELECT * FROM free_Event_events ORDER BY date ASC"
    );
    return NextResponse.json({ events: rows });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}

export async function POST(req: Request) {
  const conn = await db.getConnection();
  const data = await req.json();
  try {
    const {
      type,
      title,
      description,
      date,
      month,
      time,
      location,
      link,
      image,
    } = data;
    await conn.query(
      "INSERT INTO free_Event_events (type,title,description,date,month,time,location,link,image) VALUES (?,?,?,?,?,?,?,?,?,?)",
      [type, title, description, date, month, time, location, link, image]
    );
    return NextResponse.json({ message: "Event created" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}

export async function PUT(req: Request) {
  const conn = await db.getConnection();
  const data = await req.json();
  try {
    const {
      id,
      type,
      title,
      description,
      date,
      month,
      time,
      location,
      link,
      image,
    } = data;
    await conn.query(
      "UPDATE free_Event_events SET type=?, title=?, description=?, date=?, month=?, time=?, location=?, link=?, image=? WHERE id=?",
      [type, title, description, date, month, time, location, link, image, id]
    );
    return NextResponse.json({ message: "Event updated" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}

export async function DELETE(req: Request) {
  const conn = await db.getConnection();
  const data = await req.json();
  try {
    const { id } = data;
    await conn.query("DELETE FROM free_Event_events WHERE id=?", [id]);
    return NextResponse.json({ message: "Event deleted" });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  } finally {
    conn.release();
  }
}
