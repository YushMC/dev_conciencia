<template>
  <main class="container_dashboard_eventos">
    <div class="container_search">
      <h2 class="titulo text_color_principal">Próximas Experiencias</h2>
    </div>

    <ClientOnly>
      <div class="dashboard_eventos" v-if="dataEventos.length">
        <article
          v-for="evento in dataEventos"
          :key="evento.id"
          class="active"
          @click=""
        >
          <div class="container_flayer">
            <img
              :src="evento.flyer"
              alt="Flyer Experiencia"
              loading="lazy"
              @click="router.push('/experiencias/' + evento.slug)"
            />
          </div>
        </article>
      </div>
      <div class="cargando" v-else>
        <loader></loader>
      </div>
    </ClientOnly>
  </main>
</template>

<script setup lang="ts">
import { useHead } from "unhead";
import { useRouter } from "vue-router";

const router = useRouter();
import { onMounted, onBeforeMount } from "vue";

const { dataEventos } = useApiEventos();

const { isResponsiveMenu } = useMainHeader();

isResponsiveMenu.value = false;
onMounted(() => {
  useHead({
    title: "Experiencias",
    meta: [
      {
        name: "description",
        content: "Todas las experiencias que esperan tu llegada!",
      },
      {
        property: "og:title",
        content: "Experiencias - Conciencia del Ser Divino",
      },
      {
        property: "og:description",
        content: "Hecha un vistazo a nuestras próximas experiencias!",
      },
      { property: "og:url", content: "https://www.ejemplo.com/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/assets/logo.jpeg" },
    ],
  });
});
</script>

<style scoped>
.container_dashboard_eventos {
  width: 100%;
  position: relative;
  padding: 100px 10%;
  background: #fcf7f3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 50;
}

.container_search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #b47f4a;
}
.search_bar {
  position: relative;
  width: 30dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
}
.search_bar input {
  width: 100%;
  padding: 2%;
  padding-left: 2.5rem;
  outline: none;
  border-radius: 10px;
  border: none;
  background: #b47f4a27;
  font-size: 1.5rem;
}
.search_bar img {
  width: 1.3dvw;
  position: absolute;
  top: 1.5dvh;
  left: 1%;
}
.dashboard_eventos {
  width: 100%;
  height: fit-content;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

article {
  width: 20dvw;
  height: fit-content;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  scrollbar-width: none;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background: none;
  transition: all 0.3s linear;
}
article.termninated {
  opacity: 0.5;
}
article:hover {
  transform: scale(1.05);
}
article .container_flayer {
  width: 100%;
  height: 100%;
}
.container_flayer img {
  width: 100%;
  border-radius: 10px;
  aspect-ratio: 1/1;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  filter: drop-shadow(1px 1px 6px #00000081);
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .container_dashboard_eventos {
    position: relative;
    display: flex;
    flex-direction: column;
    height: fit-content !important;
  }
  .search_bar {
    width: 100%;
  }
  .search_bar img {
    width: 6dvw;
    top: 8px;
  }

  aside {
    height: 10dvh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0% 5%;
  }
  .dashboard_eventos {
    display: flex;
    flex-direction: column;
    padding: 0 !important;
    margin: 0 !important;
    align-items: start;
  }
  .container_cards_eventos {
    height: 90%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem !important;
  }
  .card_evento {
    width: 100%;
    height: 20dvh !important;
  }
  .card_evento img {
    width: 100%;
    height: 100%;
  }
  .card_evento:hover {
    transform: scale(0.9) translateX(0px) !important;
  }
  article {
    width: 100%;
    height: fit-content;
  }
  article .container_flayer {
    width: 100%;
  }
}
</style>
