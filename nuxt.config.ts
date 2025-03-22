// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vite: {
    server: {
      fs: {
        strict: false, // Asegura que Vite pueda leer archivos fuera de `src/`
      },
    },
  },

  compatibilityDate: "2024-11-01",

  // Asegúrate de que está habilitado
  ssr: true,

  srcDir: "app/",

  build: {
    transpile: ["unhead"], // Asegúrate de que unhead sea correctamente transpilado
  },

  devtools: { enabled: false },

  // plugins: ["~/plugins/driver.js"],
  plugins: [
    "~/plugins/sweetalert2.ts",
    "~/plugins/v-calendar.ts", // Asegúrate de agregar tu plugin aquí
  ],

  imports: {
    dirs: ["store"], // Asegura que los stores en la carpeta `store` se detecten automáticamente
  },

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
        //cual es la ruta cononica o la base
        { rel: "canonical", href: "https://www.ejemplo.com/" },
      ],
    },
    pageTransition: { name: "blur", mode: "out-in" },
    layoutTransition: { name: "opacity", mode: "out-in" },
  },

  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("gmp-"), // Ignorar los elementos de Google Maps
    },
  },

  routeRules: {
    "/cuenta/**": { appMiddleware: "auth" }, // Protege todas las subrutas de /cuenta
  },

  runtimeConfig: {
    apiUrl: "https://api.concienciadelserdivino.com.mx/api", // Solo en el servidor
    public: {
      apiUrl: "https://api.concienciadelserdivino.com.mx/api",
    },
  },

  modules: ["nuxt-bootstrap-icons"],
});
