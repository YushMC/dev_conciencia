<template>
  <header>
    <div class="fast_access">
      <NuxtLink class="container_logo" to="/"
        ><img src="/assets/logo_without_bg.png" alt=""
      /></NuxtLink>
      <h3>Principal</h3>
      <NuxtLink to="/cuenta" active-class="link_active">Inicio</NuxtLink>
      <NuxtLink to="/">Volver atras</NuxtLink>
    </div>
    <div class="others">
      <a href="#">Ajustes</a>
      <a href="#">Ayuda</a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
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
  background: #fae1c9;
  padding: 2% 8%;
}
.fast_access {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_logo {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  backdrop-filter: blur(20px);
}
.container_logo img {
  width: 50%;
  height: 100%;
  aspect-ratio: 1/1;
}
.fast_access a {
  padding: 4%;
  border-radius: 10px;
  display: flex;
  align-items: center;
}
.link_active {
  background: #b47f4a;
  color: #fff;
}
.others {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
