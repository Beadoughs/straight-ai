"use client";

import { Button } from "@/components/ui/button";
import { trackEvent } from "@/lib/analytics";

export function MobileStickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border/60 bg-background/95 p-3 backdrop-blur md:hidden">
      <Button asChild className="h-11 w-full font-medium">
        <a
          href="/booking"
          onClick={() => trackEvent("cta_click", { location: "mobile_sticky_bar" })}
        >
          Book Free Mockup
        </a>
      </Button>
    </div>
  );
}
