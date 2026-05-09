"use client";

import { useEffect } from "react";
import { InlineWidget } from "react-calendly";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { trackEvent } from "@/lib/analytics";

export default function BookingPage() {
  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/straightai/30min";

  useEffect(() => {
    trackEvent("booking_page_view");
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Book Free Mockup
          </h1>
          <p className="text-lg text-muted-foreground">
            Pick a time that works for you. This is a 15-minute, no-obligation call to map your mockup.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-muted-foreground">
              15-minute call
            </span>
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-muted-foreground">
              No obligation
            </span>
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-muted-foreground">
              Cancel anytime
            </span>
          </div>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-3 px-6 md:grid-cols-3">
          {[
            "Book your time",
            "Share your business goals",
            "Receive your custom mockup plan",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-border/60 bg-card/40 p-4 text-left"
            >
              <p className="text-xs font-semibold text-accent">Step {index + 1}</p>
              <p className="mt-1 text-sm text-muted-foreground">{step}</p>
            </div>
          ))}
        </div>

        <div className="h-[700px] w-full rounded-xl overflow-hidden border border-border/60 bg-card/30">
          <InlineWidget
            url={calendlyUrl}
            styles={{ height: "100%", width: "100%" }}
            prefill={{
              email: "",
              firstName: "",
              lastName: "",
              name: "",
            }}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
