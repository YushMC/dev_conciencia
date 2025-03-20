import { ref } from "vue";

const isActive = ref(false); // Compartido entre todas las instancias
const toggleStateHeader = () => {
  isActive.value = !isActive.value;
};

export const useHeaderAccount = () => {
  return {
    isActive,
    toggleStateHeader,
  };
};
