"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const MOUNTAIN_IMAGE_LOCAL = "/hero-mountain.jpg";
const MOUNTAIN_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1920&auto=format&fit=crop";

function GoldLineChart() {
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full" aria-hidden>
      <polyline
        fill="none"
        stroke="#C9A962"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="0,32 20,28 35,30 50,18 65,22 80,12 95,8 120,4"
      />
    </svg>
  );
}

function GoldBarChart() {
  const heights = [28, 18, 32, 14, 24, 10];
  return (
    <svg viewBox="0 0 120 40" className="h-10 w-full" aria-hidden>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 18 + 4}
          y={40 - h}
          width="10"
          height={h}
          rx="2"
          fill="#C9A962"
          opacity={0.85 + i * 0.02}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [mountainSrc, setMountainSrc] = useState(MOUNTAIN_IMAGE_LOCAL);

  const handleMountainError = useCallback(() => {
    setMountainSrc((current) =>
      current === MOUNTAIN_IMAGE_LOCAL ? MOUNTAIN_IMAGE_FALLBACK : current,
    );
  }, []);

  const motionProps = prefersReducedMotion
    ? { initial: false as const, animate: { opacity: 1, x: 0, y: 0 } }
    : {};

  return (
    <section
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-[#0a0a0a] text-white"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={mountainSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[0.45] saturate-[0.85]"
          onError={handleMountainError}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/50"
          aria-hidden
        />
      </div>

      <motion.div
        {...motionProps}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl items-center gap-12 px-6 py-28 lg:grid-cols-2 lg:gap-8 lg:px-10 lg:py-32"
      >
        <motion.div {...motionProps} className="max-w-xl">
          <p className="inline-block border border-white/30 px-3 py-1.5 text-[10px] font-medium tracking-[0.22em] text-white/90 sm:text-[11px]">
            THE #1 QUESTION BUSINESS OWNERS ASK
          </p>

          <h1 className="font-serif mt-6 text-4xl leading-[1.15] tracking-tight text-balance sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            How can AI help my business grow faster and save me time and money?
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/70 sm:text-lg">
            We build premium AI-optimized websites that attract visitors, capture
            leads, and free you from tech headaches—starting from $499 with free
            hosting included.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/booking"
              onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
              className="inline-flex items-center justify-center bg-white px-8 py-3.5 text-xs font-semibold tracking-[0.18em] text-black transition-opacity hover:bg-white/90"
            >
              GET YOUR FREE MOCKUP →
            </Link>
            <Link
              href="#offer"
              onClick={() => trackEvent("cta_click", { location: "hero_secondary" })}
              className="inline-flex items-center justify-center border border-white/40 px-8 py-3.5 text-xs font-semibold tracking-[0.18em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              VIEW PACKAGES
            </Link>
          </div>
        </motion.div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
          <motion.div
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20, x: 10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-card absolute right-0 top-0 z-10 w-[min(100%,280px)] p-5 sm:w-72 lg:right-8 lg:top-4"
          >
            <p className="text-xs font-medium tracking-wide text-white/60">
              Website Visitors
            </p>
            <p className="mt-1 font-serif text-3xl text-white">17.6K</p>
            <motion.div className="mt-3">
              <GoldLineChart />
            </motion.div>
          </motion.div>

          <motion.div
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20, x: -10 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="glass-card relative mt-32 w-[min(100%,280px)] p-5 sm:mt-36 sm:w-72 lg:mt-40 lg:ml-8"
          >
            <p className="text-xs font-medium tracking-wide text-white/60">
              Leads Generated
            </p>
            <p className="mt-1 font-serif text-3xl text-[#C9A962]">+42%</p>
            <motion.div className="mt-3">
              <GoldBarChart />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
