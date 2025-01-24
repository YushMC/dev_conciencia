import { ref } from "vue";

interface Experience {
  id: number;
  flyer: string;
  id_experience_status: number;
  description: string;
  slug: string;
  isPublic: boolean;
  isActive: boolean;
  isAuthorized: boolean;
  initDate: string;
  // Agrega otras propiedades si existen en la API
}

interface ApiResponse {
  message: string;
  experiences: Experience[];
}

const api = ref("");

const dataEventos = ref<Experience[]>([]);

export const useApiEventos = () => {
  const setApiForEventos = (url: string) => {
    api.value = url;
  };

  const initFetchEventos = () => {
    const { data, error, pending } = useFetch<ApiResponse>(
      api.value + "/experiences",
      {
        lazy: true,
        default: () => ({ message: "", experiences: [] }), // Valor inicial vacío
      }
    );

    watchEffect(() => {
      if (error.value) {
        console.error("Error al obtener eventos:", error.value);
      }
      if (data.value) {
        dataEventos.value = data.value.experiences;
      }
    });
  };

  return {
    dataEventos,
    initFetchEventos,
    setApiForEventos,
  };
};
