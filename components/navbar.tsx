"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <Image
            src="/sa-logo.png"
            alt="Straight AI"
            width={110}
            height={34}
            className="h-8 w-auto object-contain"
            priority
          />
        </a>
        <nav className="hidden items-center gap-4 text-sm text-black/85 md:flex">
          <a href="#offer" className="hover:text-black">Offer</a>
          <a href="#why" className="hover:text-black">Why Straight AI</a>
          <a href="#work" className="hover:text-black">Who We&apos;ve Worked With</a>
          <a href="#book-call" className="hover:text-black">Book</a>
        </nav>
        <Button asChild size="sm" className="h-9 bg-black px-3 text-xs font-medium text-white hover:bg-black/90 md:h-10 md:px-4 md:text-sm">
          <a href="/booking" onClick={() => trackEvent("cta_click", { location: "navbar" })}>
            Book Free Website Consult
          </a>
        </Button>
      </div>
      <div className="border-t border-black/10 px-4 py-2 md:hidden">
        <nav className="flex items-center justify-between text-xs text-black/85">
          <a href="#offer" className="rounded px-2 py-1 hover:bg-black/5">Offer</a>
          <a href="#why" className="rounded px-2 py-1 hover:bg-black/5">Why Us</a>
          <a href="#work" className="rounded px-2 py-1 hover:bg-black/5">Work</a>
          <a href="#book-call" className="rounded px-2 py-1 hover:bg-black/5">Book</a>
        </nav>
      </div>
    </motion.nav>
  );
}
