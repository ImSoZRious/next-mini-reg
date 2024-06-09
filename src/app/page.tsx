import CourseList from '@/components/CourseList';

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <div className="w-full px-8">
        <div className="bg-slate-600 text-white px-8 py-6 rounded-xl">
          MiniReg is a demo website.
        </div>
      </div>
      <CourseList />
    </main>
  );
}
