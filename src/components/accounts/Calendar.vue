<template>
  <div id="calendario">
    <client-only>
      <VCalendar
        expanded
        :attributes="calendarAttributes"
        v-model="currentDate"
        borderless
        @dayclick="handleDayClick"
        :navigation="true"
      />
    </client-only>
    <h3>Fecha seleccionada: {{ currentDate }}</h3>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { Navigation } from "swiper/modules";

const handleDayClick = (event: { date: Date }) => {
  const selectedDateValue = event.date; // Accede a la propiedad `date`
  currentDate.value = selectedDateValue.toISOString().split("T")[0]; // Formato YYYY-MM-DD
};

const currentDate = ref<any>(new Date().toISOString().split("T")[0]);

const calendarAttributes = ref<any[]>([]); // Atributos para el calendario

// Obtén las URL y el token desde los composables
const { apiUrl } = useApiUrl();
const { token } = useInfoUser();

// Obtiene los eventos desde la API
const fetchEventosUser = async () => {
  try {
    const { data, error } = await useFetch(
      `${apiUrl.value}/meditator/experiences/filter`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          Authorization: `${token.value}`,
        },
      }
    );

    if (error.value) {
      throw new Error(error.value.message);
    }
    const year = ref();
    const month = ref();
    const day = ref();
    // Configura calendarAttributes directamente con los datos del fetch
    calendarAttributes.value = (
      (data.value as { history: any[] })?.history || []
    ).map((event: any) => {
      if (event.init_date) {
        const dateObj = new Date(event.init_date);
        if (!isNaN(dateObj.getTime())) {
          year.value = dateObj.getFullYear(); // Obtener el año
          month.value = dateObj.getMonth(); // Obtener el mes (0-11)
          day.value = dateObj.getDate(); // Obtener el día

          // Crear una nueva fecha en el formato deseado
        } else {
        }
      }

      return {
        key:
          year.value.toString() +
          "-" +
          month.value.toString() +
          "-" +
          day.value.toString(), // Usamos la fecha como clave única en formato YYYY-MM-DD
        bar: {
          style: {
            backgroundColor: "rgb(180, 127, 74)", // Color de fondo
          }, // Modo de relleno
        },
        dates: new Date(year.value, month.value, day.value), // Fecha del evento
        popover: {
          label: event.description ?? "Sin título", // Texto que se muestra al hacer hover
        },
      };
    });
  } catch (error) {}
};

// Carga los eventos cuando el componente se monta
onMounted(async () => {
  await fetchEventosUser();
});
</script>

<style scoped>
.custom-menu {
  position: absolute;
  background-color: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  z-index: 1000;
}

.custom-menu ul {
  list-style-type: none; /* Cambiado a tipo de lista sin estilo */
}

.custom-menu li {
  padding: 8px;
}

.custom-menu li:hover {
  background-color: #f0f0f0;
}
</style>
