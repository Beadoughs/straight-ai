"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Paintbrush,
  Smartphone,
  Search,
  Clock,
  Bot,
  Server,
  RefreshCw,
  BarChart3,
  Check,
} from "lucide-react";

const launchFeatures = [
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
    description: "Built to rank well on search engines from day one",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Go live in days, not weeks or months",
  },
];

const scaleFeatures = [
  {
    icon: Bot,
    title: "24/7 AI Chatbot",
    description: "Engage visitors and capture leads around the clock",
  },
  {
    icon: Server,
    title: "Hosting Included",
    description: "Fast, secure, and reliable hosting managed for you",
  },
  {
    icon: RefreshCw,
    title: "Unlimited Minor Updates",
    description: "Send us an email and we'll update text or images within 24 hours",
  },
  {
    icon: BarChart3,
    title: "Monthly Analytics Report",
    description: "Automated reports summarizing your website traffic and chatbot interactions",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ValueStack() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Everything You Need to{" "}
            <span className="text-accent">Launch & Scale</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            One simple pricing model. No hidden fees. No surprises.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {/* Launch Package */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden border-border/60 bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
              <CardHeader className="pb-4">
                <div className="flex items-baseline justify-between">
                  <CardTitle className="text-xl font-semibold">
                    Launch Package
                  </CardTitle>
                  <div className="text-right">
                    <span className="text-3xl font-bold">$499</span>
                    <span className="text-sm text-muted-foreground">
                      {" "}
                      one-time
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Everything you need to go live
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {launchFeatures.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                      <feature.icon className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>

          {/* Scale Package */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Card className="relative overflow-hidden border-accent/30 bg-card/50 backdrop-blur-sm">
              <div className="absolute top-0 right-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-accent/20 blur-3xl" />
              <CardHeader className="pb-4">
                <div className="flex items-baseline justify-between">
                  <div className="flex items-center gap-2">
                    <CardTitle className="text-xl font-semibold">
                      Scale Package
                    </CardTitle>
                    <span className="rounded-full bg-accent/20 px-2 py-0.5 text-xs font-medium text-accent">
                      Popular
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold">$49</span>
                    <span className="text-sm text-muted-foreground">/week</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Ongoing management & AI power
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                {scaleFeatures.map((feature) => (
                  <motion.div
                    key={feature.title}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                      <feature.icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-medium">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 rounded-2xl border border-border/60 bg-card/30 p-6 backdrop-blur-sm md:p-8"
        >
          <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Launch your website for $499. Then scale with AI for $49/week.
              </h3>
              <div className="mt-3 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" />
                  No contracts
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" />
                  Cancel anytime
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" />
                  Full ownership
                </span>
              </div>
              <div className="mt-4 grid gap-2 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">What $49/week includes:</p>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" />
                  Secure hosting + uptime monitoring
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" />
                  24/7 AI chatbot lead capture
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-accent" />
                  Ongoing updates and monthly performance report
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
