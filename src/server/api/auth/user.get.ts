import { defineEventHandler, getCookie } from "h3";

export default defineEventHandler((event) => {
  const token = getCookie(event, "auth_token");

  if (!token) {
    return { authenticated: false };
  }

  return { authenticated: true, token };
});
