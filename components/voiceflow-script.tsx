import Script from "next/script";

const VF_WIDGET = "https://cdn.voiceflow.com/widget-next/bundle.mjs";
const VF_RUNTIME = "https://general-runtime.voiceflow.com";
const VF_VOICE = "https://runtime-api.voiceflow.com";

/**
 * Voiceflow web widget — runs via next/script afterInteractive (more reliable than a client-only useEffect).
 * Reads env on the server at render/build time.
 */
export function VoiceflowScript() {
  const projectId = process.env.NEXT_PUBLIC_VOICEFLOW_PROJECT_ID?.trim();
  if (!projectId) return null;

  const versionId = process.env.NEXT_PUBLIC_VOICEFLOW_VERSION_ID?.trim();
  const config: Record<string, unknown> = {
    verify: { projectID: projectId },
    url: VF_RUNTIME,
    voice: { url: VF_VOICE },
  };
  if (versionId) config.versionID = versionId;

  const cfgJson = JSON.stringify(config).replace(/</g, "\\u003c");

  const inline = `
(function () {
  if (typeof window === "undefined") return;
  if (window.__straightAiVoiceflowInit) return;
  window.__straightAiVoiceflowInit = true;
  var d = document;
  if (d.getElementById("voiceflow-widget")) return;
  var v = d.createElement("script");
  v.id = "voiceflow-widget";
  v.type = "text/javascript";
  v.src = ${JSON.stringify(VF_WIDGET)};
  var cfg = ${cfgJson};
  v.onload = function () {
    var n = 0;
    var id = setInterval(function () {
      n += 1;
      if (window.voiceflow && window.voiceflow.chat && window.voiceflow.chat.load) {
        clearInterval(id);
        try {
          window.voiceflow.chat.load(cfg);
        } catch (e) {
          console.error("[Voiceflow] chat.load:", e);
        }
      } else if (n > 150) {
        clearInterval(id);
        console.error("[Voiceflow] Widget API did not become ready (blocked script or CDN issue).");
      }
    }, 40);
  };
  v.onerror = function () {
    console.error("[Voiceflow] Could not load widget script (network, CSP, or ad blocker).");
  };
  (d.body || d.documentElement).appendChild(v);
})();
`.trim();

  return (
    <Script
      id="voiceflow-bootstrap"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: inline }}
    />
  );
}
