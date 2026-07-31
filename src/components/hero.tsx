const points = ["Current class and academic goals", "JEE, NEET, MHT-CET or foundation options", "Study gaps and immediate priorities", "A practical next step for the student"];

export function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-navy-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-10 lg:py-16">
        <div>
          <p className="mb-5 text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Coaching guidance for Classes 8–12</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-5xl">Choose the right coaching path with a focused counselling session.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-7 text-slate-200">Share the student’s class, target exam and current challenges. We’ll use those details to focus the counselling conversation on the right programme, study priorities and next step.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#enquiry" className="rounded-lg bg-amber-500 px-6 py-4 text-center font-bold text-navy-950 hover:bg-amber-400">Request a Counselling Call</a>
            <a href="#enquiry" className="rounded-lg border border-white/30 px-6 py-3 text-center font-bold text-white hover:bg-white/10"><span className="block">WhatsApp Enquiry</span><span className="block text-xs font-medium text-slate-200">Demo flow</span></a>
          </div>
        </div>
        <aside className="rounded-2xl border border-white/15 bg-white/[0.07] p-6 sm:p-8">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-amber-400">A focused first conversation</p>
          <h2 className="mt-3 text-2xl font-bold">Your counselling discussion can cover:</h2>
          <ul className="mt-6 space-y-4">
            {points.map((point, index) => <li key={point} className="flex gap-4 text-slate-200"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-amber-500 text-xs font-bold text-navy-950">{index + 1}</span><span>{point}</span></li>)}
          </ul>
        </aside>
      </div>
    </section>
  );
}
