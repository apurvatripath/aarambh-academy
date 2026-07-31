import { faqs } from "@/data/site-content";

export function FaqSection() {
  return (
    <section id="faqs" className="scroll-mt-24 bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-500">FAQs</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Questions students and parents often ask</h2></div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => <details key={faq.question} className="group rounded-xl border border-slate-200 bg-white p-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">{faq.question}<span aria-hidden="true" className="text-2xl font-normal text-amber-500 group-open:rotate-45">+</span></summary><p className="mt-4 max-w-2xl leading-7 text-slate-700">{faq.answer}</p></details>)}
        </div>
      </div>
    </section>
  );
}
