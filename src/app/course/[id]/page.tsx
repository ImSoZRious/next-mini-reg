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

      <WriteReview courseNo={course?.courseNo} />
      <h1 className="text-4xl font-bold pt-5">Review</h1>
      {reviews?.map(review => 
        <div className='py-1'>
          <Review data={review} key={review.id} />
        </div>
      )}
    </div>
  </div>;
}

function Review({ data: review }: { data: Review }) {
  return <p className="py-2 border-2 rounded-md p-2 bg-slate-100">
    {review.content}
  </p>;
}

function WriteReview({ courseNo }: { courseNo?: string }) {
  const [content, setContent] = useState("");

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    // TODO: sent data to server
  }

  function handleTextinputChange(e: React.FormEvent<HTMLTextAreaElement>) {
    const target = e.target as HTMLTextAreaElement;

    setContent(target.value);
  }

  return <div className='py-4'>
    <h2 className="text-4xl font-bold pt-5 pb-2">Write your review!</h2>
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <textarea placeholder="Write here!" title="review" value={content} onChange={handleTextinputChange} className="w-full bg-neutral-200 rounded-md p-2">

      </textarea>

      <div className="w-full flex justify-end py-2">
        <button type="submit" className="w-fit text-white border rounded-md p-2 bg-slate-600 hover:bg-slate-100 hover:text-black duration-200">Submit</button>
      </div>
    </form>
  </div>
}
