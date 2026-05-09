"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2" aria-label="Go to homepage">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Straight AI
          </span>
        </a>
        <Button asChild size="sm" className="font-medium">
          <a
            href="/booking"
            onClick={() => trackEvent("cta_click", { location: "navbar" })}
          >
            Book Free Mockup
          </a>
        </Button>
      </div>
    </motion.nav>
  );
}
