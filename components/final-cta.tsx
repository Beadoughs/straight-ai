"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const MOUNTAIN_LOCAL = "/hero-mountain.jpg";
const MOUNTAIN_FALLBACK =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop";

export function FinalCTA() {
  const [mountainSrc, setMountainSrc] = useState(MOUNTAIN_LOCAL);

  const handleMountainError = useCallback(() => {
    setMountainSrc((current) =>
      current === MOUNTAIN_LOCAL ? MOUNTAIN_FALLBACK : current,
    );
  }, []);

  return (
    <section id="contact" className="relative min-h-[420px] overflow-hidden md:min-h-[480px]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={mountainSrc}
          alt=""
          fill
          className="object-cover object-center brightness-[0.38] saturate-0"
          sizes="100vw"
          onError={handleMountainError}
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/40 to-black/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 flex min-h-[420px] flex-col items-center justify-center px-6 py-24 text-center md:min-h-[480px] md:py-32 lg:px-10"
      >
        <h2 className="font-serif max-w-3xl text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
          Ready to build a smarter business?
        </h2>
        <Link
          href="/booking"
          onClick={() => trackEvent("cta_click", { location: "final_cta" })}
          className="mt-10 inline-flex min-h-[48px] items-center justify-center bg-[#C9A962] px-12 py-4 text-[11px] font-semibold tracking-[0.16em] text-[#0a0a0a] transition-opacity hover:opacity-90"
        >
          CONTACT US →
        </Link>
      </motion.div>
    </section>
  );
}
