import { Hero } from "@/components/sections/Hero";
import { TaglineReveal } from "@/components/sections/TaglineReveal";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Barbers } from "@/components/sections/Barbers";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { ContactSection } from "@/components/sections/ContactSection";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TaglineReveal />
      <Services />
      <HowItWorks />
      <Barbers />
      <Testimonials />
      <FAQ />
      <ContactSection />
      <FinalCTA />
    </>
  );
}
