"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkedWith() {
  return (
    <section id="work" className="bg-gradient-to-b from-[#1a1a1a] to-[#1f1f1f] py-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="relative rounded-2xl border border-[#f4d7a8]/35 bg-gradient-to-br from-[#2b2418] via-[#1f1f1f] to-[#121212] p-6 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-md transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(244,215,168,0.18)] md:p-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(244,215,168,0.14),transparent_45%)] pointer-events-none" />
          <p className="text-sm font-semibold uppercase tracking-wide text-[#f4d7a8]">
            Who we have worked with
          </p>
          <div className="mt-4 grid items-center gap-4 md:grid-cols-[220px_1fr]">
            <a
              href="https://beadoughs.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-16 items-center justify-center rounded-xl border border-[#f4d7a8]/40 bg-[#141414]/70 p-4 md:h-20"
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
              <p className="mt-2 text-[#f8ead2]">
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
