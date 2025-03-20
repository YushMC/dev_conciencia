const selectedPrice = ref<number>(1);
const showModalReserva = ref<boolean>(false);

export default function useModalReserve() {
  return {
    selectedPrice,
    showModalReserva,
  };
}
