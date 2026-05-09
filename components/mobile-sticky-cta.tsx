"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/15 bg-black/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <Button asChild className="h-12 w-full bg-white text-sm font-semibold text-black hover:bg-white/90">
        <a
          href="/booking"
          onClick={() => trackEvent("cta_click", { location: "mobile_sticky_bar" })}
        >
          Book Free Website Consult
        </a>
      </Button>
    </div>
  );
}
