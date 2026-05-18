"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "PACKAGES", href: "#offer" },
  { label: "FAQ", href: "#faq" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function Navbar() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Main"
      >
        <Link href="/" className="flex items-center" aria-label="Straight AI home">
          <Image
            src="/sa-logo.png"
            alt="Straight AI"
            width={120}
            height={32}
            className="h-7 w-auto object-contain"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] text-white/75 transition-colors hover:text-[#C9A962]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/booking"
          className="hidden bg-[#C9A962] px-5 py-2 text-[10px] font-semibold tracking-[0.16em] text-black transition-opacity hover:opacity-90 md:inline-flex"
        >
          FREE MOCKUP
        </Link>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-[11px] font-medium tracking-[0.18em] text-white/75 marker:content-none [&::-webkit-details-marker]:hidden">
            MENU
          </summary>
          <ul className="absolute right-0 top-full mt-3 min-w-[12rem] rounded-lg border border-white/10 bg-black/95 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] text-white/75 transition-colors hover:bg-white/5 hover:text-[#C9A962]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/booking"
                className="block px-4 py-2.5 text-[11px] font-semibold tracking-[0.16em] text-[#C9A962]"
              >
                FREE MOCKUP
              </Link>
            </li>
          </ul>
        </details>
      </nav>
    </motion.header>
  );
}
