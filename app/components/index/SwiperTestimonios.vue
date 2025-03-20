<script setup lang="ts">
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
</script>

<template>
  <section id="Testimonios">
    <div class="container_titulos" id="Eventos-Privados">
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
      <swiper-slide>
        <div class="card_slide_testimonio">
          <div class="container_img">
            <img src="/assets/img_profiles/1.jpeg" alt="" />
            <div class="container_icon_video">
              <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
            </div>
          </div>
          <div class="container_testimonio">
            <h3><b>Fernanda</b></h3>
            <p>
              El pasar por un par de meditaciones me ayudo a procesar más mis
              emociones, a entender los momentos en el que día a día, la rutina
              y demás fugaban mi energía, y ayudarme a tener la fortaleza para
              no ceder ante eso. Tambien me ayudó a llevar un mejor control
              sobre mis horarios de sueño y el darme el derecho a un descanso
              entender la importancia de saber escuchar a mi cuerpo y mis
              necesidades, y atenderlas de manera equilibrada.
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card_slide_testimonio">
          <div class="container_img">
            <img src="/assets/img_profiles/2.jpeg" alt="" />
            <div class="container_icon_video">
              <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
            </div>
          </div>
          <div class="container_testimonio">
            <h3><b>Ana</b></h3>
            <p>
              La práctica regular de la meditación me ayudó a darme cuenta de
              que la medicina más poderosa que poseemos es nuestro propio
              cuerpo. Lo importante es saber actuar en el momento presente, sin
              importar cuántas veces nos preparemos o ensayemos, si no aplicamos
              lo aprendido aquí y ahora Esto me ha permitido estar más presente
              y consciente de mis acciones, lo cual ha mejorado mi calidad de
              vida y mi bienestar general.
            </p>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="card_slide_testimonio">
          <div class="container_img">
            <img src="/assets/img_profiles/3.jpeg" alt="" />
            <div class="container_icon_video">
              <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
            </div>
          </div>
          <div class="container_testimonio">
            <h3><b>Gaspar</b></h3>
            <p>
              Conciencia del ser divino fue una herramienta que me ayudó a abrir
              la puerta que mantenemos cerrada cada uno de nosotros, y que me
              hizo entender que el aquí y el ahora es el momento perfecto para
              empezar a vivir, para empezar a conectarse con tu propio amor, con
              tus responsabilidades, y darte cuenta que es posible vivir la
              aventura de la vida, y entender que a pesar de las adversidades,
              cada uno tiene la fuerza de hacer magnifica la vida, solo es
              cuestión de que creerlo, saber que podemos hacerlo.
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
  width: 3dvw;
  right: 1rem;
  bottom: 0;
  background: #ffffffa2;
  backdrop-filter: blur(5px);
  border-radius: 100%;
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
