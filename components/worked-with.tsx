"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkedWith() {
  return (
    <section id="work" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="relative rounded-2xl border border-white/20 bg-gradient-to-br from-white/12 via-white/6 to-transparent p-6 shadow-[0_14px_40px_rgba(255,255,255,0.08)] backdrop-blur-md transition-shadow duration-200 hover:shadow-[0_18px_48px_rgba(255,255,255,0.12)] md:p-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_50%)] pointer-events-none" />
          <p className="text-sm font-semibold uppercase tracking-wide text-white/80">
            Who we have worked with
          </p>
          <div className="mt-4 grid items-center gap-4 md:grid-cols-[220px_1fr]">
            <a
              href="https://beadoughs.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-16 items-center justify-center rounded-xl border border-border/60 bg-background/60 p-4 md:h-20"
            >
              <Image
                src="/beadoughs-logo.svg"
                alt="Beadoughs logo"
                width={170}
                height={44}
              />
            </a>
            <div>
              <p className="text-lg font-semibold text-white">
                Beadoughs
              </p>
              <p className="mt-2 text-white/85">
                &quot;The Straight AI team delivered quickly, stayed reliable through the whole
                build, and made every update easy to action. When we needed clarity around
                AI and website performance, they were accessible, practical, and easy to
                trust.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
