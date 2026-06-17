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
      provider: fontProviders.fontsource(),
      name: "Mansalva",
      cssVariable: "--font-mansalva",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Walter Turncoat",
      cssVariable: "--font-turncoat",
    },
    {
      provider: fontProviders.fontsource(),
      name: "East Sea Dokdo",
      cssVariable: "--font-dokdo",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Lacquer",
      cssVariable: "--font-lacquer",
    },
  ],
});
