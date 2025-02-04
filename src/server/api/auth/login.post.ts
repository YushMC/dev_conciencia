import { defineEventHandler, readBody, setCookie } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { token } = body; // El backend devuelve el JWT

  if (!token) {
    return { status: 401, message: "No autorizado" };
  }

  // Guardar el JWT en una cookie HttpOnly
  setCookie(event, "auth_token", token, {
    httpOnly: true,
    // secure: process.env.NODE_ENV === 'production',
    secure: true,
    sameSite: true,
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return { success: true };
});
