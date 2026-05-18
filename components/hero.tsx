"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";

/** Drop your own B&W mountain at `public/hero-mountain.jpg` to replace the default. */
const MOUNTAIN_IMAGE_LOCAL = "/hero-mountain.jpg";
const MOUNTAIN_IMAGE_FALLBACK =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1920&auto=format&fit=crop";

const headlineLines = [
  { text: "Modern websites.", bold: false },
  { text: "Smarter systems.", bold: false },
  { text: "Stronger businesses.", bold: true },
] as const;

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
      className="relative min-h-[calc(100vh-4rem)] overflow-hidden bg-black text-white"
      aria-label="Hero"
    >
      {/* Mountain — right on desktop, atmospheric strip on mobile */}
      <motion.div
        {...motionProps}
        initial={prefersReducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 md:left-[38%]"
        aria-hidden
      >
        <motion.div
          {...motionProps}
          initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
          className="relative h-[42vh] min-h-[220px] w-full md:absolute md:inset-0 md:h-full"
        >
          <Image
            src={mountainSrc}
            alt=""
            fill
            priority
            sizes="(max-width: 768px) 100vw, 62vw"
            className="object-cover object-[center_35%] grayscale contrast-[1.08] brightness-[0.92] md:object-[70%_40%]"
            onError={handleMountainError}
          />
          {/* Fade into black on the left (desktop) */}
          <motion.div
            className="absolute inset-0 hidden md:block"
            style={{
              background:
                "linear-gradient(to right, #000 0%, #000 28%, rgba(0,0,0,0.75) 48%, transparent 72%)",
            }}
            aria-hidden
          />
          {/* Mobile: soften bottom into content area */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black md:hidden"
            aria-hidden
          />
        </motion.div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:pb-24 md:pt-32 lg:px-10">
        <div className="max-w-xl md:max-w-2xl">
          <motion.h1
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-[2.25rem] font-light leading-[1.12] tracking-tight text-balance sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            {headlineLines.map((line) => (
              <span
                key={line.text}
                className={`block ${line.bold ? "font-semibold text-white" : "text-white/90"}`}
              >
                {line.text}
              </span>
            ))}
          </motion.h1>

          <motion.p
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/65 sm:text-lg md:mt-8 md:max-w-lg"
          >
            AI-powered solutions to help your business grow.
          </motion.p>

          <motion.div
            {...motionProps}
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="mt-10 md:mt-12"
          >
            <Link
              href="/booking"
              className="inline-flex items-center justify-center bg-white px-8 py-3.5 text-xs font-semibold tracking-[0.2em] text-black transition-opacity hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              BOOK A STRATEGY CALL
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
