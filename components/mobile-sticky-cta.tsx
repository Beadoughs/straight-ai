"use client";

import { trackEvent } from "@/lib/analytics";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <a
        href="/booking"
        onClick={() => trackEvent("cta_click", { location: "mobile_sticky_bar" })}
        className="flex h-12 w-full items-center justify-center bg-[#C9A962] text-[11px] font-semibold tracking-[0.14em] text-[#0a0a0a] transition-opacity hover:opacity-90"
      >
        GET FREE MOCKUP →
      </a>
    </div>
  );
}
