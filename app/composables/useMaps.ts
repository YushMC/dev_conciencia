import { ref } from "vue";

const isLoadMap = ref(false);

export const useMaps = () => {
  return {
    isLoadMap,
  };
};
