"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

/**
 * Optional chat widgets (not Voiceflow — use `VoiceflowWidget` in `app/layout.tsx`).
 */
export function ChatbotEmbed() {
  useEffect(() => {
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    const scriptUrl = process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL;

    if (crispId) {
      if (document.getElementById("crisp-chat-widget")) return;
      window.$crisp = window.$crisp || [];
      window.CRISP_WEBSITE_ID = crispId;
      const el = document.createElement("script");
      el.id = "crisp-chat-widget";
      el.src = "https://client.crisp.chat/l.js";
      el.async = true;
      document.head.appendChild(el);
      return;
    }

    if (scriptUrl) {
      if (document.getElementById("straight-ai-chatbot-script")) return;
      const el = document.createElement("script");
      el.id = "straight-ai-chatbot-script";
      el.src = scriptUrl;
      el.async = true;
      const widgetId = process.env.NEXT_PUBLIC_CHATBOT_WIDGET_ID;
      if (widgetId) {
        el.setAttribute("data-widget-id", widgetId);
      }
      document.body.appendChild(el);
    }
  }, []);

  return null;
}
