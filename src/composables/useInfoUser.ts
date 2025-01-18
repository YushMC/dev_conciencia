import { ref, computed } from "vue";
import { jwtDecode } from "jwt-decode";
import { Meditator } from "~/store/meditator";

const useInfoUser = () => {
  const token = ref("");

  const setToken = (tokens: any) => {
    token.value = tokens;
  };

  const decodedToken = computed<Meditator | null>(() => {
    if (!token.value) return null;
    try {
      return jwtDecode<Meditator>(token.value);
    } catch (error) {
      console.error("Error al decodificar el token", error);
      return null;
    }
  });

  const removeToken = () => {
    token.value = "";
    localStorage.removeItem("token");
  };
  return {
    decodedToken,
    removeToken,
    setToken,
  };
};

export default useInfoUser;
