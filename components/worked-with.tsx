"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function WorkedWith() {
  return (
    <section id="work" className="bg-gradient-to-b from-[#0f172a] to-[#111827] py-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="relative rounded-2xl border border-[#93c5fd]/35 bg-gradient-to-br from-[#1e3a8a] via-[#1e40af] to-[#0f172a] p-6 shadow-[0_14px_40px_rgba(2,6,23,0.55)] backdrop-blur-md transition-shadow duration-200 hover:shadow-[0_20px_50px_rgba(59,130,246,0.22)] md:p-8"
        >
          <div className="absolute inset-0 rounded-2xl bg-[linear-gradient(120deg,rgba(147,197,253,0.14),transparent_45%)] pointer-events-none" />
          <p className="text-sm font-semibold uppercase tracking-wide text-[#dbeafe]">
            Who we have worked with
          </p>
          <div className="mt-4 grid items-start gap-5 md:grid-cols-[260px_1fr]">
            <a
              href="https://beadoughs.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-20 items-center justify-center rounded-xl border border-[#93c5fd]/40 bg-[#0b1220]/65 p-5 md:h-24"
            >
              <Image
                src="/beadoughs-logo.svg"
                alt="Beadoughs logo"
                width={210}
                height={56}
              />
            </a>
            <div>
              <p className="text-lg font-semibold text-white">
                Beadoughs
              </p>
              <p className="mt-2 text-[#dbeafe]">
                &quot;The Straight AI team delivered quickly, stayed reliable through the whole
                build, and made every update easy to action. When we needed clarity around
                AI and website performance, they were accessible, practical, and easy to
                trust.&quot;
              </p>
              <div className="mt-4 overflow-hidden rounded-xl border border-[#93c5fd]/35 bg-[#0b1220]/75">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full"
                  src="/beadoughs-scroll.mov"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
