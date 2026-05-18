export const siteConfig = {
  name: "Straight AI",
  url: "https://straight-ai.com",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL,
  chatbotScriptUrl: process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL,
  chatbotId: process.env.NEXT_PUBLIC_CHATBOT_ID,
  contact: {
    phone: "+61 400 000 000",
    email: "hello@straight-ai.com",
    location: "Hobart, Tasmania",
  },
  pricing: {
    packageFromUsd: 499,
  },
  offerDescription:
    "Custom websites starting from $499 with free hosting, AI chatbot, and ongoing management included.",
} as const;
