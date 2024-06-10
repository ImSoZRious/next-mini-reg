import reviews from "@/data/review";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const filteredReview = reviews.filter(review => review.courseNo == params.id);

  return Response.json({ reviews: filteredReview });
}
