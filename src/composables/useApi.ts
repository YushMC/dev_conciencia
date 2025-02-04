import { ref } from "vue";

const apiUrl = ref("");

export const useApiUrl = () => {
  const setUrlApi = (url: string) => {
    apiUrl.value = url;
  };
  return {
    setUrlApi,
    apiUrl,
  };
};
