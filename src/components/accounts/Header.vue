<template>
  <header>
    <div class="fast_access">
      <div class="container_logo" to="/">
        <img src="/assets/logo_without_bg.png" alt="" />
        <div class="datos_user">
          <h3>Roberto Gomez</h3>
          <h4>Nivel 1</h4>
        </div>
      </div>
      <NuxtLink to="/cuenta" active-class="link_active">Panel</NuxtLink>
      <NuxtLink to="/">Sitio Principal</NuxtLink>
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
  border-right: 2px solid #b47f4a7c;
  box-shadow: 0px 0px 10px 0px rgba(126, 126, 126, 0.315);
  z-index: 100;
}
.fast_access {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.container_logo {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  border-radius: 20px;
  gap: 1rem;
  backdrop-filter: blur(20px);
}
.container_logo img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
}
.container_logo .datos_user {
  width: 100%;
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
  border-left: solid 4px #b47f4a !important;
}
.others {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
