import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "https://ncrsgvuccmyxefxhnqko.supabase.co/storage/v1/object/public/tarn/logo.png",
        },
      ],
    },
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: ["@nuxt/image", "@nuxt/ui"],
  vite: {
    plugins: [tailwindcss()],
  },
});
