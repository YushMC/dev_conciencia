import { ref } from "vue";
import Swal from "sweetalert2";

interface FindMeditator {
  id: number;
  name: string;
  phone: string;
}

interface ApiResponse {
  message: string;
  meditator: FindMeditator[];
}

const dataMeditator = ref<FindMeditator[]>([]);

export const useApiFindByPhone = () => {
  const searchMeditator = async (phone: string, token: string) => {
    try {
      Swal.fire({
        title: "Buscando...",
        text: "Por favor espera un momento...",
        allowOutsideClick: false,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      const response = await $fetch<ApiResponse>(
        "http://192.168.1.177/conciencia-api/public/api/meditator/findByPhone",
        {
          method: "PUT",
          headers: {
            Authorization: token,
            "Content-Type": "application/json",
          },
          body: { phone },
        }
      );

      // Asegura que dataMeditator sea siempre un array, incluso si solo hay un meditador
      dataMeditator.value = Array.isArray(response.meditator)
        ? response.meditator
        : [response.meditator];

      Swal.close();

      Swal.fire({
        icon: "success",
        title: "Meditador encontrado!",
        text: response.message,
      });
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error :/",
        text: "Ocurrió un problema al buscar: " + error.message,
      });
    }
  };

  const resetDataMeditator = () => {
    dataMeditator.value = [];
  };
  resetDataMeditator();

  return {
    dataMeditator,
    resetDataMeditator,
    searchMeditator,
  };
};
