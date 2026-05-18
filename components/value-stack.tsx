"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Bot,
  BarChart3,
  Check,
  Clock,
  DollarSign,
  Globe,
  Paintbrush,
  RefreshCw,
  Search,
  Server,
  Smartphone,
  Sparkles,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { trackEvent } from "@/lib/analytics";

const valueProps = [
  {
    icon: DollarSign,
    title: `From $${siteConfig.pricing.packageFromUsd} to launch`,
    description: "Premium websites without agency pricing",
  },
  {
    icon: Sparkles,
    title: "Premium custom design",
    description: "Built to match your brand and convert visitors",
  },
  {
    icon: Zap,
    title: "AI-powered growth",
    description: "Chatbot, SEO structure, and analytics included",
  },
  {
    icon: Clock,
    title: "Fast turnaround",
    description: "Go live in days—not months of back-and-forth",
  },
];

const launchChecklist = [
  "Custom Design",
  "Mobile Responsive",
  "SEO-Ready",
  "Fast Turnaround",
];

const includedItems = [
  {
    icon: Server,
    title: "Free Hosting",
    description: "Fast, secure hosting with no weekly fees",
  },
  {
    icon: Bot,
    title: "24/7 AI Chatbot",
    description: "Capture leads and answer questions around the clock",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Minor Updates",
    description: "Text and image changes within 24 hours",
  },
  {
    icon: BarChart3,
    title: "Monthly Analytics",
    description: "Traffic and chatbot performance reports",
  },
];

export function ValueStack() {
  return (
    <section id="offer" className="bg-[#0c0c0c] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card flex flex-col items-center p-6 text-center"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#C9A962]/15">
                <item.icon className="h-6 w-6 text-[#C9A962]" />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-white/55">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-lg"
          >
            <motion.div className="glass-card overflow-hidden p-4 md:p-6">
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#1a1a1a]">
                <Image
                  src="/placeholder.jpg"
                  alt="Website preview on laptop"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 rounded-xl border border-white/10 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="rounded-lg bg-black/50 px-3 py-2 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-widest text-white/50">
                      straight-ai.com
                    </p>
                    <p className="font-serif text-sm text-white">Your brand, live.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[#C9A962]">
              LAUNCH PACKAGE
            </p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-serif text-6xl text-[#C9A962] md:text-7xl">
                ${siteConfig.pricing.packageFromUsd}
              </span>
              <span className="text-sm text-white/50">starting</span>
            </div>
            <p className="mt-4 max-w-md text-white/65">
              Everything you need to launch a premium, conversion-focused website—plus
              free hosting, AI chatbot, and ongoing management.
            </p>
            <ul className="mt-8 space-y-4">
              {launchChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#C9A962]/20">
                    <Check className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={3} />
                  </span>
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              onClick={() => trackEvent("cta_click", { location: "launch_package" })}
              className="mt-10 inline-flex items-center justify-center bg-[#C9A962] px-8 py-3.5 text-xs font-semibold tracking-[0.16em] text-black transition-opacity hover:opacity-90"
            >
              GET YOUR FREE MOCKUP →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-center font-serif text-2xl text-white md:text-3xl">
            Included With Your Package
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-white/55">
            From ${siteConfig.pricing.packageFromUsd} to launch + free hosting, AI
            chatbot, and management—no hidden fees.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card p-6"
              >
                <item.icon className="mb-4 h-7 w-7 text-[#C9A962]" />
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2">
              <Paintbrush className="h-4 w-4 text-[#C9A962]" />
              Custom design
            </span>
            <span className="flex items-center gap-2">
              <Smartphone className="h-4 w-4 text-[#C9A962]" />
              Mobile responsive
            </span>
            <span className="flex items-center gap-2">
              <Search className="h-4 w-4 text-[#C9A962]" />
              SEO-ready
            </span>
            <span className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-[#C9A962]" />
              Full ownership
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
