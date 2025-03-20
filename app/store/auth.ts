import { defineStore } from "pinia";

import Swal from "sweetalert2";

interface LoginResponse {
  token: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: null as string | null,
    api: null as string | null,
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
        body.append("user", meditator.phone);
        body.append("pass", meditator.password);

        const { data, error } = await useFetch<LoginResponse>(
          this.api + "/meditator/login",
          {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
          }
        );

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `
          <h3>Ocurrió un error al iniciar sesión:</h3>`,
          });
          return { success: false };
        }

        if (data.value) {
          this.token = data.value.token;

          // 🟢 Enviar el token a Nuxt para guardarlo en una cookie HttpOnly
          await useFetch("/api/auth/login", {
            method: "POST",
            body: { token: this.token },
          });

          Swal.fire({
            title: "Bienvenido!",
            icon: "success",
            text: "Inicio de sesión exitoso!",
          });
          return { success: true };
        }
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `
          <h3>Ocurrió un error al iniciar sesión:</h3>
            `,
        });
        return { success: false };
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
          this.api + "/meditator/register",
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
            html: `<h3>Error al registrar:</h3>
              <br><h5 style='color: red;'>${JSON.stringify(
                error.value.data.message
              )}</h5>`,
          });
          return { success: false };
        }

        if (data.value) {
          this.token = data.value.token;
          // 🟢 Enviar el token a Nuxt para guardarlo en una cookie HttpOnly
          await useFetch("/api/auth/login", {
            method: "POST",
            body: { token: this.token },
          });
          Swal.fire({
            title: "Registro Exitoso!",
            icon: "success",
            text: "Tu cuenta ha sido creada correctamente.",
          });
          return { success: true };
        }
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<h3>Error al registrar:</h3>
              <br><h5 style='color: red;'>${err.message}</h5>`,
        });
        return { success: true };
      }
    },

    async update(meditator: any) {
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

        const tokenResponse = await $fetch<{
          authenticated: boolean;
          token?: string;
        }>("/api/auth/user", {
          method: "GET",
          credentials: "include", // Asegura que se envíen cookies
        });

        if (!tokenResponse.authenticated || !tokenResponse.token) {
          Swal.close();
          return { success: false, message: "No estás autenticado" };
        }

        this.token = tokenResponse.token;

        const body = JSON.stringify({
          name: meditator.name,
          email: meditator.email,
          phone: meditator.phone,
          birthdate: meditator.birthdate,
        });

        const { data, error } = await useFetch<LoginResponse>(
          this.api + "/meditator/update",
          {
            method: "PUT",
            body,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `${this.token}`,
            },
          }
        );
        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `<h3>Error al actualizar la información:</h3>
              <br><h5 style='color: red;'>${JSON.stringify(
                error.value.data.message
              )}</h5>`,
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
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<h3>Error al actualizar la información:</h3>
              <br><h5 style='color: red;'>${err.message}</h5>`,
        });
      }
    },

    async updatePhoto(photoFile: File) {
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

        const tokenResponse = await $fetch<{
          authenticated: boolean;
          token?: string;
        }>("/api/auth/user", {
          method: "GET",
          credentials: "include", // Asegura que se envíen cookies
        });

        if (!tokenResponse.authenticated || !tokenResponse.token) {
          Swal.close();
          return { success: false, message: "No estás autenticado" };
        }

        this.token = tokenResponse.token;

        const formData = new FormData();
        formData.append("photo", photoFile);

        const { data, error } = await useFetch<LoginResponse>(
          this.api + "/meditator/updatePhoto",
          {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
              Authorization: `${this.token}`,
            },
          }
        );

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `<h3>Error al actualizar la foto:</h3>
              <br><h5 style='color: red;'>${JSON.stringify(
                error.value.data.message
              )}</h5>`,
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
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<h3>Error al actualizar la foto:</h3>
              <br><h5 style='color: red;'>${err.message}</h5>`,
        });
      }
    },

    async updatePsw(meditator: any, newPass: string) {
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

        const tokenResponse = await $fetch<{
          authenticated: boolean;
          token?: string;
        }>("/api/auth/user", {
          method: "GET",
          credentials: "include", // Asegura que se envíen cookies
        });

        if (!tokenResponse.authenticated || !tokenResponse.token) {
          Swal.close();
          return { success: false, message: "No estás autenticado" };
        }

        this.token = tokenResponse.token;

        const formData = new FormData();
        formData.append("pass", newPass);
        formData.append("old_pass", meditator.password);

        const { data, error } = await useFetch(
          this.api + "/meditator/changePsw",
          {
            method: "POST",
            body: formData,
            headers: {
              Accept: "application/json",
              Authorization: `${this.token}`,
            },
          }
        );

        Swal.close();

        if (error.value) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            html: `<h3>Error al actualizar la contraseña:</h3>
              <br><h5 style='color: red;'>${JSON.stringify(
                error.value.data.message
              )}</h5>`,
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
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          html: `<h3>Error al actualizar la contraseña:</h3>
              <br><h5 style='color: red;'>${err.message}</h5>`,
        });
      }
    },

    async logout() {
      this.token = null; // Eliminar el token en el estado de Pinia

      // 🟢 Hacer una petición al backend para borrar la cookie HttpOnly
      await useFetch("/api/auth/logout", {
        method: "POST",
      });

      navigateTo("/login"); // Redirigir al usuario después del logout
    },

    async setUrlApi(url: string) {
      this.api = url;
    },
  },
});
