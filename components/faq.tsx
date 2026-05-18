"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  {
    question: "What's included in the $499 Launch Package?",
    answer: `Your launch includes custom design, mobile responsiveness, SEO-ready structure, and fast turnaround. Ongoing hosting, 24/7 AI chatbot, minor updates, and monthly analytics are included at no extra hosting fee.`,
  },
  {
    question: "How long does it take to go live?",
    answer:
      "Most sites launch within days—not months. After your free mockup is approved, we move quickly through build, review, and publish.",
  },
  {
    question: "Do I own my website?",
    answer:
      "Yes. You retain full ownership of your site and content. We manage hosting and updates as part of your package.",
  },
  {
    question: "What if I don't like the initial design?",
    answer:
      "You're covered by our 100% risk-free guarantee. If you don't love your initial design, we'll refund your package investment.",
  },
  {
    question: "How does the free mockup work?",
    answer:
      "Book a quick call, share your goals, and we'll deliver a custom mockup within 24 hours—no obligation to proceed.",
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer: `No long contracts. Websites start from $${siteConfig.pricing.packageFromUsd} with transparent pricing and free hosting included.`,
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-serif text-3xl text-white md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-white/55">
            Everything you need to know before you launch.
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          className="mt-12 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] px-6"
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-white/10">
              <AccordionTrigger className="text-left text-base font-medium text-white hover:no-underline hover:text-[#C9A962]">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-white/60">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
