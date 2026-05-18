"use client";

import { motion } from "framer-motion";

function GoldLineChart() {
  return (
    <svg viewBox="0 0 100 36" className="h-9 w-full" aria-hidden>
      <polyline
        fill="none"
        stroke="#C9A962"
        strokeWidth="2"
        strokeLinecap="round"
        points="0,30 14,26 28,28 42,18 56,20 70,12 86,8 100,4"
      />
    </svg>
  );
}

function GoldBars() {
  const heights = [14, 22, 10, 26, 18, 12, 24];
  return (
    <svg viewBox="0 0 100 36" className="h-9 w-full" aria-hidden>
      {heights.map((h, i) => (
        <rect
          key={i}
          x={i * 13 + 3}
          y={36 - h}
          width="9"
          height={h}
          rx="1.5"
          fill="#C9A962"
          opacity={0.7 + i * 0.04}
        />
      ))}
    </svg>
  );
}

function GoldDonut() {
  return (
    <svg viewBox="0 0 48 48" className="mx-auto h-12 w-12" aria-hidden>
      <circle cx="24" cy="24" r="18" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="6" />
      <circle
        cx="24"
        cy="24"
        r="18"
        fill="none"
        stroke="#C9A962"
        strokeWidth="6"
        strokeDasharray="95 113"
        strokeLinecap="round"
        transform="rotate(-90 24 24)"
      />
    </svg>
  );
}

const stats = [
  { label: "Hours Saved", value: "520+", chart: <GoldLineChart /> },
  { label: "Client Satisfaction", value: "98%", chart: <GoldDonut /> },
  { label: "Websites Launched", value: "120+", chart: <GoldLineChart /> },
  { label: "Avg. Lead Increase", value: "42%", chart: <GoldBars /> },
];

export function StatsGrid() {
  return (
    <section className="section-pad bg-[#0c0c0c]">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
            >
              <p className="text-[11px] font-medium tracking-wide text-white/50">
                {stat.label}
              </p>
              <p className="font-serif mt-2 text-4xl text-white md:text-[2.5rem]">
                {stat.value}
              </p>
              <div className="mt-5">{stat.chart}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
