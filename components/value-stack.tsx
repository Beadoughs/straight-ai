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
  RefreshCw,
  Server,
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
    <section id="offer" className="section-pad bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="label-caps">Launch Package</p>
          <h2 className="font-serif mt-4 text-3xl text-white md:text-4xl lg:text-[2.75rem]">
            Everything you need to launch and grow
          </h2>
          <p className="mt-4 text-base font-light text-white/60">
            From ${siteConfig.pricing.packageFromUsd} to launch with free hosting, AI chatbot,
            and ongoing management—no hidden fees.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {valueProps.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-[#C9A962]/30 bg-[#C9A962]/10">
                <item.icon className="h-6 w-6 text-[#C9A962]" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20 grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto w-full max-w-xl lg:mx-0"
          >
            <div className="rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent p-1 shadow-[0_24px_80px_rgba(0,0,0,0.65)]">
              <motion.div className="overflow-hidden rounded-[14px] border border-white/10 bg-[#141414] p-3 md:p-4">
                <div className="mb-3 flex items-center gap-1.5 px-1">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-[#1a1a1a] shadow-inner">
                  <Image
                    src="/placeholder.jpg"
                    alt="Website preview on laptop"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <div>
            <p className="label-caps">Launch Package</p>
            <div className="mt-4 flex items-baseline gap-3">
              <span className="font-serif text-7xl leading-none text-[#C9A962] md:text-8xl">
                ${siteConfig.pricing.packageFromUsd}
              </span>
            </div>
            <p className="mt-5 max-w-md text-base font-light leading-relaxed text-white/65">
              Everything you need to launch a premium, conversion-focused website—plus
              free hosting, AI chatbot, and ongoing management.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {launchChecklist.map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/90">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C9A962]/35 bg-[#C9A962]/15">
                    <Check className="h-3.5 w-3.5 text-[#C9A962]" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              onClick={() => trackEvent("cta_click", { location: "launch_package" })}
              className="mt-10 inline-flex min-h-[48px] items-center justify-center bg-[#C9A962] px-8 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-[#0a0a0a] transition-opacity hover:opacity-90"
            >
              GET YOUR FREE MOCKUP →
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 md:mt-28"
        >
          <h3 className="text-center font-serif text-2xl text-white md:text-3xl">
            Included With Your Package
          </h3>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {includedItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.06 }}
                className="glass-card p-6 text-center lg:text-left"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-[#C9A962]/25 bg-[#C9A962]/10 lg:mx-0">
                  <item.icon className="h-5 w-5 text-[#C9A962]" strokeWidth={1.5} />
                </div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="mt-2 text-sm font-light leading-relaxed text-white/55">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
