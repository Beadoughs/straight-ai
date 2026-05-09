"use client";

import { motion } from "framer-motion";

export function WorkedWith() {
  return (
    <section id="work" className="bg-gradient-to-b from-[#0f172a] to-[#111827] py-0">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -2 }}
          className="relative rounded-2xl border border-[#93c5fd]/20 bg-gradient-to-br from-[#15244a] via-[#142445] to-[#101a33] p-4 shadow-[0_10px_24px_rgba(2,6,23,0.3)] backdrop-blur-sm transition-shadow duration-200 hover:shadow-[0_14px_28px_rgba(15,23,42,0.35)] md:p-5"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(147,197,253,0.08),transparent_45%)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#dbeafe]/90 md:text-sm">
            Our Work
          </p>
          <div className="mt-3 overflow-hidden rounded-xl border border-[#93c5fd]/25 bg-[#0b1220]/65">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="aspect-[10/6] h-full w-full object-cover"
              src="/beadoughs-scroll.mov"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
