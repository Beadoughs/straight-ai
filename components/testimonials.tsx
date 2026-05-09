"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Founder, Bloom Studio",
    content:
      "I had my website up and running in 3 days. The AI chatbot has already captured dozens of leads I would have missed.",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Owner, MJ Consulting",
    content:
      "Best investment I&apos;ve made for my business. The weekly management fee is nothing compared to what I was paying my old developer.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "CEO, GreenPath Solutions",
    content:
      "Professional, fast, and affordable. Straight AI delivered exactly what they promised—and more.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="bg-secondary/30 py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trusted by Business Owners
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Join hundreds of entrepreneurs who launched their websites with us
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/60 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="mb-4 flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="mb-6 text-foreground leading-relaxed">
                    {`"${testimonial.content}"`}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20 text-sm font-semibold text-accent">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
