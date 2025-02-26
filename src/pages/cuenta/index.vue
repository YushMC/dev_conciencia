<template>
  <div class="container_main_dashboard">
    <div class="info_user">
      <h1>
        Hola {{ meditator?.name }}!
        <span id="mostrar_menu" @click="toggleStateHeader" style="display: none"
          >Mostrar</span
        >
      </h1>

      <img
        v-if="meditator?.photo"
        :src="meditator?.photo"
        alt=""
        id="botonMenu"
      />
      <img src="/assets/logo_without_bg.png" alt="" id="logo_conciencia" />
    </div>

    <div class="container_sections">
      <section>
        <aside class="container_form">
          <h3 class="category">Agenda</h3>
          <accountsCalendar></accountsCalendar>
        </aside>
        <div class="container_form" id="comentarios" v-if="newComment">
          <details>
            <summary class="category">
              Comentario
              <div class="important" v-if="newComment">&nbsp;</div>
            </summary>
            <label for="">
              Deja tu comentario acerca de:
              <span>Meditación Guadalajara</span>
            </label>
            <textarea name="" id=""></textarea>
          </details>
        </div>
      </section>
      <section>
        <aside>
          <h3 class="category">Reservar</h3>
          <details>
            <summary>Reservar ahora</summary>
          </details>
        </aside>
      </section>
    </div>
    <AccountsModalSettings></AccountsModalSettings>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "accounts", // Nombre del layout que deseas usar
});
import { useHead } from "unhead";

useHead({
  title: "Cuenta",
});
import { useRouter } from "vue-router";
const router = useRouter();

const { toggleStateHeader } = useHeaderAccount();

const { meditator, hydrate } = useInfoUser();

import { ref } from "vue";

const newComment = ref<boolean>(false);
const newQuestions = ref<boolean>(false);
const imgpreview = ref<string>("");

// Configuración del tour
onMounted(() => {
  hydrate();
});
</script>

<style scoped>
#logo_conciencia {
  display: none;
}
#botonMenu {
  width: 5dvw;
  object-fit: cover;
  aspect-ratio: 1/1;
  border-radius: 100%;
  cursor: pointer;
}
.container_main_dashboard {
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}
.info_user {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info_user img {
  width: 5dvw;
  aspect-ratio: 1/1;
  border-radius: 100%;
}
.container_sections {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.container_sections section {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
.container_sections section:first-child {
  height: 100%;
}
.container_sections section .container_asides_horizontal {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  flex-wrap: wrap;
}
.container_sections section aside {
  background: #ffffffb7;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(20px);
}
.info_user section {
  width: 50%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}
.container_sections section:nth-child(2) aside,
.info_user aside {
  width: 100%;
  padding: 2rem;
  background: #ffffff;
  height: fit-content;
  border-radius: 10px;
  margin-right: 5%;
}
.info_user aside {
  width: 50% !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.info_user aside a {
  width: 30%;
}

aside h3 {
  color: #b47f4a;
}
aside p {
  color: #553b21;
}
aside ul {
  margin: 0 1rem;
}
.container_asides_horizontal aside p,
.container_asides_horizontal aside ul {
  height: 10dvh;
  overflow-y: auto;
}
aside li {
  color: #553b21;
}
aside details {
  overflow-x: auto;
}
summary {
  position: relative;
}
aside details ul {
  margin: 2%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
aside details li {
  background: #b47f4adc;
  padding: 2%;
  color: #fff;
  border-radius: 10px;
}
aside a {
  width: 100%;
  padding: 0.5rem;
  background: #b47f4a;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
}
/* Histyorial */
aside .container_fechas {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
aside .container_fechas select {
  background: none;
  border: none;
  border-bottom: 2px solid #885e34;
  padding: 0.5rem;
  margin: 1% 0;
  color: #553b21;
}
aside table {
  width: 100% !important;
  border-radius: 10px;
  font-size: 1em;
  font-family: sans-serif;
  min-width: 450px;
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.034);
}
aside table caption {
  margin-bottom: 2%;
  color: #573d24;
}
aside table thead {
  border-radius: 10px;
}
aside table thead tr {
  background-color: #b47f4a;
  color: #ffffff;
  text-align: middle;
}
aside table th,
aside table td {
  padding: 2%;
}
aside table tr:nth-of-type(even) {
  background: #b47f4a18;
}
/*Clase para las categorias */
.category {
  width: fit-content;
  border-bottom: solid 2px #b47f4a;
  padding: 0.1rem 1rem;
  line-height: 1.5;
  color: #b47f4a;
  opacity: 0.8;
  text-align: center;
  text-wrap: nowrap;
  position: relative;
}
.important {
  position: absolute;
  top: 0;
  right: 0;
  width: 1rem;
  height: 1rem;
  background: red;
  border-radius: 100%;
  transform: scale(0.5);
  opacity: 1;
}
.container_form {
  width: 100%;
  padding: 2%;
  border-radius: 10px;
  background: #ffffffb7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_form form {
  margin-top: 2%;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_form details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_form details label {
  margin-top: 1%;
}
.container_form details textarea {
  min-width: 50%;
  margin-top: 1%;
  max-width: 100%;
  max-width: 100%;
  min-height: 10dvh;
}

@supports (field-sizing: content) {
  .container_form details textarea {
    width: 100%;
    resize: none;
    field-sizing: content;
  }
}

/*

@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}
  */

@media screen and (max-width: 1300px) {
  .container_sections {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 800px) {
  #logo_conciencia {
    position: absolute;
    width: 5dvw;
    display: block;
    bottom: 0%;
    right: 0%;
    z-index: 100;
    background: #fff;
  }
  .container_sections {
    display: flex;
    flex-direction: column;
  }
  .info_user {
    margin-top: 2%;
    position: relative;
    flex-wrap: wrap;
  }
  #botonMenu {
    width: 15dvw;
  }
  .info_user > img {
    width: 50dvw;
  }

  .container_modal {
    width: 80%;
    left: 10%;
  }
}
</style>
