"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <a href="/" aria-label="Go to homepage">
              <Image
                src="/sa-logo.png"
                alt="Straight AI"
                width={120}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </a>
            <p className="max-w-xs text-center text-sm text-white/90 md:text-left">
              Built to convert. Supported for the long run.
            </p>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
            <a href="#offer" className="transition-colors hover:text-white">Offer</a>
            <a href="#why" className="transition-colors hover:text-white">Why Straight AI</a>
            <a href="#work" className="transition-colors hover:text-white">Our Work</a>
            <a href="/booking" className="transition-colors hover:text-white">Book Free Website Consult</a>
          </nav>

          <p className="text-sm text-white/90">
            © {new Date().getFullYear()} Straight AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
