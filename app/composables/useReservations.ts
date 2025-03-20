import { ref } from "vue";
import Swal from "sweetalert2";
import { useApiUrl } from "./useApi";

const { apiUrl } = useApiUrl();

interface ApiResponse {
  message: string;
  reserve: [];
}

export const useReservations = () => {
  const fetchReserve = async (
    id_evento: number,
    token: string,
    reference: string,
    isAdvance: boolean,
    price_advance: number
  ) => {
    Swal.fire({
      title: "Generando reserva...",
      text: "Por favor espera un momento...",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });
    const formData = new FormData();
    formData.append("id_experience", id_evento.toString());
    formData.append("reference_payment", reference.toString());
    formData.append("advance_payment", price_advance.toString());

    const { data, error, pending } = await useFetch<ApiResponse>(
      apiUrl.value + "/meditator/experience/reserve",
      {
        method: "POST",
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );
    Swal.close();
    watchEffect(() => {
      if (error.value) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<h3>Error al registrar:</h3>
                      <br><h5 style='color: red;'>${JSON.stringify(
                        error.value.data.message
                      )}</h5>`,
        });
      }
      if (data.value) {
        Swal.fire({
          icon: "success",
          title: "Reserva Generada!",
          text: data.value?.message ?? " ",
        });
      }
    });
  };
  return { fetchReserve };
};
