"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Book Your Free Website Consult",
    description:
      "Share your goals and current setup so we can map your best next move.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "We Build It",
    description:
      "We design and build your site for clarity, speed, and conversion.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Manage",
    description:
      "We launch, host, and manage updates so your website keeps performing.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-[#111111] to-[#141414] py-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90 md:text-lg">
            Three clear steps to launch.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-border to-transparent md:block" />
              )}

              <div className="relative rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-bold text-white/15">
                    {step.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition-colors group-hover:border-emerald-400/40 group-hover:bg-emerald-400/10">
                    <step.icon className="h-6 w-6 text-white transition-colors group-hover:text-emerald-400" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/90">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
