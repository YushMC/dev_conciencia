import { defineStore } from "pinia";
import { Meditator } from "./meditator";

import Swal from "sweetalert2";

interface LoginResponse {
  token: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
  }),

  actions: {
    async login(meditator: Meditator) {
      try {
        Swal.fire({
          title: "Iniciando Sesión...",
          text: "Por favor espera mientras procesamos tu solicitud.",
          allowOutsideClick: false, // No permitir cerrar el alert al hacer clic fuera
        });
        const body = new URLSearchParams();
        body.append("user", meditator.user /* || tel */);
        body.append("pass", meditator.password);

        const { data, error } = await useFetch<LoginResponse>(
          "http://192.168.1.162/conciencia-api/public/api/meditator/login",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body,
          }
        );

        Swal.close();
        if (error.value) {
          console.error(error.value);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Ocurrio un error al iniciar sesión",
          });
        }
        if (data.value) {
          this.token = data.value.token;
          localStorage.setItem("token", this.token);
          // Redirigir a la ruta principal "/"
          Swal.fire({
            title: "Bienvenido!",
            icon: "success",
            text: "Es grato tenerte de vuelta!",
          });
        }
      } catch (err) {
        console.error("Error en login:", err);
        // Mostrar una alerta con el mensaje de error
        window.alert("Credenciales incorrectas: " + err);
      }
    },

    async register(meditator: Meditator, photoFile: File) {
      try {
        Swal.fire({
          title: "Registrando Usuario...",
          text: "Por favor espera mientras procesamos tu solicitud.",
          allowOutsideClick: false, // No permitir cerrar el alert al hacer clic fuera
        });
        const formData = new FormData();
        formData.append("pass", meditator.password);
        formData.append("name", meditator.name);
        formData.append("email", meditator.email);
        formData.append("phone", meditator.phone);
        if (photoFile) formData.append("photo", photoFile); // Verificamos si existe el archivo
        formData.append("city", meditator.city);
        formData.append("state", meditator.state);
        formData.append("birthdate", meditator.birthdate);

        const { data, error } = await useFetch<LoginResponse>(
          "http://192.168.1.162/conciencia-api/public/api/meditator/register",
          {
            method: "POST",
            body: formData, // Se envía directamente como FormData
            headers: {
              Accept: "aplication/json",
            },
          }
        );
        Swal.close();

        if (error.value) {
          console.error("Error en la solicitud:", error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "Ocurrio un error al crear el usuario" +
              JSON.stringify(error.value.data.message),
          });
          return;
        }

        if (data.value) {
          localStorage.setItem("token", data.value.token);
          Swal.fire({
            title: "Bienvenido!",
            icon: "success",
            text: "Usuario creado correctamente.",
          });
          // Redirigir a la ruta principal "/"
        }
      } catch (err) {
        console.error("Error al crear el usuario:", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Ocurrio un error al crear el usuario" + err,
        });
      }
    },
    /* 
    async fetchUser() {
      try {
        const { data, error } = await useFetch<LoginResponse>(
          "/api/meditator/register",
          {
            headers: {
              Authorization: `Bearer ${this.token}`,
            },
          }
        );

        if (error.value) throw new Error("No se pudo obtener el usuario");

        if (data.value) {
          this.user = data.value;
        }
      } catch (err) {
        console.error("Error obteniendo usuario:", err);
      }
    },
    */

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
