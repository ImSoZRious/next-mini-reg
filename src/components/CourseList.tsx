'use client';

import Link from 'next/link';
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
  courses: Course[];
};

const CourseList = () => {
  const [courses, setCourses] = useState<Course[]>();

  useEffect(() => {
    async function getData() {
      const res = await fetch('https://firstact-api.thinc.in.th/courses');
      const data: Data = await res.json();

      setCourses(data.courses);
    }

    getData();
  }, []);

  if (!courses) {
    return <div>No data!</div>;
  }

  return (
    <div className="flex flex-col gap-2 px-4">
      <h2 className="text-3xl font-semibold">Courses</h2>
      <hr className="border-slate-800 border-2" />
      <div className="grid grid-cols-4 gap-2">
        {courses.map((course) => {
          return (
            <Link href={`/course/${course.courseNo}`}>
              <div className="size-full min-h-64 border border-slate-800 shadow-lg rounded-2xl p-4">
                <h3 className="text-xl font-semibold">{course.abbrName}</h3>
                <h4 className="text-lg text-slate-600">{course.courseNo}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CourseList;
