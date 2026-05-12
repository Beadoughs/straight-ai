"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
  }
}

/**
 * Loads a third-party chat widget when env vars are set.
 *
 * Option A — Crisp: set NEXT_PUBLIC_CRISP_WEBSITE_ID (from Crisp → Settings → Website ID)
 * Option B — Generic: set NEXT_PUBLIC_CHATBOT_SCRIPT_URL (and optional NEXT_PUBLIC_CHATBOT_WIDGET_ID)
 */
export function ChatbotEmbed() {
  useEffect(() => {
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    const scriptUrl = process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL;

    if (crispId) {
      if (document.getElementById("crisp-chat-widget")) return;
      window.$crisp = window.$crisp || [];
      window.CRISP_WEBSITE_ID = crispId;
      const s = document.createElement("script");
      s.id = "crisp-chat-widget";
      s.src = "https://client.crisp.chat/l.js";
      s.async = true;
      document.head.appendChild(s);
      return;
    }

    if (scriptUrl) {
      if (document.getElementById("straight-ai-chatbot-script")) return;
      const s = document.createElement("script");
      s.id = "straight-ai-chatbot-script";
      s.src = scriptUrl;
      s.async = true;
      const widgetId = process.env.NEXT_PUBLIC_CHATBOT_WIDGET_ID;
      if (widgetId) {
        s.setAttribute("data-widget-id", widgetId);
      }
      document.body.appendChild(s);
    }
  }, []);

  return null;
}
