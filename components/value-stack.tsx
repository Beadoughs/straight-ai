"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Paintbrush,
  Smartphone,
  Search,
  Clock,
  Check,
  Shield,
} from "lucide-react";

const packageFeatures = [
  {
    icon: Paintbrush,
    title: "Custom Design",
    description: "Unique, branded website tailored to your business",
  },
  {
    icon: Smartphone,
    title: "Mobile Responsive",
    description: "Looks perfect on every device and screen size",
  },
  {
    icon: Search,
    title: "SEO-Ready Structure",
    description: "Built for search visibility from day one",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Go live in days, not weeks or months",
  },
];

export function ValueStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="offer" className="bg-gradient-to-b from-[#0d0d0d] to-[#111111] py-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Website Package
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/90 md:text-lg">
            One offer. Fast launch. Ongoing management.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <motion.div
            whileHover={reduceMotion ? { y: -4 } : { y: -6 }}
            animate={
              reduceMotion
                ? undefined
                : {
                    boxShadow: [
                      "0 14px 40px rgba(255,255,255,0.08)",
                      "0 22px 56px rgba(255,255,255,0.16)",
                      "0 14px 40px rgba(255,255,255,0.08)",
                    ],
                  }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="rounded-2xl"
          >
            <Card className="relative overflow-hidden rounded-2xl border-white/25 bg-gradient-to-br from-white/12 via-white/6 to-transparent shadow-[0_14px_40px_rgba(255,255,255,0.08)] backdrop-blur-md transition-shadow duration-200 hover:shadow-[0_18px_48px_rgba(255,255,255,0.14)]">
            <div className="absolute top-0 right-0 h-36 w-36 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-semibold">
                Website Package
              </CardTitle>
              <p className="text-white/90">
                $499 upfront + $49/week ongoing
              </p>
              <p className="text-sm text-white/90">
                $49/week is tied to the launch package so your website keeps improving after go-live.
              </p>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {packageFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-white/90">{feature.description}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">Managed Hosting and Support</h4>
                  <p className="text-sm text-white/90">
                    Hosting, AI support, and ongoing updates managed by our team each week.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Check className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-medium">Direct Phone Access</h4>
                  <p className="text-sm text-white/90">
                    With $49/week ongoing, you get direct access to our team for website changes and
                    updates, any AI-related questions, and practical guidance—use us as your
                    designated AI experts so you can run the business while we handle the tech.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          </motion.div>

          <div className="rounded-2xl border border-white/15 bg-white/[0.04] px-5 py-5 backdrop-blur-sm">
            <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex gap-3">
                <Shield className="mt-0.5 h-5 w-5 shrink-0 text-white" aria-hidden />
                <div>
                  <p className="font-semibold text-white">100% risk-free guarantee</p>
                  <p className="mt-1 text-sm text-white/90">
                    If the first direction misses the mark, we refund your $499. No lock-in.
                  </p>
                </div>
              </div>
              <p className="shrink-0 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-center text-xs font-semibold tracking-wide text-white md:text-left">
                Only 5 spots available per month
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
