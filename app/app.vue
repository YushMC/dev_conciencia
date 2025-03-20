<template>
  <NuxtLayout> </NuxtLayout>
</template>

<script setup lang="ts">
import logo from "~/assets/logo.jpeg";

import { useHead } from "unhead";

useHead({
  link: [
    {
      rel: "icon",
      type: "image/jpeg",
      href: logo, // Asegúrate de que esté en `/public/`
    },
  ],
});

import { ref, onBeforeMount } from "vue";

//tokens
const { setToken } = useInfoUser();
import { useApiUrl } from "./composables/useApi";
const { setUrlApi } = useApiUrl(); // Removed redeclaration
const { initFetchEventos, dataEventos } = useApiEventos();
const { fetchCountries } = useCountryList();
const config = useRuntimeConfig();
const authStore = useAuthStore();

onBeforeMount(async () => {
  setToken();
  const config = useRuntimeConfig();
  await authStore.setUrlApi(config.public.apiUrl);
  setUrlApi(config.public.apiUrl.toString());
  await initFetchEventos();
  await fetchCountries();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaisei+Tokumin&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
  min-width: 0;
}
body {
  width: 100%;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
}
#_nuxt {
  min-height: 100% !important;
}
.container_body {
  min-height: 100dvh !important;
}
a {
  text-decoration: none;
  color: #b47f4a;
  cursor: pointer;
}
h1,
h2,
h3,
h4 {
  text-wrap: balance;
}
h1 {
  color: #b47f4a;
  font-size: 3rem;
  font-weight: 400;
}
p {
  color: #b47f4a;
  line-height: 1.5;
  text-wrap: pretty;
}
label {
  color: #b47f4a;
  z-index: 90;
}
html {
  scroll-behavior: smooth;
}
body {
  font-family: "Josefin Sans", serif;
  font-optical-sizing: auto;
  font-style: normal;
}
.container_titulos {
  width: 100%;
  margin-top: -18%;
  margin-bottom: 10%;
  padding: 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fcf6f1;
  position: relative;
  z-index: 80;
  flex-wrap: wrap;
}

.container_titulos button,
.container_titulos a {
  border: 2px solid #b47f4a;
  background: #fff;
  padding: 1rem 2rem;
  width: 20%;
  margin: 0 2%;
  color: #b47f4a;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
}
.titulo {
  font-family: "Kaisei Tokumin", serif;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  font-size: 3rem;
}
@media screen and (max-width: 600px) {
  .container_titulos {
    margin-top: -35% !important;
    display: flex;
    flex-direction: column !important;
  }
  .container_titulos button,
  .container_titulos a {
    width: 80% !important;
  }

  .titulo {
    font-size: 1.5rem;
    margin-bottom: 3%;
  }
}

.swiper-pagination {
  position: relative !important;
  margin-top: 2%;
}
.swiper-pagination-bullet-active {
  background: #b47f4a !important;
}
.swiper-button-next,
.swiper-button-prev {
  top: 45% !important;
  color: #fff !important;
  background-color: #b47f4a !important;
  padding: 1.8rem !important;
  border-radius: 10px !important;
}

.swiper-button-next,
.swiper-button-prev {
  opacity: 0.5;
  transition: all 0.3s linear;
}
.swiper-button-next:hover,
.swiper-button-prev:hover {
  opacity: 1;
}
input[type="checkbox"] {
  accent-color: #b47f4a;
}
.text_color_principal {
  color: #b47f4a;
}
.text_color_blanco {
  color: #fff;
}
.text_color_secundario {
  color: #b47f4a;
}
.bg_color_principal {
  background: #f8f3ee;
}
.bg_color_secundario {
  background: #b47f4a;
}
.bg_color_blanco {
  background: #fff;
}
hr {
  height: 0.1rem;
  border: none;
  margin: 1% 0;
}

/* Transición 'blur' */
.opacity-enter-active,
.opacity-leave-active {
  transition: opacity 0.3s ease;
}

.opacity-enter-from,
.opacity-leave-to {
  opacity: 0; /* Estado inicial de entrada o final de salida */
  pointer-events: none !important; /* Evita interacciones durante la transición */
}

.opacity-leave-from,
.opacity-enter-to {
  opacity: 1; /* Estado final de entrada o inicial de salida */
}
.blur-enter-active,
.blur-leave-active {
  transition: opacity 0.5s, filter 0.5s;
}

.blur-enter-from,
.blur-leave-to {
  opacity: 0;
  filter: blur(10px); /* Desenfoque inicial o final */
}

.blur-leave-from,
.blur-enter-to {
  opacity: 1;
  filter: blur(0); /* Sin desenfoque */
}
main {
  position: relative;
  display: flex;
  flex-direction: column;
  content-visibility: auto;
}

.custom-event-title {
  width: 100% !important;
  position: relative !important;
  height: 80% !important;
  font-weight: bold;
  color: white !important; /* Puedes cambiar el color del título */
  font-size: 1rem; /* Tamaño de fuente */
  text-overflow: ellipsis;
  padding: 5%;
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
}

/* Usar el pseudo-elemento ::after para agregar contenido */
.event-icon {
  position: relative;
  /* Ajusta la posición vertical si es necesario */
  font-size: 16px; /* Tamaño del ícono/texto */
  z-index: 100;
}
.custom-event-title span {
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
}

.icon_eye {
  position: absolute;
  width: 2dvw;
  right: 1rem;
  top: 20%;
  transition: all 0.3s linear;
  cursor: pointer;
}
@media screen and (max-width: 800px) {
  .icon_eye {
    width: 8dvw;
  }
}
.container_input {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  margin-top: 2%;
}
.container_input:nth-child(2) {
  margin-top: 1%;
}
.container_input input {
  margin-top: 1dvh;

  border-radius: 5px;
  border: #b47f4a 2px solid;
  background: none;
  font-size: 1.2rem;
  outline: none;
  transition: all 0.3s linear;
  padding: 1%;
}
.container_input input:focus {
  background: #ffffff71;
  backdrop-filter: blur(50px);
  padding: 4%;
  padding-top: 3dvh;
}
.container_input input ~ label {
  position: absolute;
  top: 4dvh;
  left: 2px;
  color: #b47f4a;
  transition: all 0.3s linear;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
}
.container_input input:focus ~ label {
  top: 0;
  left: 0;
  z-index: 100;
  background: #ffffffef;
  padding: 1%;
  border-radius: 5px;
  backdrop-filter: blur(50px);
  border: #b47f4a 2px solid;
  opacity: 1;
  visibility: visible;
}
.container_login form input ~ label.active {
  position: relative !important;
}
.container_input input:focus ~ .icon_eye {
  top: 30%;
}
.container_input select {
  margin: 2% 0;
  padding: 2% 0;
  background: none;
  border: none;
  border-bottom: 4px solid #b47f4a;
  color: #694929;
  outline: none;
}

.seccion_ajustes {
  position: relative;
  margin: 4dvh 0;
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 1rem;
}
details.seccion_ajustes {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
summary {
  color: #6d3e0b !important;
}
details.seccion_ajustes .container_imagen {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2%;
}
details.seccion_ajustes .container_imagen label {
  display: none;
}
.seccion_ajustes label {
  width: fit-content;
  position: absolute;
  top: -1.5dvh;
  left: 0;
  background: #b47f4a;
  color: #fff;
  padding: 0.3rem;
  border-radius: 5px;
}

.seccion_ajustes input {
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #b47f4a;
  border-radius: 10px;
}

.seccion_ajustes input[type="text"],
.seccion_ajustes input[type="password"] {
  width: 100%;
}

.seccion_ajustes button {
  width: 100%;
  padding: 1rem;
  background: #b47f4a;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s linear;
}
.cargando {
  height: 40dvh;
}

.codeNumber {
  margin-top: 20px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
}
.codeNumber select {
  width: 80px;
  height: fit-content;
  background: #b47f4a;
  border-radius: 5px;
  color: #fff;
  align-items: center;
  text-align: center;
  border-bottom: none;
  margin-right: 4px;
  height: 100%;
}
.codeNumber input {
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
