"use client";

import { InlineWidget } from "react-calendly";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BookingPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Get Your Free Custom Mockup
          </h1>
          <p className="text-lg text-muted-foreground">
            Pick a time below that works for you. We'll grab some quick details and get to work on your custom mockup!
          </p>
        </div>

        <div className="h-[700px] w-full rounded-xl overflow-hidden border border-border/60 bg-card/30">
          {calendlyUrl ? (
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
          ) : (
            <div className="flex h-full items-center justify-center px-6 text-center text-muted-foreground">
              Booking is temporarily unavailable. Set
              <code className="mx-1 rounded bg-muted px-1 py-0.5 text-foreground">
                NEXT_PUBLIC_CALENDLY_URL
              </code>
              in your .env.local file.
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
