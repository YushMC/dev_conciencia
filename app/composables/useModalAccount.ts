import { ref } from "vue";

const isActiveModal = ref<boolean>(false);

const toogleStateModal = () => {
  isActiveModal.value = !isActiveModal.value;
};

export const useModalAccount = () => {
  return {
    isActiveModal,
    toogleStateModal,
  };
};
