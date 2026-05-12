"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    /** True after `voiceflow.chat.load` has been invoked successfully. */
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

const WIDGET_SCRIPT_ID = "voiceflow-widget";

/**
 * Mirrors Voiceflow’s embed snippet (insertBefore first script, onload before src):
 * `(function(d,t){ var v=d.createElement(t), s=d.getElementsByTagName(t)[0];
 *   v.onload=function(){ window.voiceflow.chat.load({ verify:{ projectID },
 *     url:'https://general-runtime.voiceflow.com',
 *     voice:{ url:'https://runtime-api.voiceflow.com' } }); };
 *   v.src='https://cdn.voiceflow.com/widget-next/bundle.mjs';
 *   v.type='text/javascript'; s.parentNode.insertBefore(v,s); })(document,'script');`
 */
export function VoiceflowWidget() {
  useEffect(() => {
    const w = window;
    if (w.__straightAiVoiceflowLoaded) return;
    if (document.getElementById(WIDGET_SCRIPT_ID)) return;

    const projectID =
      (process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID ?? "").trim();
    if (!projectID) {
      console.warn(
        "[Voiceflow] Set NEXT_PUBLIC_VOICEFLOW_PROJECT_ID (see .env.example). Widget not loaded.",
      );
      return;
    }

    const versionID = (process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID ?? "").trim();
    const loadConfig: VoiceflowLoadConfig = {
      verify: { projectID },
      url: "https://general-runtime.voiceflow.com",
      voice: { url: "https://runtime-api.voiceflow.com" },
    };
    if (versionID) loadConfig.versionID = versionID;

    const d = document;
    const t = "script";
    const v = d.createElement(t);
    const s = d.getElementsByTagName(t)[0];

    v.id = WIDGET_SCRIPT_ID;

    v.onload = function () {
      if (w.__straightAiVoiceflowLoaded) return;
      window.voiceflow!.chat.load(loadConfig);
      w.__straightAiVoiceflowLoaded = true;
    };

    v.src = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
    v.type = "text/javascript";

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
