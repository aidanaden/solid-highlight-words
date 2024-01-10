import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  start: {
    ssr: false,
    server: {
      preset: "cloudflare-pages",
    },
  },
});
