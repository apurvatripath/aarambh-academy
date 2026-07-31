import { processSteps } from "@/data/site-content";

export function ProcessSection() {
  return (
    <section id="process" className="scroll-mt-24 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-500">How It Works</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A simple three-step counselling process</h2><p className="mt-4 text-lg leading-8 text-slate-700">Share the student’s situation first so the follow-up conversation can be focused and useful.</p></div>
        <ol className="mt-12 grid gap-6 lg:grid-cols-3">{processSteps.map((step) => <li key={step.number} className="rounded-2xl border border-slate-200 p-7"><span className="text-4xl font-bold text-amber-500">{step.number}</span><h3 className="mt-6 text-xl font-bold">{step.title}</h3><p className="mt-3 leading-7 text-slate-700">{step.description}</p></li>)}</ol>
      </div>
    </section>
  );
}
