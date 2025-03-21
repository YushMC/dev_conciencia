import type { Experience } from "../types/ExperienceType";

const experiencia = ref<Experience | null>(null);

interface ApiResponse {
  message: string;
  experience: Experience;
}

export default function useInfoEvento() {
  const fetchEvento = async (apiUrl: string, evento: string) => {
    try {
      const response = await $fetch<ApiResponse>(
        `${apiUrl}/experience/${evento}`
      );

      experiencia.value = response.experience as Experience;

      return { success: true, message: "Datos encontrados de la experiencia" };
    } catch (error) {
      return { success: false, message: "Ocurrio un error: " + error };
    }
  };

  return {
    fetchEvento,
    experiencia,
  };
}
