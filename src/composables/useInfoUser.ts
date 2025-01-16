import { ref } from "vue";

const isLogin = ref<boolean>(false);
const nameUser = ref<string>("Roberto");
const rolUser = ref<string>("Administrador");
const urlLogoUser = ref<string>("https://github.com/YushMC.png");
const contrasenaUser = ref<string>("1234567890");

const toggleStateLogin = () => {
  isLogin.value = !isLogin.value;
};

export const useInfoUser = () => {
  return {
    isLogin,
    nameUser,
    rolUser,
    urlLogoUser,
    contrasenaUser,
    toggleStateLogin,
  };
};
