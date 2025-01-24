import { ref } from "vue";
import { jwtDecode } from "jwt-decode";
import { Meditator } from "~/store/meditator";

const token = ref<string>("");
const meditator = ref(new Meditator()); // Hacer la instancia reactiva
const isLogged = ref<any>();

const useInfoUser = () => {
  const hydrate = () => {
    if (token.value) {
      try {
        const decoded = jwtDecode<Meditator>(token.value);
        // Asignar los valores del token decodificado a la instancia
        Object.assign(meditator.value, decoded);
        isLogged.value = true;
      } catch (error) {
        isLogged.value = false;
      }
    }
  };

  const setToken = (tokens: string) => {
    token.value = tokens;

    try {
      const decoded = jwtDecode<Meditator>(token.value);
      // Asignar los valores del token decodificado a la instancia
      Object.assign(meditator.value, decoded);
      isLogged.value = true;
    } catch (error) {
      isLogged.value = false;
    }
  };

  const removeToken = () => {
    token.value = "";
    localStorage.removeItem("token");
    Object.assign(meditator.value, new Meditator());
    isLogged.value = false;
  };

  // Hydrate the state when the composable is initialized
  hydrate();

  return {
    token,
    meditator,
    isLogged,
    setToken,
    removeToken,
    hydrate,
  };
};

export default useInfoUser;
