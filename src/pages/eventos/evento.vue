tion
<template>
  <main>
    <div class="container_info_evento bg_color_principal">
      <div class="container_text">
        <h2 class="text_color_principal titulo">Meditación en Guadalajara</h2>
        <h3 class="location_info">
          <span><img src="/assets/gui/location.svg" alt="" /></span> San Pedro
          Tlaquepaque, Guadalajara, Jalisco, México
        </h3>
      </div>
      <div class="container_status">
        <h5 :class="{ active: status === 'Proximamente' }">
          Próximamente
          <span v-if="status === 'Proximamente'"
            ><a href="#reservar">Reservar</a></span
          >
        </h5>
        <h5 :class="{ active: status === 'En curso' }">¡En curso!</h5>
        <h5 :class="{ active: status === 'Terminado' }" v-if="isLogin">
          Terminado
        </h5>
      </div>
    </div>
    <div class="container_imgs_evento bg_color_principal" v-if="!isAvaible">
      <div class="container_principal">
        <img
          src="https://blog.rentcars.com/wp-content/uploads/2019/12/foto_blog.jpg"
          alt=""
        />
      </div>
      <div class="container_otros">
        <div>
          <img
            src="https://visitagdl.com/wp-content/uploads/2023/03/ofvc_blog_reunimos-lo-mejor_portada.png"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://www.viajabonito.mx/wp-content/uploads/2022/01/lugares-turisticos-de-guanajuato-port.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://blog.vivaaerobus.com/wp-content/uploads/2020/08/que-hacer-en-yucatan.jpg"
            alt=""
          />
        </div>
        <div @click="">
          <h3>+5</h3>
          <img
            src="https://www.ngenespanol.com/wp-content/uploads/2024/10/lo-mejor-del-mundo-los-25-lugares-mas-impresionantes-para-viajar-en-2025-de-acuerdo-con-national-geographic.jpeg"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="container_flayer bg_color_principal" v-else id="reservar">
      <img src="/assets/locations_examples/1.jpg" alt="" />
      <section class="precios">
        <h2><span>$3,500</span> por persona</h2>
        <hr class="bg_color_secundario" />
        <div>
          <h5>Fecha</h5>
          <h5>Marzo 30, 2025</h5>
        </div>
        <h5>Inivitado</h5>
        <select name="" id="">
          <option value="">1</option>
        </select>
        <h3>Total <span>$7,000</span></h3>
        <button>Reservar Ahora</button>
      </section>
    </div>
    <div class="container_description">
      <ul class="container_submenu">
        <li class="active" v-if="isAvaible">Descripción</li>
        <li class="active" v-else>Resumen</li>
      </ul>
      <div class="container_info">
        <div class="content_description">
          <section>
            <div class="container_info_desciption">
              <h2 class="text_color_principal">Acerca de esta meditación</h2>
              <p v-show="isAvaible">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis quas sequi quae id. Dicta, eos natus quibusdam
                tempora architecto illum suscipit impedit nostrum necessitatibus
                blanditiis ratione, laudantium omnis repudiandae eius nemo
                tempore odit reiciendis cupiditate. Nam debitis animi culpa est
                facere, similique libero tempora id amet ut esse expedita
                placeat, eveniet voluptatem magnam quibusdam! Pariatur earum vel
                saepe nemo commodi minima accusantium excepturi. Dignissimos
                necessitatibus perspiciatis doloremque nisi fugiat dicta nostrum
                amet iste earum maiores, mollitia, ipsum id ducimus. Aspernatur
                assumenda praesentium voluptatum doloribus recusandae, sunt sint
                iste ducimus! Sed itaque dicta sequi distinctio fuga, fugiat
                officia? Tenetur, illo quis.
              </p>
              <p v-show="!isAvaible">
                Resumen: Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reiciendis quas sequi quae id. Dicta, eos natus quibusdam
                tempora architecto illum suscipit impedit nostrum necessitatibus
                blanditiis ratione, laudantium omnis repudiandae eius nemo
                tempore odit reiciendis cupiditate. Nam debitis animi culpa est
                facere, similique libero tempora id amet ut esse expedita
                placeat, eveniet voluptatem magnam quibusdam! Pariatur earum vel
                saepe nemo commodi minima accusantium excepturi. Dignissimos
                necessitatibus perspiciatis doloremque nisi fugiat dicta nostrum
                amet iste earum maiores, mollitia, ipsum id ducimus. Aspernatur
                assumenda praesentium voluptatum doloribus recusandae, sunt sint
                iste ducimus! Sed itaque dicta sequi distinctio fuga, fugiat
                officia? Tenetur, illo quis.
              </p>
            </div>
            <div class="content_map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5910.250011240538!2d-101.56913538378157!3d21.063714057165676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1736805270196!5m2!1ses!2smx"
                width="100%"
                height="500"
                style="border: 0"
                allowfullscreen="true"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </section>
          <section class="precios">
            <h2>Ubicacion</h2>
          </section>
        </div>
        <div id="Testimonios" v-if="!isAvaible">
          <h2 class="titulo text_color_principal">Comentarios</h2>
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
                    Repellat magni, quod non quasi dignissimos magnam tempora
                    quam minus illum dolores.
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
                    Repellat magni, quod non quasi dignissimos magnam tempora
                    quam minus illum dolores.
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
                    Repellat magni, quod non quasi dignissimos magnam tempora
                    quam minus illum dolores.
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
                    Repellat magni, quod non quasi dignissimos magnam tempora
                    quam minus illum dolores.
                  </p>
                </div>
              </div>
            </swiper-slide>
          </Swiper>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from "vue";

const status = ref<string>("Proximamente");

const { isLogin } = useInfoUser();

const isAvaible = ref<boolean>(false);

const watchStatus = () => {
  if (status.value !== "Terminado") {
    isAvaible.value = true;
  } else {
    isAvaible.value = false;
  }
};

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// Opcionales: módulos para Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
import { useHead } from "unhead";

useHead({
  title: "Meditación en Guadalajara",
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

onMounted(() => {
  watchStatus();
});
</script>

<style scoped>
.container_info_evento {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 100px 10%;
  padding-bottom: 2%;
}
.container_text {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.location_info {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 1rem;
  align-items: center;
  color: #b47f4a;
  opacity: 0.7;
}
.location_info span {
  width: 2rem;
}
.location_info span img {
  width: 100%;
}
.titulo {
  text-align: left;
}

.container_status {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}
.container_status h5 {
  text-align: center;
  color: #b47f4a;
  font-size: 1rem;
  font-weight: 400;
  padding: 1%;
  opacity: 0.5;
  display: flex;
  flex-direction: column;
  scale: 0.9;
}
.container_status h5.active {
  opacity: 1;
  font-weight: 800;
  scale: 1.1;
  border-bottom: 2px solid #b47f4a;
}

.container_status h5 span {
  width: 100%;
  margin: 2% 0;
}
.container_status h5 span a {
  display: block;
  width: 100% !important;
  border-radius: 10px;
  border: #b47f4a 2px solid;
  background: #b47f4a;
  color: #fff;
  padding: 2% 5%;
  font-size: 0.8rem;
  cursor: pointer;
}
.container_imgs_evento {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 1% 10%;
}
.container_imgs_evento .container_principal {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
}
.container_imgs_evento .container_principal img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
}
.container_imgs_evento .container_otros {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.container_imgs_evento .container_otros div {
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  overflow: hidden;
}
.container_imgs_evento .container_otros div img {
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
.container_imgs_evento .container_otros div:last-child {
  cursor: pointer;
}
.container_info_desciption {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.container_imgs_evento .container_otros div:last-child h3 {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 5rem;
  color: #fff;
  background: #b47f4a8a;
  backdrop-filter: blur(1px);
}

.container_flayer {
  padding: 2% 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_flayer img {
  width: 50%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
  border-radius: 20px;
  transition: all 0.3s linear;
}
.container_flayer img:hover {
  transform: scale(1.1);
}

@media screen and (max-width: 600px) {
  .container_info_evento {
    display: flex;
    flex-direction: column;
    margin-bottom: 5%;
  }
  .container_imgs_evento {
    display: flex;
    flex-direction: column;
  }
}

.container_description {
  padding: 5% 10%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container_submenu {
  width: 100%;
  display: flex;
  padding: 0 3%;
  justify-content: space-between;
  list-style: none;
  border-bottom: #b47f4a 1px solid;
}
.container_submenu li {
  padding: 0.5%;
  color: #b47f4a;
  font-size: 1.5rem;
  opacity: 0.5;
  cursor: pointer;
}
.container_submenu li.active {
  border-bottom: 3px solid #b47f4a;
  opacity: 1;
}
.content_description {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.content_description section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.precios {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  border-radius: 10px;
  border: #b47f4a solid 2px;
  padding: 5%;
}

.precios h5,
.precios h2 {
  color: #b47f4a;
}
.precios h2 span {
  font-size: 4rem;
}
.precios hr {
  margin: 0;
}
.precios div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.precios button {
  border: #b47f4a solid 2px;
  background: #b47f4a;
  color: #fff;
  padding: 2%;
  border-radius: 10px;
  font-size: 1rem;
}
.precios select {
  border: 2px solid transparent;
  border-bottom: #b47f4a solid 2px;
  background: none;
  color: #b47f4a;
  padding: 2%;
  font-weight: 600 !important;
}
.precios h3 {
  color: #b47f4a;
}
.precios span {
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid #b47f4a;
}
#Testimonios {
  width: 100%;
  margin: 2% 0;
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

.content_map {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
