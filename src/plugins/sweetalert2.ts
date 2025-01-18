import Swal from "sweetalert2";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide("swal", Swal); // Proporciona SweetAlert2 como un objeto global
});
