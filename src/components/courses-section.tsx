import { courses } from "@/data/site-content";

export function CoursesSection() {
  return (
    <section id="courses" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-500">Programmes</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Preparation paths for every important stage</h2>
          <p className="mt-4 text-lg leading-8 text-slate-700">Explore focused programme options based on the student’s current class and entrance-exam goal.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {courses.map((course, index) => (
            <article key={course.title} className="flex min-h-72 flex-col rounded-2xl border border-slate-200 p-6 shadow-[0_12px_40px_rgba(7,21,40,0.06)]">
              <span className="text-sm font-bold text-amber-500">0{index + 1}</span>
              <h3 className="mt-5 text-xl font-bold leading-7">{course.title}</h3>
              <p className="mt-4 flex-1 leading-7 text-slate-700">{course.description}</p>
              <a href="#enquiry" className="mt-6 font-bold text-navy-800 underline decoration-amber-500 decoration-2 underline-offset-4">Discuss This Programme</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
