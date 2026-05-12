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

const MAX_VOICEFLOW_READY_MS = 8000;
const VOICEFLOW_READY_POLL_MS = 50;

function loadVoiceflowWidget(projectId: string, versionId?: string) {
  const base = {
    verify: { projectID: projectId },
    url: VOICEFLOW_RUNTIME,
    voice: { url: VOICEFLOW_VOICE_URL },
  } as const;
  const config = versionId
    ? { ...base, versionID: versionId }
    : { ...base };

  const started = performance.now();

  const tryLoad = () => {
    const chat = window.voiceflow?.chat;
    if (chat?.load) {
      try {
        chat.load(config);
      } catch (e) {
        console.error("[Voiceflow] chat.load failed:", e);
      }
      return true;
    }
    if (performance.now() - started > MAX_VOICEFLOW_READY_MS) {
      console.error(
        "[Voiceflow] Timed out waiting for window.voiceflow.chat. Check project ID, publish status, and browser network tab for blocked requests to *.voiceflow.com.",
      );
      return true;
    }
    return false;
  };

  if (tryLoad()) return;

  const id = window.setInterval(() => {
    if (tryLoad()) window.clearInterval(id);
  }, VOICEFLOW_READY_POLL_MS);
}

/**
 * Loads a chat widget when env vars are set (only one provider runs).
 *
 * Priority:
 * 1. Voiceflow — `NEXT_PUBLIC_VOICEFLOW_PROJECT_ID` (optional `NEXT_PUBLIC_VOICEFLOW_VERSION_ID` to pin an environment)
 * 2. Crisp — `NEXT_PUBLIC_CRISP_WEBSITE_ID`
 * 3. Generic — `NEXT_PUBLIC_CHATBOT_SCRIPT_URL` (+ optional `NEXT_PUBLIC_CHATBOT_WIDGET_ID`)
 *
 * If the bubble opens but stays on "Thinking…", usually the runtime never gets a reply: publish a version
 * to the environment your widget uses, set `NEXT_PUBLIC_VOICEFLOW_VERSION_ID` to that environment's alias
 * (e.g. `production`), or fix LLM / API steps in Voiceflow. Approved domains (Business+) must include your site.
 */
export function ChatbotEmbed() {
  useEffect(() => {
    const voiceflowProjectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID;
    const voiceflowVersionId = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID;
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
        // Script onload can fire before `window.voiceflow.chat` is assigned; wait briefly then load.
        queueMicrotask(() =>
          loadVoiceflowWidget(voiceflowProjectId, voiceflowVersionId || undefined),
        );
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
