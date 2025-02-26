import { ref } from "vue";

const apiUrl = ref("http://192.168.1.6/conciencia-api/public/api");

export const useApiUrl = () => {
  const setUrlApi = (url: string) => {
    apiUrl.value = url;
  };
  return {
    setUrlApi,
    apiUrl,
  };
};
