"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { trackEvent } from "@/lib/analytics";

const MOUNTAIN_IMAGE_LOCAL = "/hero-mountain.jpg";
const MOUNTAIN_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2400&auto=format&fit=crop";

function GoldLineChart() {
  return (
    <svg viewBox="0 0 140 44" className="h-11 w-full" aria-hidden>
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#B8956A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#C9A962" />
        </linearGradient>
      </defs>
      <polyline
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        points="0,36 18,30 32,32 48,20 62,24 78,14 98,10 120,6 140,2"
      />
    </svg>
  );
}

function GoldBarChart() {
  const heights = [32, 20, 36, 16, 28, 12];
  return (
    <svg viewBox="0 0 140 44" className="h-11 w-full" aria-hidden>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 22 + 6}
          y={44 - h}
          width="12"
          height={h}
          rx="2"
          fill="#C9A962"
          opacity={0.75 + i * 0.04}
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
      className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white"
      aria-label="Hero"
    >
      <motion.div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={mountainSrc}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_35%] brightness-[0.42] saturate-0 contrast-[1.08]"
          onError={handleMountainError}
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/88 to-[#0a0a0a]/25"
          aria-hidden
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-black/30"
          aria-hidden
        />
      </motion.div>

      <motion.div
        {...motionProps}
        initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-10 px-6 pb-16 pt-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-6 lg:px-10 lg:pb-20 lg:pt-28"
      >
        <motion.div {...motionProps} className="max-w-2xl lg:pr-4">
          <p className="pill-tag">THE #1 QUESTION BUSINESS OWNERS ASK</p>

          <h1 className="font-serif mt-7 text-[2.35rem] leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-[3.35rem] xl:text-[3.75rem]">
            How can AI help my business grow faster and save me time and money?
          </h1>

          <p className="mt-6 max-w-lg text-base font-light leading-relaxed text-white/65 sm:text-lg">
            We build premium AI-optimized websites that attract visitors, capture
            leads, and free you from tech headaches—starting from $499 with free
            hosting included.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-stretch">
            <Link
              href="/booking"
              onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
              className="inline-flex min-h-[48px] items-center justify-center bg-white px-8 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-black transition-opacity hover:bg-white/92"
            >
              GET YOUR FREE MOCKUP →
            </Link>
            <Link
              href="#offer"
              onClick={() => trackEvent("cta_click", { location: "hero_secondary" })}
              className="inline-flex min-h-[48px] items-center justify-center border border-white/50 bg-transparent px-8 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white transition-colors hover:border-white hover:bg-white/5"
            >
              VIEW PACKAGES
            </Link>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto h-[min(420px,52vh)] w-full max-w-md lg:mx-0 lg:max-w-none lg:h-[min(480px,58vh)]">
          <motion.div
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.7, delay: 0.12 }}
            className="glass-card-glow absolute right-0 top-2 z-20 w-[min(100%,300px)] p-6 sm:right-4 sm:w-[280px] lg:right-6 lg:top-0"
          >
            <p className="text-[11px] font-medium tracking-wide text-white/55">
              Website Visitors
            </p>
            <p className="font-serif mt-1.5 text-4xl text-white">17.6K</p>
            <motion.div className="mt-4">
              <GoldLineChart />
            </motion.div>
          </motion.div>

          <motion.div
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24, rotate: 3 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="glass-card-glow absolute bottom-0 left-0 z-10 w-[min(100%,300px)] p-6 sm:left-4 sm:w-[280px] lg:bottom-4 lg:left-10"
          >
            <p className="text-[11px] font-medium tracking-wide text-white/55">
              Leads Generated
            </p>
            <p className="font-serif mt-1.5 text-4xl text-[#C9A962]">+42%</p>
            <motion.div className="mt-4">
              <GoldBarChart />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
