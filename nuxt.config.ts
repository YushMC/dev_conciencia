// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
  vite: {
    optimizeDeps: {
      include: ["driver.js"],
    },
  },
  */
  compatibilityDate: "2024-11-01",
  ssr: true, // Asegúrate de que está habilitado
  srcDir: "src/",
  build: {
    transpile: ["unhead"], // Asegúrate de que unhead sea correctamente transpilado
  },
  devtools: { enabled: false },
  // plugins: ["~/plugins/driver.js"],

  /*
  sitemap: {
    hostname: "https://tu-dominio.com",
    routes: async () => {
      // Generar rutas dinámicas, si es necesario.
      return ["/ruta1", "/ruta2"];
    },
  },
  */
  app: {
    head: {
      htmlAttrs: {
        lang: "es",
      },
      charset: "utf-8",
      titleTemplate: "%s - Conciencia del Ser Divino", // Plantilla para títulos dinámicos
      //title: "Conciencia del Ser Divino", // Título predeterminado (si no se define uno dinámico)
      meta: [
        {
          name: "theme-color",
          content: "#f8f3ee",
        },
        {
          name: "description",
          content: "Somos Conciencia del Ser Divino",
        },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        //Etiquetas og
        { property: "og:site_name", content: "Conciencia del Ser Divino" },
        { property: "og:locale", content: "es_MX" },
        //seguimiento
        {
          name: "robots",
          content:
            "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
        },
      ],
      link: [
        {
          rel: "shortcut icon",
          href: "/hoa.png",
        },
        //cual es la ruta cononica o la base
        { rel: "canonical", href: "https://www.ejemplo.com/" },
      ],
    },
    pageTransition: { name: "blur", mode: "out-in" },
    layoutTransition: { name: "opacity", mode: "out-in" },
  },
});
