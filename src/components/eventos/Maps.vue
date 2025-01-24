<template>
  <div ref="mapRef" class="map"></div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps<{
  lat: number;
  lng: number;
}>();

const mapRef = ref<HTMLElement | null>(null);
const mapInstance = ref<google.maps.Map | null>(null);
const markerInstance = ref<google.maps.marker.AdvancedMarkerElement | null>(
  null
);

const apiKey = "AIzaSyBXlZOHNHJnCUeoKZJorZMWpS2_mBK6H60"; // Reemplázala con tu API Key

onMounted(async () => {
  const loader = new Loader({
    apiKey,
    version: "beta", // Es necesario usar "beta" para AdvancedMarkerElement
  });

  await loader.importLibrary("maps");
  await loader.importLibrary("marker");

  if (mapRef.value) {
    mapInstance.value = new google.maps.Map(mapRef.value, {
      center: { lat: props.lat, lng: props.lng },
      zoom: 12,
      mapId: "DEMO_MAP_ID", // Puedes generar uno en Google Cloud Console
    });

    markerInstance.value = new google.maps.marker.AdvancedMarkerElement({
      position: { lat: props.lat, lng: props.lng },
      map: mapInstance.value,
      title: "Ubicación seleccionada",
    });
  }
});

// 🔄 Si cambian las coordenadas, actualiza el mapa y marcador
watch(
  () => [props.lat, props.lng],
  ([newLat, newLng]) => {
    if (mapInstance.value && markerInstance.value) {
      const newPosition = new google.maps.LatLng(newLat, newLng);
      mapInstance.value.setCenter(newPosition);
      markerInstance.value.position = newPosition;
    }
  }
);
</script>

<style scoped>
.map {
  width: 100%;
  height: 50dvh;
}
</style>
