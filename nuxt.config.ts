// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  pages: true,
  ssr: false,
  devtools: { enabled: true },
  modules: ["@nuxt/icon", "@vite-pwa/nuxt"],
  css: ["~/assets/css/main.css"],
  icon: {
    customCollections: [
      {
        prefix: "vent",
        dir: "./assets/icons",
      },
    ],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      link: [
        {
          href: "/favicon.svg",
          type: "image/svg+xml",
          rel: "icon",
        },
      ],
      title: "Vent",
      meta: [
        {
          name: "theme-color",
          content: "#001119",
        },
      ],
    },
  },
});
