import { defineConfig } from "@solidjs/start/config";
import uno from "unocss/vite";

export default defineConfig({
  start: {
    ssr: true,
    server: {
      preset: "cloudflare-pages-static",
    },
  },
  plugins: [uno()],
});
