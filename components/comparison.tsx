"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const features = [
  "Upfront Cost",
  "Turnaround Time",
  "Custom Design",
  "AI Chatbot Included",
  "Hosting Included",
  "Ongoing Updates",
  "SEO Optimization",
];

const traditional = [
  "$3,000 - $10,000+",
  "3-6 Months",
  true,
  false,
  false,
  "$100+/hr",
  "Extra Cost",
];

const diy = [
  "$30 - $50/mo",
  "Hours of your time",
  false,
  false,
  true,
  "Do it yourself",
  "Basic",
];

const straightAi = [
  "$499",
  "Days, not months",
  true,
  true,
  true,
  "Included in $49/week",
  "Included",
];

export function Comparison() {
  return (
    <section className="bg-gradient-to-b from-[#171717] to-[#1a1a1a] py-0">
      <div className="mx-auto max-w-6xl px-6 py-10 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Where Straight AI Gives You a Competitive Edge
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-white/85 md:text-lg">
            A faster path to a modern, high-converting website.
          </p>
        </motion.div>

        <div className="overflow-hidden rounded-2xl border border-white/20 bg-[#232323] shadow-[0_12px_36px_rgba(0,0,0,0.45)] backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-white/15 bg-[#2d2d2d]">
                  <th className="p-6 font-semibold w-1/4">Feature</th>
                  <th className="p-6 font-semibold text-white/85 w-1/4">Traditional Agency</th>
                  <th className="p-6 font-semibold text-white/85 w-1/4">DIY Builders</th>
                  <th className="p-6 font-semibold text-white w-1/4">Straight AI</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {features.map((feature, i) => (
                  <tr key={feature} className="transition-colors hover:bg-white/5">
                    <td className="p-6 font-medium text-white">{feature}</td>
                    
                    <td className="p-6 text-white/85">
                      {typeof traditional[i] === "boolean" ? (
                        traditional[i] ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-destructive" />
                      ) : (
                        traditional[i]
                      )}
                    </td>
                    
                    <td className="p-6 text-white/85">
                      {typeof diy[i] === "boolean" ? (
                        diy[i] ? <Check className="h-5 w-5 text-green-500" /> : <X className="h-5 w-5 text-destructive" />
                      ) : (
                        diy[i]
                      )}
                    </td>
                    
                    <td className="bg-white/10 p-6 font-medium text-white">
                      {typeof straightAi[i] === "boolean" ? (
                        straightAi[i] ? <Check className="h-5 w-5 text-white" /> : <X className="h-5 w-5 text-red-300" />
                      ) : (
                        straightAi[i]
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
