import db from "@/db/drizzle";
import { reviews } from "@/db/schema/reviews";

type NewReview = typeof reviews.$inferInsert;

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const _reviews = await db.select().from(reviews);

  const filteredReview = _reviews.filter(review => review.courseNo == params.id);

  return Response.json({ reviews: filteredReview });
}

export async function POST(request: Request, { params }: { params: { id: string }}) {
  const body = await request.json();

  const newReview: NewReview = {
    content: body.content,
    courseNo: params.id,
  };

  await db.insert(reviews).values(newReview);

  return Response.json({ ok: true });
}
