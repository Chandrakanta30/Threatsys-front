import { NextRequest, NextResponse } from "next/server";
import db from "@/app/lib/db";

export async function GET() {
  try {
    const [settings]: any = await db.query(
      "SELECT * FROM homepage_settings WHERE id = 1"
    );
    const [courses]: any = await db.query(
      "SELECT * FROM homepage_courses ORDER BY sort_order ASC"
    );
    const [features]: any = await db.query("SELECT * FROM homepage_features");
    const [clientele]: any = await db.query("SELECT * FROM homepage_clientele");

    return NextResponse.json({
      settings: settings[0],
      courses,
      features,
      clientele,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { settings, courses, features, clientele } = body;

    // 1. Update Settings
    await db.query(`UPDATE homepage_settings SET ? WHERE id = 1`, [settings]);

    // 2. Sync Courses (Delete and Re-insert)
    await db.query("DELETE FROM homepage_courses");
    if (courses?.length) {
      const courseValues = courses.map((c: any, i: number) => [
        c.title,
        c.description,
        c.icon,
        c.icon_wh,
        i,
      ]);
      await db.query(
        "INSERT INTO homepage_courses (title, description, icon, icon_wh, sort_order) VALUES ?",
        [courseValues]
      );
    }

    // 3. Sync Features
    await db.query("DELETE FROM homepage_features");
    if (features?.length) {
      const featureValues = features.map((f: any) => [f.feature_text]);
      await db.query("INSERT INTO homepage_features (feature_text) VALUES ?", [
        featureValues,
      ]);
    }

    // 4. Sync Clientele
    await db.query("DELETE FROM homepage_clientele");
    if (clientele?.length) {
      const logoValues = clientele.map((l: any) => [
        l.logo_url,
        l.slider_group,
      ]);
      await db.query(
        "INSERT INTO homepage_clientele (logo_url, slider_group) VALUES ?",
        [logoValues]
      );
    }

    return NextResponse.json({ message: "Homepage updated successfully" });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
