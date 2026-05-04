"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Zap, Globe } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground"
          >
            <Zap className="h-3.5 w-3.5 text-accent" />
            <span>Premium Website Development</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl text-4xl font-bold tracking-tight text-balance md:text-6xl lg:text-7xl"
          >
            Premium Websites.{" "}
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              Built for You.
            </span>{" "}
            Powered by Straight AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl"
          >
            Get a fully custom, mobile-responsive website without any tech
            skills. Our team handles everything—design, development, hosting, and
            ongoing management.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row"
          >
            <div className="rounded-xl border border-border/60 bg-card/50 px-6 py-3 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">Launch for</p>
              <p className="text-2xl font-bold tracking-tight">
                $299{" "}
                <span className="text-base font-normal text-muted-foreground">
                  one-time
                </span>
              </p>
            </div>
            <span className="text-muted-foreground">+</span>
            <div className="rounded-xl border border-border/60 bg-card/50 px-6 py-3 backdrop-blur-sm">
              <p className="text-sm text-muted-foreground">Host & AI Chatbot for</p>
              <p className="text-2xl font-bold tracking-tight">
                $35
                <span className="text-base font-normal text-muted-foreground">
                  /week
                </span>
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10"
          >
            <Button asChild size="lg" className="group h-12 px-8 text-base font-medium">
              <a href="/booking">
                Get a Free Custom Mockup
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Hero visual */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 w-full max-w-4xl"
          >
            <div className="relative rounded-2xl border border-border/60 bg-card/30 p-2 backdrop-blur-sm">
              <div className="rounded-xl bg-gradient-to-br from-secondary to-secondary/50 p-8 md:p-12">
                <div className="grid gap-6 md:grid-cols-2">
                  {/* Website mockup */}
                  <div className="rounded-lg border border-border/40 bg-background/80 p-4">
                    <div className="mb-4 flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                      <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                      <div className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-3/4 rounded bg-muted" />
                      <div className="h-3 w-full rounded bg-muted/60" />
                      <div className="h-3 w-5/6 rounded bg-muted/60" />
                      <div className="mt-4 h-20 rounded-lg bg-accent/20" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-12 rounded bg-muted/40" />
                        <div className="h-12 rounded bg-muted/40" />
                        <div className="h-12 rounded bg-muted/40" />
                      </div>
                    </div>
                  </div>
                  {/* AI Chatbot mockup */}
                  <div className="flex flex-col justify-center">
                    <div className="rounded-lg border border-accent/30 bg-background/80 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/20">
                          <Bot className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-sm font-medium">AI Assistant</span>
                        <span className="ml-auto flex h-2 w-2 rounded-full bg-accent animate-pulse" />
                      </div>
                      <div className="space-y-2">
                        <div className="max-w-[80%] rounded-lg rounded-tl-sm bg-secondary px-3 py-2 text-sm">
                          Hi! How can I help you today?
                        </div>
                        <div className="ml-auto max-w-[80%] rounded-lg rounded-tr-sm bg-accent/20 px-3 py-2 text-sm text-right">
                          {"I'd like to learn more about your services"}
                        </div>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Globe className="h-3 w-3" />
                          <span>24/7 Available</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
