import { defineConfig } from "astro/config";
import sanity from "@sanity/astro";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [sanity({
    projectId: "7pxqcpcq",
    dataset: "production",
    // Set useCdn to false if you're building statically.
    useCdn: false,
    studioBasePath: "/studio"
  }), react(), tailwind()]
});