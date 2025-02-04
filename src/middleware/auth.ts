export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return; // ⚠️ Evitar errores en SSR

  // 🟢 Hacer una petición al servidor para verificar la autenticación
  /*
  const { data } = await useFetch("/api/auth/user");

  if (!data.value?.authenticated) {
    return navigateTo("/"); // Redirigir si no está autenticado
  }
    */
  return navigateTo("/"); // Redirigir si no está autenticado
});
