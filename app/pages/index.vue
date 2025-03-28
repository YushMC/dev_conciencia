<template>
  <div>
    <Frontpage></Frontpage>
    <IndexSwiperEvents> </IndexSwiperEvents>
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
          <img src="~/assets/vero/main.jpg" alt="" />
        </div>
        <div class="container_textHistory">
          <h2 class="text_color_principal">Nuestro Renacer</h2>
          <p>
            <b>Verónica Gastelum</b> fundadora del Centro de Conciencia del Ser
            Divino con una trayectoria de más de 20 años a logrado impactar en
            la conciencia humana de miles de personas convirtiéndose en un icono
            en el mundo de las meditaciones. Líder y promotora del movimiento
            espiritual <i>“La Nueva Era”</i>. <br /><br />Su labor y
            emprendimiento han dejado huella a nivel internacional como en
            México, Latino América y parte de Estados Unidos.
          </p>
        </div>
      </div>
    </section>
    <ClientOnly>
      <IndexSwiperTestimonios slug="/testimony/all"></IndexSwiperTestimonios>
    </ClientOnly>
  </div>
</template>
<script lang="ts" setup>
import { useHead } from "unhead";

const { isResponsiveMenu } = useMainHeader();
const { isChecked } = useDespegablemenu();
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
    {
      property: "og:image",
      content:
        "https://www.concienciadelserdivino.com.mx/_nuxt/assets/logo_without_bg.png",
    },
    {
      property: "og:url",
      content: "https://www.concienciadelserdivino.com.mx/",
    },
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
onMounted(() => {
  isChecked.value = false;
});
</script>

<style scoped>
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

.containerHistory {
  margin: 3% auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding-bottom: 3rem;
}

@media screen and (max-width: 1000px) {
  .containerHistory {
    display: flex;
    flex-direction: column;
    width: 60%;
    gap: 1rem;
  }
}
.container_imgHistory {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_imgHistory img {
  width: 80%;
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
.container_textHistory p {
  width: 300px;
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
    width: 100%;
    padding-inline: 10%;
  }
}
</style>
