"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="bg-secondary/30 py-20 md:py-32">
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
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
            Enter your details and let our experts create a custom mockup for your
            business within 24 hours. No pressure, no commitment.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="group h-14 px-10 text-lg font-medium">
              <a href="/booking">
                Get Your Free Custom Mockup
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            100% Free Mockup • No obligation • 24 hour turnaround
          </p>
        </motion.div>
      </div>
    </section>
  );
}
