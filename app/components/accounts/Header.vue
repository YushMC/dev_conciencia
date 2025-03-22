<template>
  <header :class="{ active: isActive }">
    <div class="fast_access">
      <div class="container_logo">
        <img src="/assets/logo_without_bg.png" alt="" />
        <div class="datos_user">
          <h3>{{ meditator?.name }}</h3>
        </div>
      </div>

      <a @click="toogleStateModal">Ajustes</a>
      <NuxtLink to="/">Inicio</NuxtLink>
    </div>
    <div class="others">
      <button @click="logout" style="background: red">Cerrar Sesión</button>
    </div>
  </header>
  <div id="cerrarMenu" @click="toggleStateHeader" v-if="isActive"></div>
</template>

<script setup lang="ts">
import Swal from "sweetalert2";
import { watch } from "vue";

const { isActive, toggleStateHeader } = useHeaderAccount();
const { toogleStateModal } = useModalAccount();
const { removeToken, meditator } = useInfoUser();

import { useAuthStore } from "./../../store/auth";
const authStore = useAuthStore();

import { useRouter } from "vue-router";
const router = useRouter(); // Llamar useRouter() solo una vez

const logout = async () => {
  removeToken();
  authStore.logout();
  await Swal.fire({
    title: "Cerrando Sesión...",
    text: "Por favor espera mientras procesamos tu solicitud.",
    allowOutsideClick: false,
    timer: 1500, // Añadir un tiempo de espera antes de cerrar
    didOpen: () => {
      Swal.showLoading(); // Muestra un loader
    },
  });
  Swal.close();
  router.push("/login");
};
</script>

<style scoped>
#cerrarMenu {
  display: none;
}
header {
  width: 100%;
  height: 100dvh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  top: 0;
  left: 0;
  border-right: 2px solid #b47f4a7c;
  box-shadow: 0px 0px 10px 0px rgba(126, 126, 126, 0.315);
  z-index: 100;
}
.active {
  transform: translateX(0px);
}

.fast_access {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container_logo {
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 20px;
  gap: 1rem;
  backdrop-filter: blur(20px);
}
.container_logo img {
  width: 30%;
  height: 100%;
  aspect-ratio: 1/1;
}
.container_logo .datos_user {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow: hidden;
}
.datos_user h4 {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 400;
  font-size: 0.8rem;
}

.fast_access a {
  padding: 5%;
  display: flex;
  align-items: center;
  border: 2px solid transparent;
}
.link_active {
  background: #f8f3ee;
  border-left: solid 4px #b47f4a;
}
.others {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 95%;
  margin: 5% auto;
}
.others button {
  padding: 5%;
  background: #b47f4a;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
}
a {
  border: solid 4px transparent !important;
  transition: all 0.3s linear;
}

a:hover {
  border-left: none;
  border-bottom: solid 4px #b47f4a !important;
}

@media screen and (max-width: 800px) {
  header {
    position: fixed;
    background: #f8f3ee;
    width: 100%;
    height: 10dvh;
    padding: 2%;
    bottom: 0 !important;
    top: inherit !important;
    overflow: hidden;
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    transition: all 0.3s linear;
    z-index: 100;
  }
  .container_logo {
    display: none;
  }

  .fast_access {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  .fast_access a {
    width: 100%;
    transition: all 0.3s linear;
  }

  .others {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .active {
    transform: translateX(0px);
  }
}
</style>
