import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueStack } from "@/components/value-stack";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Comparison } from "@/components/comparison";
import { Testimonials } from "@/components/testimonials";
import { PricingCTA } from "@/components/pricing-cta";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueStack />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <Testimonials />
      <PricingCTA />
      <FinalCTA />
      <Footer />
      <div className="h-20 md:hidden" />
      <MobileStickyCTA />
    </main>
  );
}
