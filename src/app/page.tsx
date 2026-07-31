import { CoursesSection } from "@/components/courses-section";
import { DemoBanner } from "@/components/demo-banner";
import { EnquiryForm } from "@/components/enquiry-form";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { ProcessSection } from "@/components/process-section";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { WhyUsSection } from "@/components/why-us-section";

export default function Home() {
  return (
    <>
      <DemoBanner />
      <Navbar />
      <main>
        <Hero />
        <CoursesSection />
        <WhyUsSection />
        <ProcessSection />
        <EnquiryForm />
        <FaqSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
