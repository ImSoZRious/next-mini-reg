'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

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

type Data = {
  studyProgram: string;
  semester: string;
  academicYear: string;
  course: Course;
};

export default function Page() {
  const [course, setCourse] = useState<Course>();
  const params = useParams<{ id: string }>();

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        'https://firstact-api.thinc.in.th/courses/' + params.id
      );
      const data: Data = await res.json();

      setCourse(data.course);
    }

    getData();
  }, []);

  return <div>{course?.courseNameEn}</div>;
}
