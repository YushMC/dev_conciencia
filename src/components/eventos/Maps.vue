<template>
  <gmp-map
    class="map"
    :center="`${props.lat},${props.lng}`"
    map-id="DEMO_MAP_ID"
    zoom="15"
  >
    <gmp-advanced-marker
      :position="`${props.lat},${props.lng}`"
      :title="'Ubicación'"
    ></gmp-advanced-marker>
  </gmp-map>
  <!-- 
  <gmp-map
    :center="(props.lat, props.lng)"
    zoom="4"
    map-id="conciencia"
    style="height: 400px"
  >
    <gmp-advanced-marker
      :position="(props.lat, props.lng)"
      :title="'Ubicación'"
    ></gmp-advanced-marker>
  </gmp-map>
  -->
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const props = defineProps<{
  lat: number;
  lng: number;
}>();

console.log(props.lat);
console.log(props.lng);

const mapRef = ref<HTMLElement | null>(null);
const mapInstance = ref<google.maps.Map | null>(null);
const markerInstance = ref<google.maps.marker.AdvancedMarkerElement | null>(
  null
);

const pinElement = ref<google.maps.marker.PinElementOptions | null>(null);

const apiKey = "AIzaSyBXlZOHNHJnCUeoKZJorZMWpS2_mBK6H60"; // Reemplázala con tu API Key

onMounted(async () => {
  const loader = new Loader({
    apiKey,
    version: "beta", // Es necesario usar "beta" para AdvancedMarkerElement
  });

  await loader.importLibrary("maps");
  await loader.importLibrary("marker");

  if (!mapRef.value) return;

  const { lat, lng } = props;
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
  height: 70dvh;
}
</style>
