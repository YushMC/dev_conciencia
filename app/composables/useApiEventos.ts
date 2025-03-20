import { ref } from "vue";
const { apiUrl } = useApiUrl();

import type { Experience } from "./../types/ExperienceType";

interface ApiResponse {
  message: string;
  experiences: Experience[];
}

const dataEventos = ref<Experience[]>([]);

export const useApiEventos = () => {
  const initFetchEventos = async () => {
    try {
      // Llamamos a la API usando $fetch
      const response: ApiResponse = await $fetch(apiUrl.value + "/experiences");
      // Verificamos si hay eventos antes de asignarlos
      dataEventos.value = response.experiences ?? [];

      return { success: true, message: "Datos de eventos listos" };
    } catch (error) {
      return { error: true, message: "Ocurrió un error: " + error };
    }
  };

  return {
    dataEventos,
    initFetchEventos,
  };
};
