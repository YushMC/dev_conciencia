// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  ssr: true, // Asegúrate de que está habilitado
  srcDir: "src/",
  devtools: { enabled: true },
  modules: ["@nuxt/image"],
  image: {
    optimizeImages: false, // Desactivar la optimización de imágenes
  },
});
