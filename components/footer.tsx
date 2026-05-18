"use client";

import { Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Sparkles className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-lg font-semibold tracking-tight">
              Straight AI
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Straight AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
