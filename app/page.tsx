import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueStack } from "@/components/value-stack";
import { HowItWorks } from "@/components/how-it-works";
import { Benefits } from "@/components/benefits";
import { Comparison } from "@/components/comparison";
import { PricingCTA } from "@/components/pricing-cta";
import { FinalCTA } from "@/components/final-cta";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";
import { WorkedWith } from "@/components/worked-with";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Straight AI",
  url: "https://straight-ai.com",
  logo: "https://straight-ai.com/sa-logo.png",
  description:
    "Straight AI helps business owners launch and manage AI-optimized websites built for visibility and conversion.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI-Optimized Website Design and Management",
  provider: {
    "@type": "Organization",
    name: "Straight AI",
    url: "https://straight-ai.com",
  },
  areaServed: "AU",
  description:
    "Website relaunch and growth package for business owners including design, launch, hosting, and ongoing AI-enabled support.",
};

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <Navbar />
      <Hero />
      <ValueStack />
      <HowItWorks />
      <Benefits />
      <Comparison />
      <WorkedWith />
      <PricingCTA />
      <FinalCTA />
      <Footer />
      <div className="h-24 md:hidden" />
      <MobileStickyCTA />
    </main>
  );
}
