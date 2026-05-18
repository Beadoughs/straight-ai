import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { ValueStack } from "@/components/value-stack";
import { TrustedBy } from "@/components/trusted-by";
import { StatsGrid } from "@/components/stats-grid";
import { GuaranteeScarcity } from "@/components/guarantee-scarcity";
import { FinalCTA } from "@/components/final-cta";
import { FAQ } from "@/components/faq";
import { Footer } from "@/components/footer";
import { MobileStickyCTA } from "@/components/mobile-sticky-cta";

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
    <main className="min-h-screen bg-[#0a0a0a]">
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
      <TrustedBy />
      <StatsGrid />
      <GuaranteeScarcity />
      <FinalCTA />
      <FAQ />
      <Footer />
      <div className="h-24 md:hidden" />
      <MobileStickyCTA />
    </main>
  );
}
