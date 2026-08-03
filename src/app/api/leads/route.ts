import { NextResponse } from "next/server";

const visitorTypes = new Set(["Student", "Parent or guardian"]);
const currentClasses = new Set(["Class 8", "Class 9", "Class 10", "Class 11", "Class 12", "Completed Class 12"]);
const targetExams = new Set(["Foundation preparation", "JEE", "NEET", "MHT-CET", "School academics", "Not sure yet"]);
const targetYears = new Set(["2027", "2028", "2029", "Not sure yet"]);
const contactTimes = new Set([
  "Morning — 9:00 AM to 12:00 PM",
  "Afternoon — 12:00 PM to 4:00 PM",
  "Evening — 4:00 PM to 7:00 PM",
]);

type LeadInput = {
  visitorType: string;
  fullName: string;
  mobile: string;
  currentClass: string;
  targetExam: string;
  targetYear: string;
  contactTime: string;
  concern: string;
  consent: boolean;
};

function textField(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(value: unknown) {
  const body = typeof value === "object" && value !== null ? value as Record<string, unknown> : {};
  const lead: LeadInput = {
    visitorType: textField(body.visitorType),
    fullName: textField(body.fullName),
    mobile: textField(body.mobile),
    currentClass: textField(body.currentClass),
    targetExam: textField(body.targetExam),
    targetYear: textField(body.targetYear),
    contactTime: textField(body.contactTime),
    concern: textField(body.concern),
    consent: body.consent === true,
  };
  const errors: Record<string, string> = {};

  if (!visitorTypes.has(lead.visitorType)) errors.visitorType = "Select whether you are a student or parent.";
  if (lead.fullName.length < 2 || lead.fullName.length > 100) errors.fullName = "Enter a valid full name.";
  if (!/^\d{10}$/.test(lead.mobile)) errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!currentClasses.has(lead.currentClass)) errors.currentClass = "Select the student’s current class.";
  if (!targetExams.has(lead.targetExam)) errors.targetExam = "Select a target exam or goal.";
  if (!targetYears.has(lead.targetYear)) errors.targetYear = "Select a target year.";
  if (!contactTimes.has(lead.contactTime)) errors.contactTime = "Select a preferred contact time.";
  if (lead.concern.length < 10 || lead.concern.length > 1000) errors.concern = "Describe the academic concern in 10 to 1,000 characters.";
  if (!lead.consent) errors.consent = "Consent is required for this test submission.";

  return { lead, errors };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, errors: { form: "Submit valid form data." } }, { status: 400 });
  }

  const { lead, errors } = validateLead(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ success: false, errors }, { status: 400 });
  }

  const webhookUrl = process.env.N8N_WEBHOOK_URL;
  const webhookSecret = process.env.N8N_WEBHOOK_SECRET;
  if (!webhookUrl || !webhookSecret) {
    return NextResponse.json({ success: false, error: "automation_unavailable" }, { status: 500 });
  }

  const submissionId = crypto.randomUUID();
  const payload = {
    ...lead,
    submissionId,
    submittedAt: new Date().toISOString(),
    status: "New",
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30_000);

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-aarambh-webhook-secret": webhookSecret,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: controller.signal,
    });
    const result = await response.json().catch(() => null) as { success?: boolean; submissionId?: string; duplicate?: boolean } | null;

    if (!response.ok || result?.success !== true || result.submissionId !== submissionId) {
      return NextResponse.json({ success: false, submissionId, error: "automation_unavailable" }, { status: 502 });
    }

    return NextResponse.json(
      { success: true, submissionId, duplicate: result.duplicate === true },
      { status: result.duplicate === true ? 200 : 201 },
    );
  } catch {
    return NextResponse.json({ success: false, submissionId, error: "automation_unavailable" }, { status: 502 });
  } finally {
    clearTimeout(timeout);
  }
}
