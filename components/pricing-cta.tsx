"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function PricingCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-border/60 bg-gradient-to-br from-card via-card to-secondary/30 p-8 md:p-12 lg:p-16"
        >
          {/* Background decoration */}
          <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 translate-y-1/2 -translate-x-1/2 rounded-full bg-accent/5 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10">
              <Zap className="h-7 w-7 text-accent" />
            </div>

            <h2 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Less than the Cost of a Freelancer.
              <br />
              <span className="text-accent">Faster than an Agency.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Stop waiting months and spending thousands. Get a premium website built by our experts, complete with 24/7 AI Chatbot customer service.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <div className="rounded-xl bg-secondary/50 px-5 py-3 text-center">
                <p className="text-2xl font-bold">
                  From ${siteConfig.pricing.packageFromUsd}
                </p>
                <p className="text-sm text-muted-foreground">to launch</p>
              </div>
              <span className="text-2xl text-muted-foreground">+</span>
              <div className="rounded-xl bg-accent/10 px-5 py-3 text-center">
                <p className="text-2xl font-bold text-accent">Free hosting</p>
                <p className="text-sm text-muted-foreground">
                  AI chatbot & management included
                </p>
              </div>
            </div>

            <div className="mt-10 space-y-4">
              <Button asChild size="lg" className="group h-12 px-8 text-base font-medium">
                <a href="/booking">
                  Get Your Free Custom Mockup
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              
              <div className="flex flex-col items-center gap-2 mt-4">
                <p className="text-sm font-medium text-foreground">
                  🛡️ 100% Risk-Free Guarantee
                </p>
                <p className="text-xs text-muted-foreground max-w-sm">
                  Love your initial design, or we&apos;ll refund your package investment. No questions asked.
                </p>
                <div className="mt-2 inline-flex items-center rounded-full bg-accent/20 px-3 py-1 text-xs font-semibold text-accent">
                  Only 5 spots available per month
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
