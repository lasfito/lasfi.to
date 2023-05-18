import {defineConfig} from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";
// todo: pending tests
/* import prefetch from "@astrojs/prefetch"; */

export default defineConfig({
  site: "https://lasfi.to",
  integrations: [
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: true,
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],
  /* renderers: ["@astrojs/renderer-typescript"], */
});
