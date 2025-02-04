import { ref } from "vue";
const { apiUrl } = useApiUrl();

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

const dataEventos = ref<Experience[]>([]);

export const useApiEventos = () => {
  const initFetchEventos = async () => {
    const { data, error, pending } = await useFetch<ApiResponse>(
      apiUrl.value + "/experiences"
    );

    watchEffect(() => {
      if (error.value) {
      }
      if (data.value) {
        dataEventos.value = data.value.experiences;
      }
    });
  };

  return {
    dataEventos,
    initFetchEventos,
  };
};
