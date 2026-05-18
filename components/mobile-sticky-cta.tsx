"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <Button asChild className="h-12 w-full bg-[#C9A962] text-xs font-semibold tracking-[0.14em] text-black hover:bg-[#C9A962]/90">
        <a
          href="/booking"
          onClick={() => trackEvent("cta_click", { location: "mobile_sticky_bar" })}
        >
          GET FREE MOCKUP →
        </a>
      </Button>
    </div>
  );
}
