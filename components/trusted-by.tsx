"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/beadoughs-logo.svg", alt: "Beadoughs", width: 130 },
  { src: "/placeholder-logo.svg", alt: "Client partner", width: 110 },
  { src: "/sa-logo.png", alt: "Straight AI client", width: 100 },
  { src: "/placeholder-logo.svg", alt: "Client partner", width: 110 },
  { src: "/placeholder-logo.svg", alt: "Client partner", width: 110 },
];

export function TrustedBy() {
  return (
    <section className="border-y border-white/[0.06] bg-[#080808] py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[11px] font-medium tracking-[0.24em] text-white/45"
        >
          TRUSTED BY
        </motion.p>
        <div className="mt-12 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-5 md:gap-4">
          {logos.map((logo, index) => (
            <motion.div
              key={`${logo.alt}-${index}`}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex h-10 w-full max-w-[140px] items-center justify-center opacity-55 grayscale brightness-[1.8] transition-opacity hover:opacity-85"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={40}
                className="h-8 w-auto max-w-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
