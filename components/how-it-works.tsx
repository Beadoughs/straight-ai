"use client";

import { motion } from "framer-motion";
import { MessageSquare, Cpu, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageSquare,
    title: "Get Your Free Mockup",
    description:
      "Send us your details and we'll create a custom mockup in 24 hours. No commitment required.",
  },
  {
    number: "02",
    icon: Cpu,
    title: "We Build It",
    description:
      "Our experts build your full website using Straight AI technology, ensuring it's fast, beautiful, and conversion-optimized.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Launch & Manage",
    description:
      "We launch your site and handle all the hosting, while your new 24/7 AI Chatbot captures leads for you.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-secondary/30 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            How It Works
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Three simple steps to your new website
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute top-12 left-1/2 hidden h-0.5 w-full bg-gradient-to-r from-border to-transparent md:block" />
              )}

              <div className="relative rounded-2xl border border-border/60 bg-card/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-5xl font-bold text-muted-foreground/20">
                    {step.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <step.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
