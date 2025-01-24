<template>
  <header>
    <div class="container_header">
      <NuxtLink class="container_logo" to="/">
        <img src="/assets/logo_without_bg.png" alt="" />
      </NuxtLink>
      <nav :class="{ active_submenu: isChecked, active: isResponsiveMenu }">
        <div class="container_menus">
          <NuxtLink class="container_logo" to="/" active-class="active">
            <img src="/assets/logo_without_bg.png" alt="" />
          </NuxtLink>
          <div class="menu">
            <NuxtLink to="/#Nuestra-Escencia">Nuestra Escencia</NuxtLink>
          </div>
          <div class="menu">
            <NuxtLink to="/#Nuestra-Precencia">Nuestra Presencia</NuxtLink>
          </div>
          <div class="menu">
            <NuxtLink to="#Nuestra-Historia">Nuestra Historia</NuxtLink>
          </div>
          <div class="menu">
            <input type="checkbox" id="subMenu" v-model="isChecked" />

            <label for="subMenu" :class="{ active: isChecked }">
              <NuxtLink to="/experiencias" active-class="active"
                >Experiencias</NuxtLink
              >
              <span v-if="isChecked"> &#9650;</span>
              <span v-else> &#9660;</span>
            </label>
            <div class="submenu">
              <NuxtLink to="#Experiencias-Privadas"
                >Experiencias Privadas</NuxtLink
              >
            </div>
          </div>
          <div class="menu">
            <NuxtLink to="#Testimonios">Testimonios</NuxtLink>
          </div>
        </div>
        <client-only>
          <div class="container_account">
            <NuxtLink to="/cuenta">
              <img
                :src="meditator?.photo"
                alt=""
                v-if="meditator.photo.trim() !== ''"
              />
              <img src="/assets/icon_user.svg" alt="" v-else />
              <span>Cuenta</span>
            </NuxtLink>
          </div>
        </client-only>
      </nav>
      <div
        id="controler_menu"
        @click="toggleMenu"
        v-if="isResponsiveMenu"
      ></div>
      <button @click="toggleMenu" v-if="!isResponsiveMenu" id="BotonMenu">
        Mostrar
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const { meditator } = useInfoUser();

const isChecked = ref(false);
const isResponsiveMenu = ref(false);

const toggleMenu = () => {
  isResponsiveMenu.value = !isResponsiveMenu.value;
};
</script>

<style scoped>
header {
  position: relative;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100px;
  display: flex;
  z-index: 100;
  background: #f8f3ee75;
  backdrop-filter: blur(10px);
}
.container_header {
  position: relative;
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;
  gap: 2rem;
  align-items: center;
  margin: 0 auto;
}
.container_menus .container_logo {
  display: none;
}
.container_logo {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_logo img {
  width: 5rem;
}
#controler_menu {
  display: none;
}
nav {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_menus {
  width: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.menu {
  position: relative;
  display: flex;
  flex-direction: column;
}
.menu > input[type="checkbox"] {
  display: none;
}
.submenu {
  width: 15dvw;
  position: absolute;
  top: 130%;
  left: 0%;
  display: flex;
  flex-direction: column;
  transition: all 0.3s linear;
  transform: translateY(-10px);
  opacity: 0;
  visibility: hidden;
  padding: 2% 5%;
  backdrop-filter: blur(10px);
  background: #b47f4a;
  border-radius: 5px;
}
.submenu::before {
  content: "";
  position: absolute;
  top: -10%;
  left: 0.2%;
  width: 0%;
  height: 0;
  --size: 8px;

  width: 0;
  height: 0;
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-bottom: calc(var(--size) * 1.5) solid #b47f4a;
}
.submenu a {
  margin: 2% 0;
  padding: 1%;
  width: 100%;
  color: #fff;
}
.menu > input[type="checkbox"]:checked ~ .submenu {
  opacity: 1;
  visibility: visible;
  transform: translateY(0px);
}
.menu > a {
  color: #b47f4a;
  padding: 1%;
  cursor: pointer;
}

.menu a.active {
  border-bottom: solid 2px #b47f4a;
}
.menu > label {
  display: flex;
  flex-wrap: nowrap;
}
.menu > label > span {
  cursor: pointer;
}
.container_account {
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_account img {
  width: 3rem;
}
.container_account span {
  display: none;
}

#BotonMenu {
  display: none;
}
@media screen and (max-width: 800px) {
  header {
    backdrop-filter: blur(10px);
  }
  #controler_menu {
    top: 0;
    left: 0;
    position: fixed;
    display: block;
    width: 100dvw;
    height: 100dvh;
  }
  nav {
    position: fixed;
    width: 60dvw;
    height: 100dvh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    gap: 0 !important;
    z-index: 80 !important;
    background: #f8f3ee;
    backdrop-filter: blur(50px);
    align-items: start;
    padding-left: 5%;
    padding-right: 5%;
    padding-bottom: 5%;
    box-shadow: 0px 0px 50px 10px rgba(0, 0, 0, 0.1);
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    transition: all 0.3s linear;
    transform: translateX(-500px);
  }
  nav.active {
    transform: translateX(0px);
  }
  nav.active_submenu {
    width: 100%;
  }
  .container_menus {
    width: 100%;
    flex-direction: column;
    height: 20dvh;
    gap: 1rem;
  }
  .container_menus .container_logo {
    display: block;
    height: fit-content !important;
  }

  .menu {
    width: 100%;
  }
  .menu a,
  .container_menus label {
    padding: 3%;
    transition: all 0.3s linear;
    border-radius: 5px;
  }
  .menu a:hover,
  .container_menus label:hover {
    background: #b47f4a;
    color: #fff;
  }
  .submenu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    background: #f8f3ee00;
    backdrop-filter: none;
    transition: all 0.3s linear;
    opacity: 0 !important;
    visibility: hidden !important;
  }
  .submenu a {
    border-radius: 0px;
    border-bottom: #b47f4a solid 1px;
  }
  input[type="checkbox"]:checked ~ .submenu {
    display: flex;
    position: relative;
    opacity: 1 !important;
    visibility: visible !important;
  }
  label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  label.active {
    background: #b47f4a;
    color: #fff;
  }
  label span {
    transition: all 0.3s linear;
  }
  .submenu::before {
    display: none;
  }
  .container_account {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .container_account a {
    width: 100%;
    background: #b47f4a;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    border: solid 2px #b47f4a;
  }
  .container_account img {
    position: relative;
    z-index: 10;
    background: #fff;
  }
  .container_account span {
    display: flex;
    width: 70%;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2%;
    color: #fff;
  }
  #BotonMenu {
    display: block;
  }
  .submenu a {
    color: #b47f4a;
  }
  label:hover > a {
    color: #fff;
  }
  label.active > a {
    color: #fff;
  }
}
</style>
