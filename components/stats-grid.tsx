"use client";

import { motion } from "framer-motion";

const stats = [
  {
    label: "Hours Saved",
    value: "520+",
    chart: (
      <svg viewBox="0 0 80 32" className="h-8 w-full" aria-hidden>
        <polyline
          fill="none"
          stroke="#C9A962"
          strokeWidth="2"
          points="0,28 12,24 24,26 36,16 48,18 60,10 72,8 80,4"
        />
      </svg>
    ),
  },
  {
    label: "Client Satisfaction",
    value: "98%",
    chart: (
      <svg viewBox="0 0 80 32" className="h-8 w-full" aria-hidden>
        {[12, 20, 8, 24, 16, 10, 22].map((h, i) => (
          <rect
            key={i}
            x={i * 11 + 2}
            y={32 - h}
            width="8"
            height={h}
            rx="1"
            fill="#C9A962"
            opacity={0.7 + i * 0.04}
          />
        ))}
      </svg>
    ),
  },
  {
    label: "Websites Launched",
    value: "120+",
    chart: (
      <svg viewBox="0 0 80 32" className="h-8 w-full" aria-hidden>
        <polyline
          fill="none"
          stroke="#C9A962"
          strokeWidth="2"
          points="0,20 16,22 32,14 48,16 64,8 80,6"
        />
      </svg>
    ),
  },
  {
    label: "Avg. Lead Increase",
    value: "42%",
    chart: (
      <svg viewBox="0 0 80 32" className="h-8 w-full" aria-hidden>
        {[8, 14, 22, 18, 28, 24, 30].map((h, i) => (
          <rect
            key={i}
            x={i * 11 + 2}
            y={32 - h}
            width="8"
            height={h}
            rx="1"
            fill="#C9A962"
          />
        ))}
      </svg>
    ),
  },
];

export function StatsGrid() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="glass-card p-6"
            >
              <p className="text-xs font-medium tracking-wide text-white/50">
                {stat.label}
              </p>
              <p className="font-serif mt-2 text-4xl text-white">{stat.value}</p>
              <div className="mt-4">{stat.chart}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
