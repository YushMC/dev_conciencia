<template>
  <main class="contenedor_pages">
    <Frontpage></Frontpage>

    <section id="Proximos-Eventos">
      <div class="container_titulos">
        <h2 class="titulo text_color_principal">Próximos Eventos</h2>
      </div>
      <Swiper
        :modules="[Pagination, Navigation, Autoplay]"
        :centeredSlides="true"
        :spaceBetween="30"
        :loop="true"
        :navigation="true"
        :pagination="true"
        :breakpoints="breakpoints2"
        class="mySwiper"
      >
        <swiper-slide>
          <div class="card_slide">
            <div class="container_icon"></div>
            <div class="container_info">
              <div class="info">
                <h4>Puebla</h4>
                <h2>$ 1,000 MXN</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  architecto ut tenetur, commodi laborum odio.
                </p>
              </div>
              <div class="container_buttons">
                <NuxtLink to="/eventos/evento">Más Información</NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card_slide">
            <div class="container_icon"></div>
            <div class="container_info">
              <div class="info">
                <h4>Puebla</h4>
                <h2>$ 1,000 MXN</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  architecto ut tenetur, commodi laborum odio.
                </p>
              </div>
              <div class="container_buttons">
                <NuxtLink to="/eventos/evento">Más Información</NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card_slide">
            <div class="container_icon"></div>
            <div class="container_info">
              <div class="info">
                <h4>Puebla</h4>
                <h2>$ 1,000 MXN</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  architecto ut tenetur, commodi laborum odio.
                </p>
              </div>
              <div class="container_buttons">
                <NuxtLink to="/eventos/evento">Más Información</NuxtLink>
              </div>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card_slide">
            <div class="container_icon"></div>
            <div class="container_info">
              <div class="info">
                <h4>Puebla</h4>
                <h2>$ 1,000 MXN</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  architecto ut tenetur, commodi laborum odio.
                </p>
              </div>
              <div class="container_buttons">
                <button>Más Información</button>
              </div>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </section>
    <section class="bg_color_principal" id="Nuestra-Escencia">
      <h2 class="titulo text_color_secundario">Nuestra Escencia</h2>
      <hr class="bg_color_secundario" />
      <div class="container_mails">
        <div class="mail">
          <div class="container_space"></div>
          <div class="container_info_mail">
            <h2>Misión</h2>
            <div class="container_sticker">
              <img src="/assets/logo_without_bg.png" alt="" />
            </div>
          </div>
          <div class="container_paper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              velit ratione enim, aliquid inventore veniam eum? Eveniet
              aspernatur assumenda non!
            </p>
          </div>
        </div>
        <div class="mail">
          <div class="container_space"></div>
          <div class="container_info_mail">
            <h2>Visión</h2>
            <div class="container_sticker">
              <img src="/assets/logo_without_bg.png" alt="" />
            </div>
          </div>
          <div class="container_paper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              velit ratione enim, aliquid inventore veniam eum? Eveniet
              aspernatur assumenda non!
            </p>
          </div>
        </div>
        <div class="mail">
          <div class="container_space"></div>
          <div class="container_info_mail">
            <h2>Valores</h2>
            <div class="container_sticker">
              <img src="/assets/logo_without_bg.png" alt="" />
            </div>
          </div>
          <div class="container_paper">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
              velit ratione enim, aliquid inventore veniam eum? Eveniet
              aspernatur assumenda non!
            </p>
          </div>
        </div>
      </div>
    </section>
    <section id="Testimonios">
      <div class="container_titulos" id="Eventos-Privados">
        <h2 class="titulo text_color_principal">¿Una sesión privada?</h2>
        <button>Saber Más</button>
      </div>
      <h2 class="titulo text_color_principal">Testimonios</h2>
      <hr class="bg_color_secundario" />
      <Swiper
        :modules="[Pagination, Navigation]"
        :grabCursor="true"
        :loop="true"
        :spaceBetween="30"
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
              <img src="/assets/img_profiles/1.jpg" alt="" />
              <div class="container_icon_video">
                <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
              </div>
            </div>
            <div class="container_testimonio">
              <h3><b>Nombre</b></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni, quod non quasi dignissimos magnam tempora quam
                minus illum dolores.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card_slide_testimonio">
            <div class="container_img">
              <img src="/assets/img_profiles/2.jpg" alt="" />
              <div class="container_icon_video">
                <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
              </div>
            </div>
            <div class="container_testimonio">
              <h3><b>Nombre</b></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni, quod non quasi dignissimos magnam tempora quam
                minus illum dolores.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card_slide_testimonio">
            <div class="container_img">
              <img src="/assets/img_profiles/3.jpg" alt="" />
              <div class="container_icon_video">
                <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
              </div>
            </div>
            <div class="container_testimonio">
              <h3><b>Nombre</b></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni, quod non quasi dignissimos magnam tempora quam
                minus illum dolores.
              </p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="card_slide_testimonio">
            <div class="container_img">
              <img src="/assets/img_profiles/4.jpg" alt="" />
              <div class="container_icon_video">
                <a href=""><img src="/assets/icon_play.svg" alt="" /></a>
              </div>
            </div>
            <div class="container_testimonio">
              <h3><b>Nombre</b></h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat magni, quod non quasi dignissimos magnam tempora quam
                minus illum dolores.
              </p>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </section>
  </main>
</template>
<script lang="ts" setup>
import { useHead } from "unhead";

useHead({
  title: "Inicio",
  meta: [
    {
      name: "description",
      content: "Página de inicio de Conciencia del Ser Divino",
    },
    //etiquetas og
    { property: "og:title", content: "Inicio - Conciencia del Ser Divino" },
    { property: "og:description", content: "Somos Conciencia del Ser Divino" },
    // { property: 'og:image', content: 'https://www.ejemplo.com/imagen.jpg' },
    { property: "og:url", content: "https://www.ejemplo.com/" },
    { property: "og:type", content: "website" },
    //etiquetas para twitter
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:site", content: "@ConcienciaDelSerDivino" },
    //etiquetas para facebook
    { property: "article:publisher", content: "https://www.facebook.com/" },
  ],
  link: [
    /* no recomendable si se quiere remplazar a las cononicas
    {
      rel: "shortlink",
      href: "https://tusitio.com/shortlink", // Aquí colocas la URL corta
    },
    */
  ],
});

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
const breakpoints2 = {
  900: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1200: {
    slidesPerView: 3,
    spaceBetween: 40,
  },
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
  height: 60dvh;
  /* Center slide text vertically */
  display: flex;
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

.card_slide {
  width: 100%;
  height: 100% !important;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #fcf7f3;
  transition: all 0.3s linear !important;
}
.swiper-slide-active .card_slide {
  background: #f4f5fb !important;
}
.swiper-slide .card_slide .info h4,
.swiper-slide .card_slide .info p,
.swiper-slide .card_slide .info h2 {
  color: #b47f4a;
}

.card_slide .container_icon {
  height: 17%;
  background-image: url("/assets/corazon.svg");
  background-size: contain;
  background-origin: content-box;
  background-repeat: repeat-x;
  mask-image: linear-gradient(black 50%, transparent);
}
.card_slide .container_info {
  width: 80%;
  height: 80%;
  margin: 0 auto;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
}

.info,
.container_buttons {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}

.info h2 {
  color: #fff;
  font-size: 3rem;
}

.container_buttons a,
.container_buttons button {
  padding: 1rem 2rem;
  border: 3px solid #f3eae1;
  background: #fff;
  border-radius: 10px;
  color: #d9bfa4;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
}

.container_mails {
  margin-top: 15%;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.mail {
  position: relative;
  width: 25dvw;
  background: #fff;
  height: 30dvh;
  filter: drop-shadow(5px 5px 10px #00000057);
  transition: all 0.3s linear;
  z-index: 20;
}
.mail::before {
  content: "";
  position: absolute;
  top: 10%;
  left: 34%;
  --size: 4dvw;
  opacity: 1;
  visibility: visible;
  z-index: 20;
  width: 0;
  height: 0;
  border-left: var(--size) solid transparent;
  border-right: var(--size) solid transparent;
  border-top: calc(var(--size) * 1.5) solid #b47f4acc;
  transform: scaleX(3.1) scaleY(1.5);
  filter: drop-shadow(0px 5px 1px #00000021);
}
.mail:hover {
  z-index: 20;
}
.mail:hover::before {
  opacity: 0.5;
  z-index: -1;
  transform: rotate(180deg) scaleX(3.1) scaleY(1.5) translateY(115px);
  border-top: calc(var(--size) * 1.5) solid #ffffff;
  filter: none;
}
.container_space {
  height: 60%;
}
.container_info_mail {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.container_sticker {
  width: 5dvw;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_sticker img {
  width: 100%;
}

.container_paper {
  position: relative;

  width: 100%;
  margin: auto;
  padding: 2%;
  background: #fcf7f3;
  height: 30dvh;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s linear;
  transform: translateY(-21rem);
}
.mail:hover .container_paper {
  opacity: 1;
  transform: translateY(-26rem);
  visibility: visible;
  clip-path: polygon(0 0, 100% 0%, 100% 72%, 51% 100%, 0 69%);
  box-shadow: inset 0px -90px 5px #0000000a;
}

@media screen and (max-width: 1400px) {
  .mail {
    height: 25dvh;
  }
  .mail::before {
    top: 10%;
  }
  .mail:hover .container_paper {
    transform: translateY(-17.5rem);
  }

  .mail:hover::before {
    transform: rotate(180deg) scaleX(3.1) scaleY(1.5) translateY(90px);
  }

  .swiper-slide {
    height: 80dvh !important;
  }
}
@media screen and (max-width: 1280px) {
  .swiper-slide {
    height: 60dvh !important;
  }
}
@media screen and (max-width: 900px) {
  .mail {
    width: 35dvw;
    height: 20dvh;
  }
  .mail::before {
    --size: 5.6dvw;
  }
}
@media screen and (max-width: 600px) {
  .mail {
    width: 90dvw;
  }
  .mail::before {
    --size: 13dvw;
    top: 12% !important;
  }
  .container_paper {
    transform: translateY(-200px);
  }
  .mail:hover .container_paper {
    transform: translateY(-250px);
  }
  .container_sticker {
    width: 15dvw;
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
}
.card_slide_testimonio .container_testimonio h3,
.card_slide_testimonio .container_testimonio p {
  text-align: left;
}

@media screen and (max-width: 600px) {
  .card_slide_testimonio {
    display: flex;
    flex-direction: column;
  }
  .container_icon_video {
    width: 20dvw !important;
    right: 7rem !important;
    bottom: -1.8rem !important;
  }
}
</style>
