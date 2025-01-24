<template>
  <main class="container_dashboard_eventos">
    <div class="container_search">
      <div class="search_bar">
        <input type="text" />
        <img src="/assets/gui/search_icon.svg" alt="" />
      </div>
    </div>

    <div class="dashboard_eventos" v-if="dataEventos.length">
      <article v-for="evento in dataEventos" :key="evento.id" class="active">
        <div class="container_flayer">
          <img :src="evento.flyer" alt="" />
        </div>
        <div class="container_text_evento">
          <hr class="bg_color_secundario" />
          <h2 class="titulo text_color_secundario">Descripción General</h2>
          <p>
            {{ evento.description }}
          </p>
          <h4 class="text_color_secundario">
            {{ checkStatus(evento.id_experience_status) }}
          </h4>
          <NuxtLink :to="'/experiencias/' + evento.slug">Ver Más</NuxtLink>
        </div>
      </article>
    </div>
    <div class="cargando" v-else>
      <loader></loader>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHead } from "unhead";
import { onMounted, onBeforeMount } from "vue";

const { dataEventos } = useApiEventos();

onMounted(() => {
  useHead({
    title: "Eventos",
    meta: [
      {
        name: "description",
        content: "Página de inicio de Conciencia del Ser Divino",
      },
      { property: "og:title", content: "Inicio - Conciencia del Ser Divino" },
      {
        property: "og:description",
        content: "Somos Conciencia del Ser Divino",
      },
      { property: "og:url", content: "https://www.ejemplo.com/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@ConcienciaDelSerDivino" },
      { property: "article:publisher", content: "https://www.facebook.com/" },
    ],
  });
});

const checkStatus = (status: number) => {
  switch (status) {
    case 1:
      return "Próximamente";
    case 2:
      return "En Curso";
    case 3:
      return "Finalizado";
    default:
      console.warn("Estado no definido:", status);
      return "No definido";
  }
};
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
.cargando {
  height: 40dvh;
}

article {
  width: 20dvw;
  height: fit-content;
  padding: 2%;
  display: flex;
  gap: 2rem;
  flex-direction: column;
  scrollbar-width: none;
  border-radius: 10px;
  background: #ffffff8e;
  backdrop-filter: blur(10px);

  transition: all 0.3s linear;
}
article.termninated {
  opacity: 0.5;
}
article.active {
  border: solid 2px #b47f4a;
}
article:hover {
  transform: scale(1.05);
  box-shadow: 0px 0px 40px 1px rgba(0, 0, 1, 0.301);
}
article .container_flayer {
  width: 100%;
  height: 60%;
}
.container_flayer img {
  width: 100%;
  height: 40dvh;
  aspect-ratio: 16/9;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
}
.container_text_evento {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.container_text_evento h2 {
  font-size: 1.5rem;
}
.container_text_evento p {
  font-size: 0.8rem;
  margin-bottom: 4%;
}
.card_slide img {
  width: 100%;
  height: 100%;
  aspect-ratio: 9/16;
  object-fit: cover;
  object-position: center;
}
hr {
  margin: 3% 0;
  opacity: 0.5;
}
article h2 {
  text-align: left;
}
p {
  color: #000;
  line-height: 1.5;
  margin: 2% 0;
}
article a {
  width: 50%;
  font-size: 1.25rem;
  align-self: flex-start;
  border: #b47f4a solid 2px;
  padding: 1% 2%;
  border-radius: 10px;
  transition: all 0.3s linear;
  text-align: center;
}
article:hover a {
  width: 100%;
  background: #b47f4a;
  color: #fff;
}

article:hover a:hover {
  transform: scale(1.05);
}
@media screen and (max-width: 600px) {
  .dashboard_eventos {
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
  .container_eventos {
    width: 100%;
    height: 30dvh;

    padding: 0;
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
    height: 80dvh;
  }
  article .container_flayer {
    width: 70dvw;
  }
}
</style>
