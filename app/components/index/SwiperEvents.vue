<template>
  <ClientOnly>
    <section id="Proximos-Eventos" v-if="dataEventos.length > 0">
      <div class="container_titulos">
        <h2 class="titulo text_color_principal">Próximas Experiencias</h2>
      </div>

      <Swiper
        :modules="[Pagination, Navigation, Autoplay]"
        :spaceBetween="10"
        :slidesPerView="1"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :navigation="true"
        :pagination="true"
        :breakpoints="breakpoints"
        class="mySwiper"
      >
        <swiper-slide v-for="(evento, index) in dataEventos" :key="index">
          <NuxtLink :to="`/experiencias/${evento?.slug}`" class="card_slide">
            <img :src="evento?.flyer" alt="" loading="lazy" />
          </NuxtLink>
        </swiper-slide>
      </Swiper>
    </section>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const { dataEventos } = useApiEventos();

const breakpoints = {
  900: { slidesPerView: 1, spaceBetween: 20 },
  1280: { slidesPerView: 2, spaceBetween: 30 },
  1400: { slidesPerView: 3, spaceBetween: 40 },
};
</script>

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
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  /* Center slide text vertically */
  display: flex;
  height: fit-content !important;
}
.swiper-pagination {
  position: relative !important;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
