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
          voice?: { url: string };
          versionID?: string;
        }) => void;
      };
    };
  }
}

const VOICEFLOW_RUNTIME = "https://general-runtime.voiceflow.com";
const VOICEFLOW_VOICE_URL = "https://runtime-api.voiceflow.com";
const VOICEFLOW_WIDGET_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs";

/**
 * Loads Voiceflow the same way their hosted snippet does: script onload → `voiceflow.chat.load(...)`.
 * Script is appended to `<body>` so it always runs reliably in Next.js.
 */
export function ChatbotEmbed() {
  useEffect(() => {
    const voiceflowProjectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
    const voiceflowVersionId = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID;
    const crispId = process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID;
    const scriptUrl = process.env.NEXT_PUBLIC_CHATBOT_SCRIPT_URL;

    if (voiceflowProjectId) {
      const config = {
        verify: { projectID: voiceflowProjectId },
        url: VOICEFLOW_RUNTIME,
        voice: { url: VOICEFLOW_VOICE_URL },
        ...(voiceflowVersionId ? { versionID: voiceflowVersionId } : {}),
      } as const;

      const tryBoot = (): boolean => {
        const chat = window.voiceflow?.chat;
        if (!chat?.load) return false;
        try {
          chat.load(config);
          return true;
        } catch (e) {
          console.error("[Voiceflow] chat.load error:", e);
          return true;
        }
      };

      const scheduleBoot = () => {
        if (tryBoot()) return;
        let tries = 0;
        const id = window.setInterval(() => {
          tries += 1;
          if (tryBoot() || tries > 100) window.clearInterval(id);
        }, 50);
      };

      const existing = document.getElementById("voiceflow-widget");
      if (existing) {
        scheduleBoot();
        return;
      }

      const v = document.createElement("script");
      v.id = "voiceflow-widget";
      v.type = "text/javascript";
      v.src = VOICEFLOW_WIDGET_SRC;
      v.onload = scheduleBoot;
      v.onerror = () => {
        console.error("[Voiceflow] Failed to load widget script from CDN.");
      };
      document.body.appendChild(v);
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
