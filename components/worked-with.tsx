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
          className="rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8"
        >
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
                &quot;Working with Straight AI felt easy from day one. They moved fast,
                delivered exactly when they said they would, and stayed available whenever
                we needed practical advice around AI and website performance. We trust
                their team because they explain things clearly and back it up with action.&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
