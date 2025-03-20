import { ref } from "vue";

const isResponsiveMenu = ref(false);

export const useMainHeader = () => {
  return {
    isResponsiveMenu,
  };
};
