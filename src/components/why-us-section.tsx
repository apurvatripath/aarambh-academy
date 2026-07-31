import { benefits } from "@/data/site-content";

export function WhyUsSection() {
  return (
    <section id="why-aarambh" className="scroll-mt-24 bg-cream py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10">
        <div><p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-500">Why Aarambh</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A clearer decision before coaching begins</h2><p className="mt-5 text-lg leading-8 text-slate-700">The counselling experience begins with the student’s actual situation—not a one-size-fits-all course pitch.</p></div>
        <div className="grid gap-5 sm:grid-cols-2">
          {benefits.map((benefit, index) => <article key={benefit.title} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(7,21,40,0.06)]"><span className="grid size-9 place-items-center rounded-lg bg-navy-900 text-sm font-bold text-amber-400">{index + 1}</span><h3 className="mt-5 text-xl font-bold">{benefit.title}</h3><p className="mt-3 leading-7 text-slate-700">{benefit.description}</p></article>)}
        </div>
      </div>
    </section>
  );
}
