"use client";

import { FormEvent, useState } from "react";
import { targetYears } from "@/data/site-content";

const fieldClass = "mt-2 min-h-12 w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-base text-navy-950 placeholder:text-slate-500 focus:border-navy-800 focus:outline-none";
const classes = ["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Completed Class 12"];
const goals = ["Foundation preparation", "JEE", "NEET", "MHT-CET", "School academics", "Not sure yet"];

type SubmissionStatus = "idle" | "submitting" | "success" | "error";

export function EnquiryForm() {
  const [status, setStatus] = useState<SubmissionStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("submitting");
    setErrors({});

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          visitorType: formData.get("visitorType"),
          fullName: formData.get("fullName"),
          mobile: formData.get("mobile"),
          currentClass: formData.get("currentClass"),
          targetExam: formData.get("targetExam"),
          targetYear: formData.get("targetYear"),
          contactTime: formData.get("contactTime"),
          concern: formData.get("concern"),
          consent: formData.get("consent") === "on",
        }),
      });
      const result = await response.json().catch(() => null) as { success?: boolean; errors?: Record<string, string> } | null;

      if (response.ok && result?.success === true) {
        form.reset();
        setStatus("success");
        return;
      }

      if (response.status === 400 && result?.errors) setErrors(result.errors);
      setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="enquiry" className="scroll-mt-24 bg-navy-950 py-20 text-white sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-amber-400">Counselling Enquiry</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Request a counselling call</h2>
          <p className="mt-5 text-lg leading-8 text-slate-200">Share a few details so the conversation can begin with the student’s actual needs.</p>
          <div className="mt-8 rounded-xl border border-amber-400/40 bg-amber-400/10 p-5 text-sm leading-6 text-slate-100"><strong className="text-amber-400">Demonstration workflow.</strong> Use fictional details only. Successful test submissions are processed and stored in a private test sheet.</div>
        </div>
        <form onSubmit={submit} className="rounded-2xl bg-white p-6 text-navy-950 shadow-2xl sm:p-8">
          <div className="grid gap-6 sm:grid-cols-2">
            <label className="text-sm font-bold">I am a <span className="text-red-700">*</span>
              <select name="visitorType" required defaultValue="" className={fieldClass}><option value="" disabled>Select one</option><option>Student</option><option>Parent or guardian</option></select>
            </label>
            <label className="text-sm font-bold">Full name <span className="text-red-700">*</span>
              <input name="fullName" required autoComplete="name" placeholder="Enter your full name" className={fieldClass} />
            </label>
            <label className="text-sm font-bold">Mobile number <span className="text-red-700">*</span>
              <input name="mobile" required type="tel" inputMode="numeric" pattern="[0-9]{10}" autoComplete="tel" placeholder="Enter a 10-digit mobile number" className={fieldClass} />
              <span className="mt-2 block text-xs font-normal leading-5 text-slate-500">Use a fictional 10-digit number for this portfolio test.</span>
            </label>
            <label className="text-sm font-bold">Student’s current class <span className="text-red-700">*</span>
              <select name="currentClass" required defaultValue="" className={fieldClass}><option value="" disabled>Select current class</option>{classes.map((item) => <option key={item}>{item}</option>)}</select>
            </label>
            <label className="text-sm font-bold">Target exam or goal <span className="text-red-700">*</span>
              <select name="targetExam" required defaultValue="" className={fieldClass}><option value="" disabled>Select a goal</option>{goals.map((item) => <option key={item}>{item}</option>)}</select>
            </label>
            <label className="text-sm font-bold">Target year <span className="text-red-700">*</span>
              <select name="targetYear" required defaultValue="" className={fieldClass}><option value="" disabled>Select target year</option>{targetYears.map((year) => <option key={year}>{year}</option>)}</select>
            </label>
            <label className="text-sm font-bold sm:col-span-2">Preferred contact time <span className="text-red-700">*</span>
              <select name="contactTime" required defaultValue="" className={fieldClass}><option value="" disabled>Select a convenient time</option><option>Morning — 9:00 AM to 12:00 PM</option><option>Afternoon — 12:00 PM to 4:00 PM</option><option>Evening — 4:00 PM to 7:00 PM</option></select>
            </label>
            <label className="text-sm font-bold sm:col-span-2">Biggest academic concern <span className="text-red-700">*</span>
              <textarea name="concern" required minLength={10} maxLength={1000} rows={4} placeholder="For example: weak fundamentals, exam strategy, time management or choosing the right programme" className={fieldClass} />
            </label>
          </div>
          <label className="mt-6 flex items-start gap-3 text-sm leading-6 text-slate-700">
            <input type="checkbox" name="consent" required className="mt-1 size-5 shrink-0 accent-navy-900" />
            <span>I consent to this fictional test submission being processed by the demonstration workflow. No real counselling service is offered.</span>
          </label>
          {Object.keys(errors).length > 0 && <div role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800"><p className="font-bold">Please correct the form:</p><ul className="mt-2 list-disc space-y-1 pl-5">{Object.values(errors).map((error) => <li key={error}>{error}</li>)}</ul></div>}
          <button type="submit" disabled={status === "submitting"} className="mt-7 min-h-12 w-full rounded-lg bg-amber-500 px-6 py-3 font-bold text-navy-950 hover:bg-amber-400 disabled:cursor-wait disabled:opacity-70">{status === "submitting" ? "Submitting…" : "Request Counselling"}</button>
          {status === "success" && <p role="status" className="mt-5 rounded-lg bg-cream p-4 text-sm font-medium leading-6 text-navy-900">Test enquiry submitted successfully. The fictional lead was processed by the demonstration workflow.</p>}
          {status === "error" && Object.keys(errors).length === 0 && <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 p-4 text-sm font-medium leading-6 text-red-800">The test enquiry could not be processed. Please try again.</p>}
        </form>
      </div>
    </section>
  );
}
