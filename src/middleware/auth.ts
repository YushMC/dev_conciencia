export default defineNuxtRouteMiddleware((to, from) => {
  if (process.server) return; // ⚠️ Evitar errores en SSR

  const token = localStorage.getItem("token"); // Obtener token de LocalStorage

  if (!token) {
    return navigateTo("/login"); // Redirigir si no hay token
  }
});
