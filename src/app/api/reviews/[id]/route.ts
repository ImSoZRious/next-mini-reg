import reviews from "@/data/review";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const filteredReview = reviews.filter(review => review.courseNo == params.id);

  return Response.json({ reviews: filteredReview });
}

export async function POST(request: Request, { params }: { params: { id: string }}) {
  const body = await request.json();

  reviews.push({
    id: (reviews.length + 1).toString(),
    content: body.content,
    courseNo: params.id,
  });

  return Response.json({ ok: true });
}
