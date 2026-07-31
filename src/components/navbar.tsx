"use client";

import { useRef } from "react";
import { navigation } from "@/data/site-content";

export function Navbar() {
  const mobileMenuRef = useRef<HTMLDetailsElement>(null);

  function closeMobileMenu() {
    if (mobileMenuRef.current) {
      mobileMenuRef.current.open = false;
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <nav aria-label="Main navigation" className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="flex items-center gap-3" aria-label="Aarambh Academy home">
          <span className="grid size-11 place-items-center rounded-xl bg-navy-900 text-lg font-bold text-white">A</span>
          <span><span className="block font-bold text-navy-950">Aarambh Academy</span><span className="block text-xs text-slate-500">Pune</span></span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">
          {navigation.map((link) => <a key={link.href} href={link.href} className="text-sm font-semibold text-slate-700 hover:text-navy-900">{link.label}</a>)}
          <a href="#enquiry" className="rounded-lg bg-navy-900 px-5 py-3 text-sm font-bold text-white hover:bg-navy-800">Book Counselling</a>
        </div>
        <details ref={mobileMenuRef} className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-slate-200 px-4 py-2 text-sm font-bold">Menu</summary>
          <div className="absolute right-0 mt-3 w-64 rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
            {navigation.map((link) => <a key={link.href} href={link.href} onClick={closeMobileMenu} className="block rounded-lg px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-cream">{link.label}</a>)}
            <a href="#enquiry" onClick={closeMobileMenu} className="mt-2 block rounded-lg bg-navy-900 px-4 py-3 text-center text-sm font-bold text-white">Book Counselling</a>
          </div>
        </details>
      </nav>
    </header>
  );
}
