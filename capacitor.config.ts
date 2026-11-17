import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "app.runout.fishing",
  appName: "Runout",
  webDir: "www",
  backgroundColor: "#07141c",
  server: {
    url: "https://kind-sky-sunny-king.grok.me",
    androidScheme: "https",
    allowNavigation: ["kind-sky-sunny-king.grok.me", "*.grok.me"],
  },
};

export default config;
