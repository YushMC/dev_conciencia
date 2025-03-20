import { defineNuxtPlugin } from "nuxt/app";
import { setupCalendar, DatePicker, Calendar } from "v-calendar";
import "v-calendar/dist/style.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(setupCalendar, {});
  nuxtApp.vueApp.component("DatePicker", DatePicker);
  nuxtApp.vueApp.component("VCalendar", Calendar);
});
