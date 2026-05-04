"use client";

import { InlineWidget } from "react-calendly";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export default function BookingPage() {
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

        {/* PLACEHOLDER: Calendly Inline Widget */}
        {/* Replace the 'url' prop with your actual Calendly link */}
        <div className="h-[700px] w-full rounded-xl overflow-hidden border border-border/60 bg-card/30">
          <InlineWidget 
            url="https://calendly.com/your-calendly-link" 
            styles={{ height: '100%', width: '100%' }} 
            prefill={{
              email: '',
              firstName: '',
              lastName: '',
              name: '',
            }}
          />
        </div>
      </div>

      <Footer />
    </main>
  );
}
