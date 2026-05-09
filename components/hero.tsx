"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-10 md:pt-32 md:pb-14">
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
            className="max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl"
          >
            AI-Optimized Websites{" "}
            <span className="text-white">
              Built to Convert.
            </span>{" "}
            Built to Keep You Relevant.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-3xl text-lg text-white/90 md:text-xl"
          >
            For business owners ready to upgrade or relaunch, we build a modern site
            fast, then handle hosting, updates, and AI support so you stay ahead of competitors
            and easier to find online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <div className="rounded-xl border border-border/60 bg-card/50 px-6 py-3 backdrop-blur-sm">
              <p className="text-sm text-white/80">Website package</p>
              <p className="text-2xl font-bold tracking-tight">
                $499 + $49
                <span className="text-base font-normal text-white/80">
                  /week
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Button asChild size="lg" className="group h-12 px-8 text-base font-medium">
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
            className="mt-5 rounded-xl border border-border/60 bg-card/50 px-5 py-3 text-sm text-white/85"
          >
            Built by business owners, for business owners.
          </motion.div>
        </div>
      </div>
    </section>
  );
}
