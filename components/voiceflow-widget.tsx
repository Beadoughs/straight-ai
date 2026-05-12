"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    __straightAiVoiceflowLoaded?: boolean;
    voiceflow?: {
      chat: {
        load: (config: VoiceflowLoadConfig) => void;
      };
    };
  }
}

type VoiceflowLoadConfig = {
  verify: { projectID: string };
  url: string;
  voice: { url: string };
  versionID?: string;
};

const VF_WIDGET_SRC = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
const VF_RUNTIME = "https://general-runtime.voiceflow.com";
const VF_VOICE = "https://runtime-api.voiceflow.com";
const FALLBACK_PROJECT_ID = "6a026584f0415940bedf88e2";
const POLL_MS = 50;
const MAX_POLLS = 120; // ~6s

/**
 * Injects Voiceflow’s web widget using their documented pattern (insertBefore first script).
 * Polls after onload until `voiceflow.chat.load` exists, then calls `load` once (Strict Mode safe).
 */
export function VoiceflowWidget() {
  useEffect(() => {
    const w = window;
    if (w.__straightAiVoiceflowLoaded) return;
    if (document.getElementById("voiceflow-widget")) return;

    const projectId =
      process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID?.trim() || FALLBACK_PROJECT_ID;
    const versionId = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID?.trim();

    const config: VoiceflowLoadConfig = {
      verify: { projectID: projectId },
      url: VF_RUNTIME,
      voice: { url: VF_VOICE },
    };
    if (versionId) config.versionID = versionId;

    const d = document;
    const t = "script";
    const v = d.createElement(t);
    const s = d.getElementsByTagName(t)[0];

    v.id = "voiceflow-widget";
    v.type = "text/javascript";
    v.src = VF_WIDGET_SRC;

    v.onload = () => {
      let polls = 0;
      const id = window.setInterval(() => {
        polls += 1;
        if (w.__straightAiVoiceflowLoaded) {
          window.clearInterval(id);
          return;
        }
        const load = w.voiceflow?.chat?.load;
        if (load) {
          window.clearInterval(id);
          try {
            load(config);
            w.__straightAiVoiceflowLoaded = true;
          } catch (e) {
            console.error("[Voiceflow] chat.load failed:", e);
          }
          return;
        }
        if (polls >= MAX_POLLS) {
          window.clearInterval(id);
          console.error(
            "[Voiceflow] Timed out waiting for voiceflow.chat.load (CDN blocked or script error).",
          );
        }
      }, POLL_MS);
    };

    v.onerror = () => {
      console.error("[Voiceflow] Failed to load widget script from CDN.");
    };

    if (s?.parentNode) {
      s.parentNode.insertBefore(v, s);
    } else {
      (d.body ?? d.documentElement).appendChild(v);
    }
  }, []);

  return null;
}
