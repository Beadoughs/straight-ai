"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function FinalCTA() {
  return (
    <section id="book-call" className="bg-secondary/30 py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Ready to Launch Your Website?
          </h2>
          <p className="mt-6 max-w-2xl text-lg text-white/85">
            Book your free consult to get a clear action plan for upgrading your site,
            improving visibility, and converting more traffic.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group h-14 px-10 text-lg font-medium">
              <a
                href="/booking"
                onClick={() => trackEvent("cta_click", { location: "final_section" })}
              >
                Book Free Website Consult
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/80">
            Free consult • No obligation • Practical action plan
          </p>
        </motion.div>
      </div>
    </section>
  );
}
