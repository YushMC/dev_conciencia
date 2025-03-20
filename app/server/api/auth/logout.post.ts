import { defineEventHandler, setCookie } from "h3";

export default defineEventHandler((event) => {
  // 🟢 Borrar la cookie `auth_token` estableciendo un `maxAge` negativo
  setCookie(event, "auth_token", "", {
    httpOnly: true,
    secure: true,
    sameSite: true,
    maxAge: -1, // 🔴 Esto elimina la cookie inmediatamente
    path: "/",
  });

  return { success: true };
});
