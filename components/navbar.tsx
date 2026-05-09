"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/15 bg-black/95 shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] backdrop-blur-xl"
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
        <nav className="hidden items-center gap-4 text-sm text-white/85 md:flex">
          <a href="#offer" className="transition-colors hover:text-white">Offer</a>
          <a href="#why" className="transition-colors hover:text-white">Why Straight AI</a>
          <a href="#work" className="transition-colors hover:text-white">Our Work</a>
          <a href="#book-call" className="transition-colors hover:text-white">Book</a>
        </nav>
        <Button asChild size="sm" className="h-9 bg-white px-3 text-xs font-medium text-black hover:bg-white/90 md:h-10 md:px-4 md:text-sm">
          <a href="/booking" onClick={() => trackEvent("cta_click", { location: "navbar" })}>
            Book Free Website Consult
          </a>
        </Button>
      </div>
      <div className="border-t border-white/10 px-4 py-2 md:hidden">
        <nav className="flex items-center justify-between text-xs text-white/85">
          <a href="#offer" className="rounded px-2 py-1 hover:bg-white/10">Offer</a>
          <a href="#why" className="rounded px-2 py-1 hover:bg-white/10">Why Us</a>
          <a href="#work" className="rounded px-2 py-1 hover:bg-white/10">Work</a>
          <a href="#book-call" className="rounded px-2 py-1 hover:bg-white/10">Book</a>
        </nav>
      </div>
    </nav>
  );
}
