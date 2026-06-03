// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://sanctuary.ustreetcommunity.org",
  base: "/",
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Fauna One",
      cssVariable: "--font-fauna",
    },
  ],
});
