import * as Driver from "driver.js";
import "driver.js/dist/driver.css";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      driver: Driver,
    },
  };
});
