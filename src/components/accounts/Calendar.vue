<template>
  <div>
    <client-only>
      <FullCalendar :options="calendarOptions" />
    </client-only>
    <div
      v-if="showMenu"
      class="custom-menu"
      :style="{
        top: `${menuPosition.y}px`,
        left: `${menuPosition.x}px`,
      }"
    >
      <div>
        <strong>Opciones para el {{ selectedDate }}</strong>
      </div>
      <ul>
        <li @click="handleOption('Opción 1')" v-if="isActiveButtonReserv">
          Reservar
        </li>
        <li @click="handleOption('Opción 2')">Ver Detalles</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount } from "vue";
import Swal from "sweetalert2";

const { apiUrl } = useApiUrl();
const { token } = useInfoUser();

// calendario
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import esLocale from "@fullcalendar/core/locales/es";

const selectedDate = ref<string | null>(null);
const showMenu = ref(false);
const menuPosition = ref<{ x: number; y: number }>({ x: 0, y: 0 });
const isActiveButtonReserv = ref(false);

const events = ref([
  {
    title: "Terminado",
    date: "2024-12-11",
    display: "background",
    backgroundColor: "rgba(0, 0, 0, 1)",
    icono: "✔️",
  },
  {
    title: "Terminado",
    date: "2024-12-26",
    display: "background",
    backgroundColor: "rgba(0, 0, 0, 1)",
    icono: "✔️",
  },
  {
    title: "Terminado",
    date: "2025-01-11",
    display: "background",
    backgroundColor: "rgba(0, 0, 0, 1)",
    icono: "✔️",
  },
  {
    title: "Terminado",
    date: "2025-01-12",
    display: "background",
    backgroundColor: "rgba(0, 0, 0, 1)",
    icono: "✔️",
  },
  {
    title: "Proximamente",
    date: "2025-01-20",
    display: "background",
    backgroundColor: "rgba(0, 0, 255, 1)",
    icono: "➡️",
  },
]);

// Opciones del calendario
const calendarOptions = ref({
  plugins: [dayGridPlugin, interactionPlugin],
  locale: esLocale, // Establecer el idioma español
  initialView: "dayGridMonth",
  events: events.value,
  eventContent: (arg: any) => {
    // Asegúrate de que `icono` esté presente y se accede correctamente
    const icon = arg.event.extendedProps.icono || ""; // Aquí garantizamos que "icono" esté definido
    return {
      html: `<span class="custom-event-title">
        <span>${arg.event.title}</span>
        <span class="event-icon">${icon}</span>  <!-- Renderizamos el ícono aquí -->
      </span>`,
    };
  },
  dateClick: (info: any) => {
    // Al hacer clic en una fecha, mostrar el menú
    selectedDate.value = info.dateStr; // Guardamos la fecha seleccionada
    menuPosition.value = {
      x: info.jsEvent.pageX - 300,
      y: info.jsEvent.pageY - 200,
    }; // Obtenemos la posición del clic
    showMenu.value = true; // Mostramos el menú

    // Buscar el evento que coincide con la fecha seleccionada
    const event = events.value.find((event) => event.date === info.dateStr);

    // Verificar si el evento fue encontrado y comparar el título
    if (event && event.title === "Proximamente") {
      isActiveButtonReserv.value = true; // Mostrar el botón si el título no es "Proximamente"
    } else {
      isActiveButtonReserv.value = false; // No mostrar el botón si el título es "Proximamente"
    }
  },
});

const handleOption = (option: string) => {
  showMenu.value = false; // Ocultamos el menú después de seleccionar una opción
};

const fetchEventosUser = async () => {
  const { data, error, pending } = await useFetch(
    apiUrl.value + "/meditator/experiences/filter",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: `${token}`,
      },
    }
  );

  watchEffect(() => {
    if (error.value) {
      console.error(error.value);
      Swal.fire({
        icon: "error",
        title: "Ocurrió un error: ",
        text: error.value.toString(),
      });
    }
    if (data.value) {
      Swal.fire({
        icon: "success",
        title: "Datos encontrados: ",
      });
      console.log("Datos encontrados: " + data.value);
    }
  });
};
// fetchEventosUser();
</script>

<style scoped>
.custom-menu {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
  width: 200px;
  font-size: 14px;
}

.custom-menu ul {
  list-style: none;
  padding: 0;
}

.custom-menu li {
  padding: 8px;
  cursor: pointer;
}

.custom-menu li:hover {
  background-color: #f0f0f0;
}
</style>
