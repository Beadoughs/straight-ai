"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-34 pb-8 md:pt-32 md:pb-14">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-white/90"
          >
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span>Premium Website Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Conversion-Focused Websites{" "}
            <span className="text-white">
              Built to Convert.
            </span>{" "}
            Designed to Outperform.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg md:text-xl"
          >
            We relaunch your site with modern UX, SEO-ready structure, and conversion-first
            messaging, then manage hosting, updates, and AI support so you keep market
            momentum without adding operational load.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 flex flex-col items-center gap-3 sm:flex-row"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-white/20 bg-gradient-to-br from-white/12 to-white/5 px-5 py-2.5 shadow-[0_10px_30px_rgba(255,255,255,0.08)] backdrop-blur-sm"
            >
              <p className="text-sm text-white/80">Website package</p>
              <p className="text-2xl font-bold tracking-tight">
                $499 + $49
                <span className="text-base font-normal text-white/80">
                  /week
                </span>
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 w-full sm:w-auto"
          >
            <Button asChild size="lg" className="group h-12 w-full px-6 text-base font-medium sm:w-auto sm:px-8">
              <a
                href="/booking"
                onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
              >
                Book Free Website Consult
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            whileHover={{ y: -3 }}
            className="mt-5 rounded-xl border border-white/15 bg-gradient-to-r from-white/10 to-white/5 px-5 py-3 text-sm text-white/90 shadow-[0_8px_24px_rgba(255,255,255,0.06)]"
          >
            Built by business owners for growth-focused business owners.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
