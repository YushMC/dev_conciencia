<template>
  <main>
    <div class="container_info_evento bg_color_principal" v-if="experiencia">
      <div class="container_text">
        <!-- Verifica si 'experiencia' y 'description' están disponibles antes de mostrarlas -->
        <h2 class="text_color_principal titulo" v-if="experiencia?.description">
          {{ experiencia.description }}
        </h2>
        <h3
          class="location_info"
          v-if="experiencia?.city && experiencia?.state && experiencia?.country"
        >
          <span><img src="/assets/gui/location.svg" alt="" /></span>
          {{ experiencia.address }}
          <br />{{ experiencia.city }}, {{ experiencia.state }},
          {{ experiencia.country }}.
        </h3>
      </div>
      <div class="container_status">
        <h5 :class="{ active: experiencia?.id_experience_status === 1 }">
          Próximamente
        </h5>
        <h5 :class="{ active: experiencia?.id_experience_status === 2 }">
          ¡En curso!
        </h5>
        <h5
          :class="{ active: experiencia?.id_experience_status === 3 }"
          v-if="isLogged"
        >
          Terminado
        </h5>
      </div>
    </div>
    <div
      v-if="experiencia?.id_experience_status === 3"
      class="container_imgs_evento bg_color_principal"
    >
      <div class="container_principal">
        <img
          src="https://blog.rentcars.com/wp-content/uploads/2019/12/foto_blog.jpg"
          alt=""
        />
      </div>
      <div class="container_otros">
        <!-- Imágenes adicionales -->
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
      <img :src="experiencia?.flyer" alt="" />
      <section class="precios" v-if="experiencia?.id_experience_status !== 3">
        <h1>{{ experiencia?.description }}</h1>
        <select v-model="selectedPrice">
          <option value="1">
            ${{ experiencia?.single_price }} por 1 persona.
          </option>
          <option
            v-if="experiencia?.promo_price && experiencia?.persons_promo"
            value="2"
          >
            Promoción: ${{ experiencia?.promo_price }} por
            {{ experiencia?.persons_promo }} personas!
          </option>
        </select>
        <div>
          <h5>Fecha</h5>
          <h5>{{ experiencia?.init_date }}</h5>
        </div>
        <button @click="reservar(isLogged)">
          <span>{{ textButton }}</span>
        </button>
      </section>
      <section v-else>
        <h3 class="titulo text_color_principal">
          ¡Esta meditación esta en curso!
        </h3>
      </section>
    </div>
    <div class="container_description">
      <ul class="container_submenu">
        <li class="active">Ubicación</li>
      </ul>
      <div class="container_info">
        <div class="content_description">
          <section>
            <div
              class="content_map"
              v-if="experiencia?.id_experience_status !== 3"
            >
              <EventosMaps :lat="experiencia?.lat" :lng="experiencia?.lng">
              </EventosMaps>
            </div>
          </section>
        </div>
        <div id="Testimonios" v-if="experiencia?.id_experience_status === 3">
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
    <aside :class="{ active: showModalReserva }">
      <h1>Reservar: {{ experiencia?.description }}</h1>
      <div class="container_aside">
        <div class="content_info">
          <h3>Reserva a nombre de:</h3>
          <picture title="No es posible cambiar de persona.">
            <img :src="meditator.photo || ''" alt="" v-if="meditator.photo" />
            <h5 v-if="meditator.name">{{ meditator.name }}</h5>
          </picture>
          <h3>Método de Pago:</h3>
          <div
            style="
              display: flex;
              flex-direction: column;
              gap: 2rem;
              padding: 2%;
              overflow-y: auto;
              overflow-x: hidden;
            "
          >
            <div class="container_payment">
              <div class="cards">
                <img src="/assets/gui/icon_visa.png" alt="" />
                <img src="/assets/gui/icon_masterCard.png" alt="" />
              </div>
              <img src="/assets/gui/mp.png" alt="" />
              <img src="/assets/gui/spei.png" alt="" />
              <img src="/assets/gui/billete.png" alt="" />
            </div>
            <div
              class="seccion_ajustes"
              style="flex-direction: column; margin: 0"
            >
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100"
                  >Nombre del propietario de la cuenta:
                </label>
                <input type="text" />
              </div>
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100"
                  >Número de tarjeta
                </label>
                <input type="number" />
              </div>
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100">CVC: </label>
                <input type="number" />
              </div>
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100"
                  >Vencimiento:
                </label>
                <input type="text" />
              </div>
            </div>
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <h3>
                Pagar: $
                {{
                  selectedPrice == 1
                    ? experiencia?.single_price
                    : experiencia?.promo_price
                }}
                MXN
              </h3>
              <button
                style="
                  width: 20%;
                  padding: 1%;
                  background: #b47f4a;
                  color: #fff;
                  border: none;
                  border-radius: 10px;
                  cursor: pointer;
                "
              >
                Pagar
              </button>
            </div>
            <h5 style="color: #b47f4a">Si prefieres pagar un anticipo:</h5>
            <div
              style="display: flex; justify-content: space-between; width: 100%"
            >
              <h3>
                Pagar Anticipo: $
                {{
                  selectedPrice == 1
                    ? experiencia?.single_price / 2
                    : experiencia?.promo_price / 2
                }}
                MXN
              </h3>
              <button
                style="
                  width: 20%;
                  padding: 1%;
                  background: #b47f4a;
                  color: #fff;
                  border: none;
                  border-radius: 10px;
                  cursor: pointer;
                "
              >
                Pagar Anticipo
              </button>
            </div>
          </div>
        </div>
        <div class="content_info" v-if="selectedPrice == 2">
          <h3>Agregar acompañante:</h3>
          <details open>
            <summary>Registrar Acompañantes:</summary>
            <div class="container_input_search">
              <img src="/assets/gui/search_icon.svg" alt="" />
              <input
                type="text"
                placeholder="Buscar por teléfono..."
                ref="inputRef"
              />
              <button @click="searchMeditatorLocal">Buscar</button>
            </div>
            <p
              v-if="dataMeditator.length === 0"
              style="color: red; margin-top: 1%"
            >
              No se han encontrado meditadores
            </p>
            <p v-else style="margin-top: 1%">Meditadores encontrados:</p>
          </details>

          <div
            class="selectedPerson"
            v-for="meditator in dataMeditator"
            :key="meditator.id"
          >
            <div class="content_info">
              <h1>{{ meditator.name }}</h1>
              <h1 @click="deleteMeditator" class="eliminar">X</h1>
            </div>
          </div>
          <details
            v-if="dataMeditator.length === 0"
            class="seccion_ajustes"
            style="gap: 2rem"
          >
            <summary>En caso de no contar con cuenta:</summary>
            <div class="container_input">
              <label for="" style="top: 0rem; z-index: 100">Nombre: </label>
              <input type="text" />
            </div>
            <div class="container_input">
              <label for="" style="top: 0rem; z-index: 100"
                >Correo Electrónico:
              </label>
              <input type="text" />
            </div>
            <div class="container_input">
              <label for="" style="top: 0rem; z-index: 100">Télefono: </label>
              <input type="text" />
            </div>
            <div class="container_input">
              <label for="" style="top: 0rem; z-index: 100"
                >Fecha de Nacimiento:
              </label>
              <input type="date" />
            </div>
            <div class="container_input">
              <select v-model="meditator.state">
                <option value="Jalisco">Jalisco</option>
              </select>
              <label for="">Estado:</label>
            </div>
            <div class="container_input">
              <select v-model="meditator.city">
                <option value="Guadalajara">Guadalajara</option>
              </select>
              <label for="">Ciudad:</label>
            </div>
            <button>Guardar</button>
          </details>
        </div>
      </div>
    </aside>
    <div id="cerrarModal" v-if="showModalReserva" @click="toggleModal"></div>
  </main>
</template>

<script setup lang="ts">
import { useHead } from "unhead";
import { ref, onMounted, watchEffect, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useFetch } from "nuxt/app";

import Swal from "sweetalert2";

const { isLogged, meditator, token, hydrate } = useInfoUser();
const { searchMeditator, dataMeditator, resetDataMeditator } =
  useApiFindByPhone();

const route = useRoute();
const router = useRouter();
const eventoId = route.params.id as string;

const showModalReserva = ref<boolean>(false);

interface ExperienceData {
  experience: any;
}

const config = useRuntimeConfig(); // Adjust the import path as necessary
const api = config.public.apiUrl.toString();

// Usamos useFetch para obtener los datos de la API
const { data, pending, error } = useFetch<ExperienceData>(
  api + `/experience/${eventoId}`
);

// Observamos los cambios en 'data' y lo asignamos a 'experiencia' cuando esté disponible
const experiencia = computed(() => data.value?.experience || {});

const selectedPrice = ref<number>(1);
const textButton = ref("Reservar");

const toggleModal = () => {
  showModalReserva.value = !showModalReserva.value;
};

const reservar = async (isLogged: boolean) => {
  if (isLogged) {
    showModalReserva.value = !showModalReserva.value;
  } else {
    try {
      Swal.fire({
        icon: "info",
        title: "Cuenta no detectada",
        text: "Para esta opción es necesario iniciar sesión.",
        showCancelButton: true,
        confirmButtonText: "Iniciar Sesión",
      }).then(async (result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          router.push("/login");
        } else {
          Swal.fire("Operación cancelada", "", "info");
        }
      });
    } catch (err) {}
  }
};

const inputRef = ref<HTMLInputElement | null>(null);

const searchMeditatorLocal = () => {
  if (inputRef.value?.value.trim() !== "") {
    searchMeditator(inputRef.value?.value || "", token.value);
  } else {
    Swal.fire({
      icon: "info",
      title: "Campo Vacio",
      text: "Necesita colocar un número telefónico en el campo.",
    });
  }
};

const deleteMeditator = () => {
  resetDataMeditator();
};

watchEffect(() => {
  if (error.value) {
    router.push("/");
  }
});

useHead({
  title: experiencia.value.description,
});

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
onBeforeMount(() => {
  hydrate();
});
onMounted(() => {
  if (experiencia.value.id_experience_status === 3 && isLogged) {
    router.push("/");
  }
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
  flex-wrap: wrap;
  align-items: center;
}
.container_flayer img {
  width: 50%;
  aspect-ratio: 4/3;
  object-fit: contain;
  object-position: center;
  border-radius: 20px;
  transition: all 0.3s linear;
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.content_description section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.precios {
  width: 50%;
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
  cursor: pointer;
}
.precios select {
  border: 2px solid transparent;
  border-bottom: #b47f4a solid 2px;
  background: none;
  color: #b47f4a;
  padding: 2%;
  font-size: 1.5rem;
  font-weight: 400 !important;
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

aside {
  position: fixed;
  z-index: 100;
  width: 0;
  height: 0;
  overflow: hidden;
  padding: 2rem;
  background: #ffffff;
  top: 5dvh;
  left: 20dvw;
  border-radius: 20px;
  border: #b47f4a 2px solid;
  box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  gap: 2rem;
  opacity: 0;
  visibility: hidden;
  transform: translateX(-500px) translateY(-100px);
  transition: all 0.3s linear;
}
aside.active {
  width: 60dvw;
  height: 90dvh;
  opacity: 1;
  visibility: visible;
  transform: translateX(0px) translateY(0px);
}
.container_aside {
  margin: auto;
  width: 100%;
  height: 95%;
  overflow-y: auto;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}
.container_aside .content_info {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: hidden;
  padding: 2%;
}
.container_aside .content_info:nth-child(2) {
  border-left: 2px solid #a7744260;
  overflow-x: hidden;
  overflow-y: auto;
}
.content_info h3 {
  width: fit-content;
  padding: 1%;
  padding-bottom: 1%;
  border-bottom: #b47f4a solid 2px;
  color: #b47f4a;
}
.container_aside picture {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 5px;
  background: #f1dcc6;
  padding: 1rem;
  opacity: 0.5;
  cursor: not-allowed;
}
.container_aside picture img {
  width: 2dvw;
  border-radius: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
}
.content_info details {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.content_info details summary {
  margin-bottom: 2%;
  color: #77522e;
  border-bottom: solid 2px #77532e49;
  cursor: pointer;
}
.content_info details .container_input_search {
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.container_input_search input {
  width: 70%;
  padding: 1rem;
  padding-left: 2rem;
  border: none;
  border-bottom: #b47f4a solid 2px;
  outline: none;
  font-size: 1rem;
}
.container_input_search button {
  width: 25%;
  background: none;
  border: 2px solid #b47f4a;
  border-radius: 10px;
  color: #fff;
  background: #b47f4a;
  font-weight: 600;
  padding: 1%;
  cursor: pointer;
}

.container_input_search img {
  position: absolute;
  top: 1rem;
  left: 0.2rem;
  width: 1rem;
}

.selectedPerson {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2%;
}

.selectedPerson h1 {
  color: #ffffff;
  font-size: 1.5rem;
}
.selectedPerson .content_info {
  border-radius: 10px;
  background: #ca9fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.selectedPerson .content_info .eliminar {
  font-size: 2rem;
  padding: 2%;
  background: red;
  color: #fff;
  border-radius: 10px;
  cursor: pointer;
}

.container_payment {
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.container_payment img,
.container_payment .cards {
  width: 5rem;
  aspect-ratio: 1/1;
  object-fit: contain;
  cursor: pointer;
}

.container_payment .cards {
  display: flex;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  overflow: hidden;
  align-items: center;
  background: #b47f4a52;
  border-radius: 10px;
  padding: 1%;
}
.container_payment .cards img {
  width: 100% !important;
}

#cerrarModal {
  position: fixed;
  z-index: 80;
  backdrop-filter: blur(10px);
  top: 0;
  left: 0;
  width: 100dvw;
  height: 100dvh;
}
</style>
