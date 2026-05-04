"use client";

import { motion } from "framer-motion";
import { Clock, UserX, Target, Shield } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Save Time",
    description:
      "Skip the months of back-and-forth with designers and developers. Launch in days.",
  },
  {
    icon: UserX,
    title: "No Developers Needed",
    description:
      "No technical skills required. We handle all the complex stuff so you don&apos;t have to.",
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
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Why Choose Straight AI?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Focus on growing your business while we handle your online presence
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl border border-border/60 bg-card/30 p-6 transition-all hover:border-accent/30 hover:bg-card/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary transition-colors group-hover:bg-accent/10">
                <benefit.icon className="h-6 w-6 text-foreground transition-colors group-hover:text-accent" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
