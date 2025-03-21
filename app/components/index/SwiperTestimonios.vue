<script setup lang="ts">
import type { Meditador } from "./../../types/Meditador";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// Opcionales: módulos para Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Configuración de breakpoints
const breakpoints = {
  900: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  1400: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
};

interface Testimonials {
  id: number;
  id_meditator: number;
  comments: string;
  photo: string;
  video: string;
  is_authorized: boolean;
  authorized_by: number;
  active: boolean;
  meditator?: Meditador;
}

const listTestimonios = ref<Testimonials[] | null>(null);

const props = defineProps({
  slug: String,
});

onBeforeMount(async () => {
  const config = useRuntimeConfig();
  const fetchTestimonios = async (slug: string) => {
    try {
      const response = await $fetch<{
        message: string;
        testimonials: Testimonials[];
      }>(config.public.apiUrl + slug);

      listTestimonios.value = response.testimonials;

      return { success: true, message: "Testimonios encontrados." };
    } catch (error) {
      return { success: false, message: "Ocurrio un error: " + error };
    }
  };

  const response = await fetchTestimonios(props.slug?.toString() ?? "");
  if (!response.success) {
    console.error(response.message);
  }
});
</script>

<template>
  <section id="Testimonios">
    <div
      class="container_titulos"
      id="Eventos-Privados"
      v-if="props.slug == '/testimony/all'"
    >
      <h2 class="titulo text_color_principal">¿Una Experiencia Privada?</h2>
      <a
        style="text-align: center"
        href="https://wa.me/526675813007?text=Hola!, Me gustaría saber más acerca de una Experiencia Privada!"
        target="_blank"
        >Saber Más</a
      >
    </div>
    <h2 class="titulo text_color_principal">Testimonios</h2>
    <hr class="bg_color_secundario" />
    <Swiper
      :modules="[Pagination, Navigation]"
      :grabCursor="true"
      :loop="true"
      :spaceBetween="10"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :navigation="true"
      :pagination="true"
      :breakpoints="breakpoints"
      class="mySwiper"
    >
      <swiper-slide v-for="(testimonio, index) in listTestimonios" :key="index">
        <div class="card_slide_testimonio">
          <div class="container_img" v-if="testimonio?.meditator">
            <img :src="testimonio.photo" :alt="testimonio?.meditator.name" />
            <div class="container_icon_video">
              <a :href="testimonio.video" title="Ver testimonio" target="_blank"
                ><img src="/assets/icon_play.svg" alt="Icono Play Testimonio"
              /></a>
            </div>
          </div>
          <div class="container_testimonio">
            <h3 v-if="testimonio?.meditator">
              <b>{{ testimonio.meditator.name }}</b>
            </h3>
            <p>
              {{ testimonio.comments }}
            </p>
          </div>
        </div>
      </swiper-slide>
    </Swiper>
  </section>
</template>

<style scoped>
section {
  position: relative;
  width: 100%;
  padding: 20dvh 10%;
}

@media screen and (max-width: 600px) {
  section {
    padding: 10dvh 10% !important;
  }
}

#Testimonios .swiper-slide {
  height: fit-content !important;
  display: flex !important;
}
#Testimonios .titulo:nth-child(2) {
  margin-top: -5%;
  margin-bottom: 2%;
}
.card_slide_testimonio {
  margin: auto;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.card_slide_testimonio .container_img {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
}
.card_slide_testimonio .container_img > img {
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 100%;
}
.card_slide_testimonio .container_img .container_icon_video {
  position: absolute;
  width: 4rem;
  right: 1rem;
  bottom: 0;
  background: #ffffffa2;
  backdrop-filter: blur(5px);
  border-radius: 100%;
}

.card_slide_testimonio .container_img .container_icon_video a {
  width: 100%;
}
.card_slide_testimonio .container_img .container_icon_video a img {
  width: 100%;
}
.card_slide_testimonio .container_testimonio {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  height: 18rem;
}
.card_slide_testimonio .container_testimonio h3,
.card_slide_testimonio .container_testimonio p {
  text-align: left;
}

.card_slide_testimonio .container_testimonio p {
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
