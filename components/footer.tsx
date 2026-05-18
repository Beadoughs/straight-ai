"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const services = [
  { label: "Launch Package", href: "#offer" },
  { label: "Free Mockup", href: "/booking" },
  { label: "AI Chatbot", href: "#offer" },
  { label: "Hosting & Management", href: "#offer" },
];

const company = [
  { label: "About", href: "#offer" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
  { label: "Book a Call", href: "/booking" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#080808] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" aria-label="Go to homepage">
              <Image
                src="/sa-logo.png"
                alt="Straight AI"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm font-light leading-relaxed text-white/55">
              Premium AI-optimized websites built to convert—supported for the long
              run.
            </p>
          </div>

          <div>
            <h4 className="label-caps">Services</h4>
            <ul className="mt-5 space-y-3">
              {services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps">Company</h4>
            <ul className="mt-5 space-y-3">
              {company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/65 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="label-caps">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm font-light text-white/65">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>{siteConfig.contact.location}</li>
            </ul>
          </div>
        </div>

        <p className="mt-14 border-t border-white/[0.08] pt-8 text-center text-xs text-white/40 md:text-left">
          © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
