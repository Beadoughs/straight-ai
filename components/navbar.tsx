"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import Link from "next/link";

const navLinks = [
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CASE STUDIES", href: "#case-studies" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function Navbar() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.header
      initial={prefersReducedMotion ? false : { y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10"
        aria-label="Main"
      >
        <Link
          href="/"
          className="text-lg font-semibold tracking-[0.12em] text-white transition-opacity hover:opacity-80"
        >
          SA
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[11px] font-medium tracking-[0.18em] text-white/75 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none text-[11px] font-medium tracking-[0.18em] text-white/75 marker:content-none [&::-webkit-details-marker]:hidden">
            MENU
          </summary>
          <ul className="absolute right-0 top-full mt-3 min-w-[12rem] border border-white/10 bg-black/95 py-2 backdrop-blur-md">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2.5 text-[11px] font-medium tracking-[0.18em] text-white/75 transition-colors hover:bg-white/5 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </nav>
    </motion.header>
  );
}
