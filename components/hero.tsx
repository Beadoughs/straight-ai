"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#060606] to-[#0d0d0d] pt-34 pb-0 md:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {reduceMotion ? (
          <div className="absolute top-0 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-white/[0.06] blur-3xl" />
        ) : (
          <>
            <motion.div
              className="absolute -top-20 left-[10%] h-[min(420px,50vw)] w-[min(420px,50vw)] rounded-full bg-white/[0.09] blur-3xl"
              animate={{
                x: [0, 40, 0],
                y: [0, -28, 0],
                scale: [1, 1.12, 1],
              }}
              transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-32 right-[-5%] h-[min(380px,45vw)] w-[min(380px,45vw)] rounded-full bg-white/[0.06] blur-3xl"
              animate={{
                x: [0, -36, 0],
                y: [0, 24, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
            <motion.div
              className="absolute bottom-0 left-1/2 h-[min(360px,40vw)] w-[min(700px,90vw)] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl"
              animate={{ opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
          </>
        )}
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-10 md:pb-12">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-white/90"
          >
            <Zap className="h-3.5 w-3.5 text-white" />
            <span>Premium Website Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
          >
            AI-Optimized Websites{" "}
            <span className="text-white">
              Built to Convert.
            </span>{" "}
            Built to Lead.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 max-w-3xl text-base text-white/90 sm:text-lg md:text-xl"
          >
            We relaunch your site for visibility, trust, and lead flow, then manage hosting,
            updates, and AI support so your team stays focused on growth.
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
              <p className="text-sm text-white/90">Website package</p>
              <p className="text-2xl font-bold tracking-tight">
                $499 + $49
                <span className="text-base font-normal text-white/90">
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

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="mt-5 text-sm font-medium tracking-wide text-white/90"
          >
            Built by business owners, for business owners.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
