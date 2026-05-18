"use client";

import { motion } from "framer-motion";

export function WorkedWith() {
  return (
    <section id="work" className="bg-gradient-to-b from-[#1a1a1a] to-[#141414] py-0">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          whileHover={{ y: -2 }}
          className="relative rounded-2xl border border-white/12 bg-gradient-to-br from-[#252525] via-[#1c1c1c] to-[#121212] p-4 shadow-[0_10px_24px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-shadow duration-200 hover:shadow-[0_14px_28px_rgba(0,0,0,0.55)] md:p-5"
        >
          <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.06),transparent_45%)]" />
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/90 md:text-sm">
            Our Work
          </p>
          <div className="mt-3 w-full overflow-hidden rounded-xl border border-white/12 bg-black/40 md:mx-auto md:w-1/2">
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
