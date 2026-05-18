"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const MOUNTAIN_LOCAL = "/hero-mountain.jpg";
const MOUNTAIN_FALLBACK =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop";

export function FinalCTA() {
  const [mountainSrc, setMountainSrc] = useState(MOUNTAIN_LOCAL);

  const handleMountainError = useCallback(() => {
    setMountainSrc((current) =>
      current === MOUNTAIN_LOCAL ? MOUNTAIN_FALLBACK : current,
    );
  }, []);

  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={mountainSrc}
          alt=""
          fill
          className="object-cover object-center brightness-[0.4]"
          sizes="100vw"
          onError={handleMountainError}
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/40" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center lg:px-10"
      >
        <h2 className="font-serif text-3xl leading-tight text-white md:text-5xl lg:text-6xl">
          Ready to build a smarter business?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-white/65 md:text-lg">
          Get your free custom mockup in 24 hours. No pressure, no commitment—just
          a clear picture of what your new site could look like.
        </p>
        <Link
          href="/booking"
          onClick={() => trackEvent("cta_click", { location: "final_cta" })}
          className="mt-10 inline-flex items-center justify-center bg-[#C9A962] px-10 py-4 text-xs font-semibold tracking-[0.18em] text-black transition-opacity hover:opacity-90"
        >
          CONTACT US →
        </Link>
      </motion.div>
    </section>
  );
}
