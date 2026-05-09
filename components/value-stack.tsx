"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Paintbrush,
  Smartphone,
  Search,
  Clock,
  Check,
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
    description: "Built to rank well on search engines from day one",
  },
  {
    icon: Clock,
    title: "Fast Turnaround",
    description: "Go live in days, not weeks or months",
  },
];

export function ValueStack() {
  return (
    <section id="offer" className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Launch and Manage Website Package
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/85 md:text-lg">
            One clear package for business owners: launch plus ongoing management,
            all tied together from day one.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -4 }}
          className="mt-8"
        >
          <Card className="relative overflow-hidden border-white/20 bg-gradient-to-br from-white/12 via-white/6 to-transparent shadow-[0_14px_40px_rgba(255,255,255,0.08)] backdrop-blur-md transition-shadow duration-200 hover:shadow-[0_18px_48px_rgba(255,255,255,0.12)]">
            <div className="absolute top-0 right-0 h-36 w-36 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/15 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.12),transparent_45%)] pointer-events-none" />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-semibold">
                Website Package
              </CardTitle>
              <p className="text-white/85">
                $499 upfront + $49/week ongoing
              </p>
              <p className="text-sm text-white/75">
                The weekly service is tied to the launch package so your website keeps improving after it goes live.
              </p>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              {packageFeatures.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <feature.icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-medium">{feature.title}</h4>
                    <p className="text-sm text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <Check className="h-4 w-4 text-foreground" />
                </div>
                <div>
                  <h4 className="font-medium">Managed Hosting and Support</h4>
                  <p className="text-sm text-white/80">
                    Hosting, AI support, and ongoing updates managed by our team each week.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
