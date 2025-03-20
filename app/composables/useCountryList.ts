interface Countries {
  id: number;
  name: string;
  clave: string;
  lada: string;
  active: number;
}

interface ApiResponse {
  countries: Countries[];
  message: string;
}
const selectedPrefijo = ref("");

const { apiUrl } = useApiUrl();

const countryList = ref<Countries[] | null>(null);

export default function useCountryList() {
  const fetchCountries = async () => {
    try {
      const response = await $fetch<ApiResponse>(
        apiUrl.value + "/country/list"
      );

      countryList.value = response.countries as Countries[];
      selectedPrefijo.value = countryList.value[0].lada;
      return { success: true, message: "Paises cargados." };
    } catch (error) {
      return { success: false, message: "Ocurrio un error: " + error };
    }
  };

  return {
    fetchCountries,
    countryList,
    selectedPrefijo,
  };
}
