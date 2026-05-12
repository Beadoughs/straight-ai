"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    $crisp?: unknown[];
    CRISP_WEBSITE_ID?: string;
    voiceflow?: {
      chat: {
        load: (config: {
          verify: { projectID: string };
          url: string;
          voice: { url: string };
        }) => void;
      };
    };
  }
}

const VOICEFLOW_RUNTIME = "https://general-runtime.voiceflow.com";
const VOICEFLOW_VOICE_URL = "https://runtime-api.voiceflow.com";
const VOICEFLOW_WIDGET_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

/**
 * Loads a chat widget when env vars are set (only one provider runs).
 *
 * Priority:
 * 1. Voiceflow — `NEXT_PUBLIC_VOICEFLOW_PROJECT_ID` (Voiceflow → Deploy → Web chat)
 * 2. Crisp — `NEXT_PUBLIC_CRISP_WEBSITE_ID`
 * 3. Generic — `NEXT_PUBLIC_CHATBOT_SCRIPT_URL` (+ optional `NEXT_PUBLIC_CHATBOT_WIDGET_ID`)
 */
export function ChatbotEmbed() {
  useEffect(() => {
    const voiceflowProjectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    const scriptUrl = process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL;

    if (voiceflowProjectId) {
      if (document.getElementById("voiceflow-widget")) return;

      const d = document;
      const t = "script";
      const v = d.createElement(t);
      const s = d.getElementsByTagName(t)[0];

      v.id = "voiceflow-widget";
      v.type = "text/javascript";
      v.src = VOICEFLOW_WIDGET_SRC;
      v.onload = () => {
        window.voiceflow?.chat?.load({
          verify: { projectID: voiceflowProjectId },
          url: VOICEFLOW_RUNTIME,
          voice: { url: VOICEFLOW_VOICE_URL },
        });
      };

      if (s?.parentNode) {
        s.parentNode.insertBefore(v, s);
      } else {
        (d.head ?? d.documentElement).appendChild(v);
      }
      return;
    }

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
