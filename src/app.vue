<template>
  <NuxtLayout> </NuxtLayout>
</template>

<script setup lang="ts"></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Kaisei+Tokumin&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  user-select: none;
}
body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
a {
  text-decoration: none;
  color: #b47f4a;
  cursor: pointer;
}
h1 {
  color: #b47f4a;
  font-size: 3rem;
  font-weight: 400;
}
p {
  color: #b47f4a;
  line-height: 1.5;
}
label {
  color: #b47f4a;
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
}

.custom-event-title {
  width: 100% !important;
  position: relative !important;
  height: 50% !important;
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
</style>
