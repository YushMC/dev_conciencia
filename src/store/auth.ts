import { defineStore } from "pinia";

import Swal from "sweetalert2";

const api: string = "http://192.168.1.173/conciencia-api/public/api/meditator";

interface LoginResponse {
  token: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
  }),

  actions: {
    async login(meditator: any) {
      try {
        Swal.fire({
          title: "Iniciando Sesión...",
          text: "Por favor espera...",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        const body = new URLSearchParams();
        body.append("user", meditator.user);
        body.append("pass", meditator.password);

        const { data, error } = await useFetch<LoginResponse>(api + "/login", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body,
        });

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Error al iniciar sesión.",
          });
          return;
        }

        if (data.value) {
          this.token = data.value.token;
          localStorage.setItem("token", this.token);
          Swal.fire({
            title: "Bienvenido!",
            icon: "success",
            text: "Inicio de sesión exitoso!",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error en el login.",
        });
      }
    },

    async register(meditator: any, photoFile: File | null) {
      try {
        Swal.fire({
          title: "Registrando Usuario...",
          text: "Por favor espera mientras procesamos tu solicitud.",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: () => {
            Swal.showLoading();
          },
        });

        const formData = new FormData();
        formData.append("pass", meditator.password);
        formData.append("name", meditator.name);
        formData.append("email", meditator.email);
        formData.append("phone", meditator.phone);
        if (photoFile) formData.append("photo", photoFile); // Adjuntar imagen si hay
        formData.append("city", meditator.city);
        formData.append("state", meditator.state);
        formData.append("birthdate", meditator.birthdate);

        const { data, error } = await useFetch<LoginResponse>(
          api + "/register",
          {
            method: "POST",
            body: formData,
            headers: { Accept: "application/json" },
          }
        );

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "Error al registrar el usuario: " +
              JSON.stringify(error.value.data.message),
          });
          return;
        }

        if (data.value) {
          this.token = data.value.token;
          localStorage.setItem("token", data.value.token);
          Swal.fire({
            title: "Registro Exitoso!",
            icon: "success",
            text: "Tu cuenta ha sido creada correctamente.",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al registrar usuario.",
        });
      }
    },

    async update(meditator: any, token: string) {
      try {
        Swal.fire({
          title: "Actualizando Datos...",
          text: "Por favor espera mientras procesamos tu solicitud.",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: async () => {
            Swal.showLoading();
          },
        });

        const body = JSON.stringify({
          name: meditator.name,
          email: meditator.email,
          phone: meditator.phone,
          birthdate: meditator.birthdate,
        });

        const { data, error } = await useFetch<LoginResponse>(api + "/update", {
          method: "PUT",
          body,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `${token}`,
          },
        });
        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "Error al actualizar el usuario: " +
              JSON.stringify(error.value.data.message),
          });
          return;
        }

        if (data.value) {
          Swal.fire({
            title: "Actualización Exitosa!",
            icon: "success",
            text: "Tu cuenta ha sido actualizada correctamente.",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al actualizar usuario.",
        });
      }
    },

    async updatePhoto(photoFile: File, token: string) {
      try {
        Swal.fire({
          title: "Actualizando Foto...",
          text: "Por favor espera mientras procesamos tu solicitud.",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: async () => {
            Swal.showLoading();
          },
        });

        const formData = new FormData();
        formData.append("photo", photoFile);

        const { data, error } = await useFetch<LoginResponse>(
          api + "/updatePhoto",
          {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
              Authorization: `${token}`,
            },
          }
        );

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "Error al actualizar la foto: " +
              JSON.stringify(error.value.data.message),
          });
          return;
        }

        if (data.value) {
          Swal.fire({
            title: "Actualización Exitosa!",
            icon: "success",
            text: "Tu foto ha sido actualizada correctamente.",
          });
        }
      } catch (err) {}
    },

    async updatePsw(meditator: any, newPass: string, token: string) {
      try {
        Swal.fire({
          title: "Actualizando Contraseña...",
          text: "Por favor espera mientras procesamos tu solicitud.",
          allowOutsideClick: false,
          showConfirmButton: false,
          didOpen: async () => {
            Swal.showLoading();
          },
        });

        const formData = new FormData();
        formData.append("pass", newPass);
        formData.append("old_pass", meditator.password);

        const { data, error } = await useFetch(api + "/changePsw", {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
            Authorization: `${token}`,
          },
        });

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text:
              "Error al actualizar la contraseña: " +
              JSON.stringify(error.value.data.message),
          });
          return;
        }

        if (data.value) {
          Swal.fire({
            title: "Actualización Exitosa!",
            icon: "success",
            text: "Tu contraseña ha sido actualizada correctamente.",
          });
        }
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al actualizar contraseña.",
        });
      }
    },

    logout() {
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
