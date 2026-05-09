"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { InlineWidget } from "react-calendly";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { trackEvent } from "@/lib/analytics";

export default function BookingPage() {
  const baseCalendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/straightai/30min";
  const [isQualified, setIsQualified] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    goal: "",
    budget: "",
    timeline: "",
  });

  const calendlyUrl = useMemo(() => {
    const separator = baseCalendlyUrl.includes("?") ? "&" : "?";
    return `${baseCalendlyUrl}${separator}hide_gdpr_banner=1`;
  }, [baseCalendlyUrl]);

  useEffect(() => {
    trackEvent("booking_page_view");
  }, []);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsQualified(true);
    trackEvent("booking_qualified_form_submitted");
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 pt-32 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-4">
            Book Free Website Consult
          </h1>
          <p className="text-lg text-white/85">
            Pick a time that works for you. This is a 15-minute, no-obligation call to map your website growth priorities.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-white/85">
              15-minute call
            </span>
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-white/85">
              No obligation
            </span>
            <span className="rounded-full bg-secondary/70 px-3 py-1 text-white/85">
              Cancel anytime
            </span>
          </div>
        </div>

        <div className="mx-auto mb-8 grid max-w-4xl gap-3 px-6 md:grid-cols-3">
          {[
            "Book your time",
            "Share your business goals",
            "Receive your custom website action plan",
          ].map((step, index) => (
            <div
              key={step}
              className="rounded-xl border border-border/60 bg-card/40 p-4 text-left"
            >
              <p className="text-xs font-semibold text-accent">Step {index + 1}</p>
              <p className="mt-1 text-sm text-white/80">{step}</p>
            </div>
          ))}
        </div>

        {!isQualified ? (
          <div className="mx-auto w-full max-w-4xl rounded-2xl border border-border/60 bg-card/40 p-6 md:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              Quick questions before booking
            </h2>
            <p className="mt-2 text-sm text-white/80">
              This helps us prepare your call with practical, business-specific advice.
            </p>

            <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
              <label className="grid gap-2 text-sm">
                Full name
                <input
                  className="h-11 rounded-md border border-input bg-background px-3 text-foreground"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((current) => ({ ...current, name: e.target.value }))
                  }
                />
              </label>
              <label className="grid gap-2 text-sm">
                Email
                <input
                  className="h-11 rounded-md border border-input bg-background px-3 text-foreground"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData((current) => ({ ...current, email: e.target.value }))
                  }
                />
              </label>
              <label className="grid gap-2 text-sm">
                Business type
                <input
                  className="h-11 rounded-md border border-input bg-background px-3 text-foreground"
                  required
                  value={formData.businessType}
                  onChange={(e) =>
                    setFormData((current) => ({
                      ...current,
                      businessType: e.target.value,
                    }))
                  }
                />
              </label>
              <label className="grid gap-2 text-sm">
                Budget
                <select
                  className="h-11 rounded-md border border-input bg-background px-3 text-foreground"
                  required
                  value={formData.budget}
                  onChange={(e) =>
                    setFormData((current) => ({ ...current, budget: e.target.value }))
                  }
                >
                  <option value="">Select budget</option>
                  <option value="$499 upfront + $49/week">Ready for current package</option>
                  <option value="Need custom package">Need custom package</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <label className="grid gap-2 text-sm md:col-span-2">
                Main goal for your website
                <textarea
                  className="min-h-24 rounded-md border border-input bg-background px-3 py-2 text-foreground"
                  required
                  value={formData.goal}
                  onChange={(e) =>
                    setFormData((current) => ({ ...current, goal: e.target.value }))
                  }
                />
              </label>
              <label className="grid gap-2 text-sm md:col-span-2">
                Preferred timeline
                <input
                  className="h-11 rounded-md border border-input bg-background px-3 text-foreground"
                  placeholder="Example: As soon as possible / within 2 weeks"
                  required
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData((current) => ({ ...current, timeline: e.target.value }))
                  }
                />
              </label>
              <button
                type="submit"
                className="md:col-span-2 inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground"
              >
                Continue to booking calendar
              </button>
            </form>
          </div>
        ) : (
          <div className="h-[760px] w-full rounded-xl overflow-hidden border border-border/60 bg-card/30">
            <InlineWidget
              url={calendlyUrl}
              styles={{ height: "100%", width: "100%" }}
              pageSettings={{
                backgroundColor: "000000",
                textColor: "ffffff",
                primaryColor: "ffffff",
              }}
              prefill={{
                email: formData.email,
                firstName: formData.name.split(" ")[0] || "",
                lastName: formData.name.split(" ").slice(1).join(" "),
                name: formData.name,
                customAnswers: {
                  a1: formData.businessType,
                  a2: formData.goal,
                  a3: `${formData.budget} | ${formData.timeline}`,
                },
              }}
            />
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
