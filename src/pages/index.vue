<template>
  <div>
    <Frontpage></Frontpage>

    <section id="Proximos-Eventos" v-if="dataEventos.length">
      <div class="container_titulos">
        <h2 class="titulo text_color_principal">Próximas Experiencias</h2>
      </div>
      <Swiper
        :modules="[Pagination, Navigation, Autoplay]"
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
        <swiper-slide v-for="evento in dataEventos" :key="evento.id">
          <NuxtLink :to="`/experiencias/${evento.slug}`" class="card_slide">
            <img :src="evento.flyer" alt="" loading="lazy" />
          </NuxtLink>
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
              Sanar de raíz el corazón, mente, cuerpo y alma de cada ser humano
              a través de la meditación.
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
              Despertar la conciencia desde el amor para conectar con el ser
              divino y vivir una vida en plenitud
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
            <ul>
              <li>Amor</li>
              <li>Confianza</li>
              <li>Paz</li>
              <li>Conciencia</li>
              <li>Lealtad</li>
              <li>Respeto</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="containerHistory">
        <div class="container_imgHistory">
          <img src="~/assets/gallery/7.jpg" alt="" />
        </div>
        <div class="container_textHistory">
          <h2 class="text_color_principal">Nuestro Renacer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            itaque at minima labore atque esse aliquid, provident suscipit.
            Tempore, quod!<br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
            aliquam repellendus molestias maxime magni, iste sunt odit quis, non
            exercitationem et iusto assumenda. Eaque, voluptatum nobis totam
            consequatur ullam voluptas?
            <br /><br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            accusantium ab vitae. Sunt quae consectetur hic mollitia incidunt
            dolor alias tempore officiis illum maiores, corporis iure tempora
            facere reprehenderit quo sint fuga dolores aliquam. Voluptas
            veritatis dolore animi accusantium quidem.
          </p>
        </div>
      </div>
    </section>
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
                emociones, a entender los momentos en el que día a día, la
                rutina y demás fugaban mi energía, y ayudarme a tener la
                fortaleza para no ceder ante eso. Tambien me ayudó a llevar un
                mejor control sobre mis horarios de sueño y el darme el derecho
                a un descanso entender la importancia de saber escuchar a mi
                cuerpo y mis necesidades, y atenderlas de manera equilibrada.
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
                cuerpo. Lo importante es saber actuar en el momento presente,
                sin importar cuántas veces nos preparemos o ensayemos, si no
                aplicamos lo aprendido aquí y ahora Esto me ha permitido estar
                más presente y consciente de mis acciones, lo cual ha mejorado
                mi calidad de vida y mi bienestar general.
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
                Conciencia del ser divino fue una herramienta que me ayudó a
                abrir la puerta que mantenemos cerrada cada uno de nosotros, y
                que me hizo entender que el aquí y el ahora es el momento
                perfecto para empezar a vivir, para empezar a conectarse con tu
                propio amor, con tus responsabilidades, y darte cuenta que es
                posible vivir la aventura de la vida, y entender que a pesar de
                las adversidades, cada uno tiene la fuerza de hacer magnifica la
                vida, solo es cuestión de que creerlo, saber que podemos
                hacerlo.
              </p>
            </div>
          </div>
        </swiper-slide>
      </Swiper>
    </section>
  </div>
</template>
<script lang="ts" setup>
import { useHead } from "unhead";

const { isResponsiveMenu } = useMainHeader();

isResponsiveMenu.value = false;

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

const { dataEventos } = useApiEventos();

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
    spaceBetween: 20,
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

.card_slide {
  width: 100%;
  height: 100% !important;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.3s linear !important;
}
.card_slide img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
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
  padding: 5% 3%;
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
.container_paper ul {
  margin: 0% 5%;
  color: #b47f4a;
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

.containerHistory {
  margin: 5% 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}
.container_imgHistory {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_imgHistory img {
  width: 20rem;
  border-radius: 10px;
}
.container_textHistory {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.container_textHistory h2 {
  font-size: 2rem;
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
  .containerHistory {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
}
</style>
