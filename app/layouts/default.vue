<template>
  <div class="container_body">
    <Header></Header>

    <!-- Este contenedor será el nodo raíz animado -->
    <div>
      <NuxtPage> </NuxtPage>
    </div>

    <WAppButton></WAppButton>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router"; // Importar el composable useRoute

// Obtener el objeto de la ruta
const route = useRoute();

// Declarar el tipo de la variable isPageVisible
const isPageVisible = ref<boolean>(false);

isPageVisible.value = false;
// Aseguramos que la página solo se haga visible después de un pequeño delay
watch(
  () => route.fullPath, // Usar route.fullPath en lugar de $route.fullPath
  () => {
    setTimeout(() => {
      isPageVisible.value = true;
    }, 100); // Este pequeño delay puede ayudar a que la transición se dispare
  },
  { immediate: true }
);
</script>

<style scoped>
.container_body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
