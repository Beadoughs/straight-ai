"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Shield } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function GuaranteeScarcity() {
  return (
    <section className="bg-[#0c0c0c] py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card flex flex-col p-8 md:p-10"
        >
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C9A962]/15">
            <Shield className="h-7 w-7 text-[#C9A962]" />
          </div>
          <h3 className="font-serif text-2xl text-white md:text-3xl">
            100% Risk-Free Guarantee
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
            Love your initial design, or we&apos;ll refund your package investment.
            No questions asked—you only move forward when you&apos;re thrilled.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="glass-card flex flex-col justify-between p-8 md:p-10"
        >
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A962]">
              LIMITED AVAILABILITY
            </p>
            <h3 className="font-serif mt-3 text-2xl text-white md:text-3xl">
              Only 5 spots available per month
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/60 md:text-base">
              We cap new projects so every client gets senior-level attention and a
              fast turnaround. Reserve your spot before this month fills up.
            </p>
          </div>
          <Link
            href="/booking"
            onClick={() => trackEvent("cta_click", { location: "scarcity_card" })}
            className="mt-8 inline-flex w-full items-center justify-center bg-white px-8 py-3.5 text-xs font-semibold tracking-[0.16em] text-black transition-opacity hover:bg-white/90 sm:w-auto"
          >
            CLAIM YOUR SPOT →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
