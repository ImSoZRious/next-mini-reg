'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

type Review = {
  id: string;
  courseNo: string;
  content: string;
}

type Course = {
  courseNo: string;
  abbrName: string;
  courseNameTh: string;
  courseNameEn: string;
  department: string;
  credit: number;
  creditHours: string;
  genEdType: string;
  totalSeats: number;
  updatedAt: Date;
};

type CourseData = {
  studyProgram: string;
  semester: string;
  academicYear: string;
  course: Course;
};

type ReviewData = {
  reviews: Review[];
};

export default function Page() {
  const [course, setCourse] = useState<Course>();
  const [reviews, setReviews] = useState<Review[]>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    async function getCourseData() {
      const res = await fetch(
        'https://firstact-api.thinc.in.th/courses/' + params.id
      );
      const data: CourseData = await res.json();

      setCourse(data.course);
    }

    async function getCourseReview() {
      const res = await fetch(
        '/api/reviews/' + params.id
      );
      const data: ReviewData = await res.json();

      setReviews(data.reviews);
    }

    getCourseData();
    getCourseReview();
  }, []);

  return <div className="w-full flex justify-center">
    <div className="w-2/3">
      <h1 className="text-4xl font-bold"><span>{course?.courseNo} {course?.abbrName}</span></h1>
      <h2 className="text-xl">{course?.courseNameEn}</h2>
      <h2 className="text-xl">{course?.courseNameTh}</h2>

      <h1 className="text-4xl font-bold pt-5">Review</h1>
      {reviews?.map(review => 
        <Review data={review} key={review.id} />
      )}
    </div>
  </div>;
}

function Review({ data: review }: { data: Review }) {
  return <h1>
    {review.content}
  </h1>;
}
