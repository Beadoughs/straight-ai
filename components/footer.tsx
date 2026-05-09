"use client";

import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="/" aria-label="Go to homepage">
            <Image
              src="/sa-logo.png"
              alt="Straight AI"
              width={120}
              height={36}
              className="h-8 w-auto object-contain"
            />
          </a>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-sm text-white/90">
            <a href="#offer" className="hover:text-white">Offer</a>
            <a href="#why" className="hover:text-white">Why Straight AI</a>
            <a href="#work" className="hover:text-white">Who We&apos;ve Worked With</a>
            <a href="/booking" className="hover:text-white">Book Free Website Consult</a>
          </nav>

          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Straight AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
