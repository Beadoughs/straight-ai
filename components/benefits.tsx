"use client";

import { motion } from "framer-motion";
import { Clock, Sparkles, Target, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Skip the months of back-and-forth with designers and developers. Launch in days.",
  },
  {
    icon: Sparkles,
    title: "Seamless Modern Design",
    description:
      "A clean, premium website experience that reflects your brand and builds trust instantly.",
  },
  {
    icon: Target,
    title: "Built for Conversions",
    description:
      "Every element is designed to turn visitors into leads and leads into customers.",
  },
  {
    icon: Shield,
    title: "Fully Managed",
    description:
      "Updates, security, hosting, and maintenance—all handled by our team.",
  },
];

export function Benefits() {
  return (
    <section id="why" className="bg-gradient-to-b from-[#141414] to-[#171717] py-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Why Business Owners Choose Straight AI
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90 md:text-lg">
            Focus on growth while we handle delivery.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group rounded-2xl border border-border/60 bg-card/30 p-6 transition-all hover:border-emerald-400/35 hover:bg-card/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-secondary transition-colors group-hover:border-emerald-400/30 group-hover:bg-emerald-400/10">
                <benefit.icon className="h-6 w-6 text-white transition-colors group-hover:text-emerald-400" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">{benefit.title}</h3>
              <p className="text-sm text-white/90 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
