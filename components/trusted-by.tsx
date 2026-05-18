"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/beadoughs-logo.svg", alt: "Beadoughs", width: 120 },
  { src: "/placeholder-logo.svg", alt: "Client partner", width: 100 },
  { src: "/sa-logo.png", alt: "Straight AI client", width: 90 },
  { src: "/placeholder-logo.svg", alt: "Client partner", width: 100 },
  { src: "/placeholder-logo.svg", alt: "Client partner", width: 100 },
];

export function TrustedBy() {
  return (
    <section className="border-y border-white/5 bg-[#080808] py-14 md:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-xs font-semibold tracking-[0.22em] text-white/45"
        >
          TRUSTED BY
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-10 md:gap-14">
          {logos.map((logo, index) => (
            <motion.div
              key={`${logo.alt}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex h-10 items-center justify-center opacity-60 grayscale brightness-200 transition-opacity hover:opacity-90"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={40}
                className="h-8 w-auto max-w-[120px] object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
