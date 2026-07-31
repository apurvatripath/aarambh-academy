import { navigation } from "@/data/site-content";

export function Footer() {
  return (
    <footer className="bg-navy-950 px-5 py-12 text-white sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-10 border-b border-white/15 pb-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div><p className="text-xl font-bold">Aarambh Academy</p><p className="mt-3 max-w-md leading-7 text-slate-200">Focused coaching guidance and a clear counselling enquiry experience for students and parents in Pune.</p></div>
        <div><p className="font-bold text-amber-400">Explore</p><div className="mt-4 grid gap-3">{navigation.map((link) => <a key={link.href} href={link.href} className="text-sm text-slate-200 hover:text-white">{link.label}</a>)}<a href="#enquiry" className="text-sm text-slate-200 hover:text-white">Counselling Enquiry</a></div></div>
        <div><p className="font-bold text-amber-400">Contact</p><p className="mt-4 text-sm text-slate-200">Pune, Maharashtra</p><p className="mt-3 text-sm leading-6 text-slate-200">Contact details configured during client setup.</p></div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-3 text-xs leading-5 text-slate-200 sm:flex-row sm:items-center sm:justify-between"><p>Portfolio demonstration only. Aarambh Academy is fictional, and no courses, admissions or counselling services are offered through this website.</p><p className="shrink-0">Aarambh Academy demonstration website</p></div>
    </footer>
  );
}
