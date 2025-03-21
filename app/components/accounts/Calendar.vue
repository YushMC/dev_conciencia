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
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
const router = useRouter();

const currentDate = ref<any>(new Date().toISOString().split("T")[0]);
const selectedEvent = ref<any>();

const handleDayClick = (event: { date: Date }) => {
  const selectedDateValue = event.date; // Accede a la propiedad `date`
  currentDate.value = selectedDateValue; // Formato YYYY-MM-DD

  // Busca si hay un evento para la fecha seleccionada
  selectedEvent.value = calendarAttributes.value.find((attr) => {
    if (!attr.dates || isNaN(new Date(attr.dates).getTime())) {
      console.warn("Fecha inválida en calendarAttributes:", attr.dates);
      return false;
    }
    const eventDate = new Date(attr.dates).toISOString().split("T")[0];
    return (
      eventDate === new Date(selectedDateValue).toISOString().split("T")[0]
    );
  });

  // Si hay un evento, redirige al slug correspondiente
  if (selectedEvent.value && selectedEvent.value.slug) {
    const cleanSlug = (slug: string) => {
      return slug.replace(/[^a-zA-Z0-9-]/g, ""); // Elimina caracteres no válidos
    };

    const slug = cleanSlug(selectedEvent.value.slug);

    const resolvedRoute = router.resolve(`/experiencias/${slug}`);
    router.push(resolvedRoute.fullPath);
  } else {
    Swal.fire({
      icon: "info",
      title: "Sin eventos",
      text: "No hay eventos para esta fecha.",
    });
  }
};

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

    // Función para validar fechas
    const parseDate = (dateStr: string) => {
      if (!dateStr) return null; // Si está vacío, retorna null
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) {
        console.error("Fecha inválida detectada:", dateStr);
        return null;
      }
      return date;
    };

    calendarAttributes.value = [
      ...((data.value as { history: any[] })?.history || []).map(
        (event: any) => {
          const dateObj = parseDate(event.init_date);
          return {
            key: dateObj ? dateObj.toISOString().split("T")[0] : "invalid-date",
            highlight: { color: "green", fillMode: "solid" },
            dates: dateObj || new Date(), // Evita fechas inválidas
            popover: { label: event.description || "Sin título" },
            slug: event.slug,
          };
        }
      ),

      ...((data.value as { news: any[] })?.news || []).map((event: any) => {
        const dateObj = parseDate(event.init_date);
        return {
          key: dateObj ? dateObj.toISOString().split("T")[0] : "invalid-date",
          highlight: { color: "green", fillMode: "outline" },
          dates: dateObj || new Date(),
          popover: { label: event.description || "Sin título" },
          slug: event.slug,
        };
      }),
    ];
  } catch (error) {
    console.error("Error en fetchEventosUser:", error);
  }
};

// Carga los eventos cuando el componente se monta

await fetchEventosUser();
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
