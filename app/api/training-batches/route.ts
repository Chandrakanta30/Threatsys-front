import db from "@/app/lib/db";

export async function GET() {
  const [batches] = await db.query(
    "SELECT * FROM training_upcoming_batches ORDER BY date ASC"
  );
  const [why] = await db.query("SELECT * FROM training_why_choose_us LIMIT 1");
  const [features] = await db.query(
    "SELECT * FROM training_why_choose_features"
  );
  const [faqs] = await db.query("SELECT * FROM training_faqs");

  return new Response(
    JSON.stringify({
      batches,
      whyChoose: why[0] || {},
      features,
      faqs,
    })
  );
}

// Single endpoint for saving all page content
export async function POST(req: Request) {
  const data = await req.json();
  const { batches, whyChoose, features, faqs } = data;

  // Save Batches
  for (const b of batches) {
    if (b.id) {
      await db.query(
        "UPDATE training_upcoming_batches SET course=?, date=?, time=?, mode=?, type=?, status=? WHERE id=?",
        [b.course, b.date, b.time, b.mode, b.type, b.status, b.id]
      );
    } else {
      await db.query(
        "INSERT INTO training_upcoming_batches (course,date,time,mode,type,status) VALUES (?,?,?,?,?,?)",
        [b.course, b.date, b.time, b.mode, b.type, b.status]
      );
    }
  }

  // Save Why Choose Us
  if (whyChoose.id) {
    await db.query(
      "UPDATE training_why_choose_us SET heading=?, highlight_text=?, description=?, image=?, badge_text=? WHERE id=?",
      [
        whyChoose.heading,
        whyChoose.highlight_text,
        whyChoose.description,
        whyChoose.image,
        whyChoose.badge_text,
        whyChoose.id,
      ]
    );
  } else {
    const [result]: any = await db.query(
      "INSERT INTO training_why_choose_us (heading,highlight_text,description,image,badge_text) VALUES (?,?,?,?,?)",
      [
        whyChoose.heading,
        whyChoose.highlight_text,
        whyChoose.description,
        whyChoose.image,
        whyChoose.badge_text,
      ]
    );
    whyChoose.id = result.insertId;
  }

  // Save Features
  await db.query(
    "DELETE FROM training_why_choose_features WHERE why_choose_id=?",
    [whyChoose.id]
  );
  for (const f of features) {
    await db.query(
      "INSERT INTO training_why_choose_features (feature_text,why_choose_id) VALUES (?,?)",
      [f.feature_text, whyChoose.id]
    );
  }

  // Save FAQs
  for (const f of faqs) {
    if (f.id) {
      await db.query(
        "UPDATE training_faqs SET question=?, answer=? WHERE id=?",
        [f.question, f.answer, f.id]
      );
    } else {
      await db.query(
        "INSERT INTO training_faqs (question, answer) VALUES (?, ?)",
        [f.question, f.answer]
      );
    }
  }

  return new Response(
    JSON.stringify({ message: "Page content updated successfully" })
  );
}
