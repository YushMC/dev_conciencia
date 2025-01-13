import { ref } from "vue";

export const useInfoUser = () => {
  const isLogin = ref<boolean>(false);

  const toggleStateLogin = () => {
    isLogin.value = !isLogin.value;
  };

  return {
    isLogin,
    toggleStateLogin,
  };
};
