import { ref } from "vue";

const apiUrl = ref("https://api.concienciadelserdivino.com.mx/api/");

export const useApiUrl = () => {
  const setUrlApi = (url: string) => {
    apiUrl.value = url;
  };
  return {
    setUrlApi,
    apiUrl,
  };
};
