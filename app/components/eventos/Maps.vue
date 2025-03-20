<template>
  <ClientOnly v-if="isLoadMap">
    <gmp-map
      class="map"
      :center="center"
      map-id="DEMO_MAP_ID"
      :zoom="zoom"
      load="lazy"
    >
      <gmp-advanced-marker
        :position="position"
        title="Ubicación"
      ></gmp-advanced-marker>
    </gmp-map>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const isLoadMap = ref(false);
const zoom = ref<number>(20);

const props = defineProps<{
  lat: number;
  lng: number;
}>();

// ✅ Asegurar que lat y lng sean números válidos
const safeLat = computed(() =>
  typeof props.lat === "number" && !isNaN(props.lat) ? props.lat : null
);
const safeLng = computed(() =>
  typeof props.lng === "number" && !isNaN(props.lng) ? props.lng : null
);

// ✅ Evitar que el mapa se renderice antes de que Google Maps esté cargado
const center = computed(() => {
  return isLoadMap.value && safeLat.value !== null && safeLng.value !== null
    ? { lat: safeLat.value, lng: safeLng.value }
    : null;
});

// ✅ Evitar error al crear google.maps.LatLng
const position = computed(() => {
  if (!isLoadMap.value || safeLat.value === null || safeLng.value === null)
    return null;
  return new globalThis.google.maps.LatLng(safeLat.value, safeLng.value);
});

const loadGoogleMaps = async () => {
  try {
    if (!process.client) return; // 🚀 Solo ejecutar en el cliente

    const apiKey = "AIzaSyBXlZOHNHJnCUeoKZJorZMWpS2_mBK6H60"; // Usa variables de entorno para la API Key

    const loader = new Loader({
      apiKey,
      version: "beta",
    });

    await loader.load();
    await loader.importLibrary("maps");
    await loader.importLibrary("marker");

    isLoadMap.value = true;
  } catch (error) {}
};

onMounted(() => {
  loadGoogleMaps();
});

onUnmounted(() => {
  isLoadMap.value = false;
});
</script>

<style scoped>
.map {
  width: 100%;
  height: 70dvh;
  content-visibility: auto;
}
</style>
