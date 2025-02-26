export default defineNuxtRouteMiddleware(async (to, from) => {
  if (process.server) return; // ⚠️ Evitar errores en SSR

  // 🟢 Hacer una petición al servidor para verificar la autenticación

  const { data } = await useFetch("/api/auth/user");

  if (!data.value?.authenticated) {
    return navigateTo("/login"); // Redirigir si no está autenticado
  }
  // 🔴 Evitar redirección infinita si ya está en "/cuenta"
  if (to.path !== "/cuenta") {
    return navigateTo("/cuenta");
  }
});
