export type Item = { title: string; description: string };
export type Faq = { question: string; answer: string };

export const navigation = [
  { label: "Courses", href: "#courses" },
  { label: "Why Aarambh", href: "#why-aarambh" },
  { label: "How It Works", href: "#process" },
  { label: "FAQs", href: "#faqs" },
];

export const courses: Item[] = [
  { title: "Foundation — Classes 8–10", description: "Strengthen Maths and Science fundamentals, develop consistent study habits and prepare confidently for senior-secondary academics." },
  { title: "JEE Preparation — Classes 11–12", description: "Build a structured preparation plan across Physics, Chemistry and Mathematics for engineering entrance examinations." },
  { title: "NEET Preparation — Classes 11–12", description: "Follow a focused preparation path across Physics, Chemistry and Biology for medical entrance examinations." },
  { title: "MHT-CET Preparation — Classes 11–12", description: "Prepare around the Maharashtra entrance-exam pattern, syllabus priorities and consistent question practice." },
];

export const benefits: Item[] = [
  { title: "Goal-first guidance", description: "Programme discussions begin with the student’s class, target exam and present academic position." },
  { title: "Parent-inclusive counselling", description: "Students and parents can discuss expectations, schedules and practical concerns together." },
  { title: "Focused study direction", description: "The conversation identifies the subjects, study habits and immediate priorities that need attention." },
  { title: "Clear next steps", description: "Every enquiry is organised around what the student should do next, without vague promises or pressure." },
];

export const processSteps = [
  { number: "01", title: "Share the student’s goals", description: "Complete the short enquiry with the student’s class, target exam and main academic concern." },
  { number: "02", title: "Speak with a counsellor", description: "Select a convenient contact period for a focused conversation with the student, parent or both." },
  { number: "03", title: "Understand the next step", description: "Discuss the suitable programme direction, immediate study priorities and recommended way forward." },
];

export const targetYears = ["2027", "2028", "2029", "Not sure yet"];

export const faqs: Faq[] = [
  { question: "Which classes are covered?", answer: "The programmes include foundation coaching for Classes 8–10 and entrance-exam preparation for students in Classes 11–12." },
  { question: "Which entrance exams are included?", answer: "The programme options cover JEE, NEET and MHT-CET preparation, along with foundation and school-academic guidance." },
  { question: "Can parents join the counselling call?", answer: "Yes. Parents and students can discuss goals, schedules and programme options together." },
  { question: "Must a course be selected before enquiring?", answer: "No. Share the student’s current class and goal. The counselling discussion is intended to help clarify the suitable path." },
  { question: "Does an enquiry confirm admission?", answer: "No. The form is a counselling enquiry only. Programme details and admission decisions are handled separately." },
];
