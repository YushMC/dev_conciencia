<script setup lang="ts">
const { selectedPrice, showModalReserva } = useModalReserve();
const { isLogged } = useInfoUser();
const { experiencia, fetchEvento } = useInfoEvento();
const { isResponsiveMenu } = useMainHeader();
import Swal from "sweetalert2";
const route = useRoute();
const router = useRouter();
const eventoId = route.params.id as string;
const { isChecked } = useDespegablemenu();

const toggleModal = () => {
  //showModalReserva.value = !showModalReserva.value;

  if (selectedPrice.value == 2) {
    window.open(
      `https://wa.me/${experiencia?.value?.phone}?text=Hola, me gustaría saber más sobre la experiencia: ${experiencia?.value?.description} con la promoción para ${experiencia?.value?.persons_promo} personas.`
    );
  } else {
    window.open(
      `https://wa.me/${experiencia?.value?.phone}?text=Hola, me gustaría saber más sobre la experiencia: ${experiencia?.value?.description}`
    );
  }
};

const toggleModalReserve = async () => {
  if (!isLogged.value) {
    await Swal.fire({
      icon: "error",
      title: "Cuenta necesaria",
      text: "Es necesario iniciar sesión previamente antes de reservar por este método.",
    });
    showModalReserva.value = false;
    router.push("/login");
  } else {
    showModalReserva.value = true;
  }
};

onBeforeMount(async () => {
  const config = useRuntimeConfig(); // Adjust the import path as necessary
  const response = await fetchEvento(config.public.apiUrl.toString(), eventoId);
  if (!response.success) {
    console.error(response.message);
  } else {
    useHead({
      title: experiencia.value?.description,
      meta: [
        {
          name: "description",
          content: "Todas las experiencias que esperan tu llegada!",
        },
        {
          property: "og:title",
          content:
            experiencia.value?.description + " - Conciencia del Ser Divino",
        },
        {
          property: "og:description",
          content: "Nuestra experiencia de " + experiencia.value?.description,
        },
        {
          property: "og:url",
          content: "http://localhost:3000/experiencias/" + eventoId,
        },
        { property: "og:type", content: "website" },
        { property: "og:image", content: "/assets/logo.jpeg" },
      ],
    });
  }
});
onMounted(() => {
  isResponsiveMenu.value = false;

  isChecked.value = false;
});
</script>

<template>
  <div>
    <main>
      <div class="container_info_evento bg_color_principal" v-if="experiencia">
        <div class="container_text">
          <!-- Verifica si 'experiencia' y 'description' están disponibles antes de mostrarlas -->
          <h2
            class="text_color_principal titulo"
            v-if="experiencia?.description"
          >
            {{ experiencia.description }}
          </h2>
          <h3
            class="location_info"
            v-if="
              experiencia?.city && experiencia?.state && experiencia?.country
            "
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
          <h5 :class="{ active: experiencia?.id_experience_status === 3 }">
            Finalizado
          </h5>
        </div>
      </div>
      <ClientOnly>
        <div class="container_flayer bg_color_principal" id="reservar">
          <img
            :src="experiencia?.flyer"
            alt="Flyer Experiencia"
            loading="lazy"
          />
          <section
            class="precios"
            v-if="experiencia?.id_experience_status == 1"
          >
            <h1>{{ experiencia?.description }}</h1>
            <select
              v-model="selectedPrice"
              v-if="experiencia?.single_price !== 0"
            >
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
            <h2 v-else>El precio se confirma en el lugar.</h2>
            <div>
              <h5>Fecha</h5>
              <h5 v-if="experiencia?.init_date">
                {{
                  (() => {
                    try {
                      return new Date(experiencia.init_date)
                        .toISOString()
                        .slice(0, 10);
                    } catch {
                      return "Fecha no disponible";
                    }
                  })()
                }}
              </h5>
            </div>
            <button @click="toggleModal">
              <span>Más Información</span>
            </button>
            <button @click="toggleModalReserve">Reservar</button>
          </section>
          <section v-if="experiencia?.id_experience_status == 2">
            <h3 class="titulo text_color_principal">
              ¡Esta meditación esta en curso!
            </h3>
          </section>
          <section v-if="experiencia?.id_experience_status == 3">
            <h3 class="titulo text_color_principal">
              ¡La meditación ha finalizado!
            </h3>
          </section>
        </div>

        <div
          class="container_description"
          v-if="experiencia?.id_experience_status == 1"
        >
          <ul class="container_submenu">
            <li class="active">Ubicación</li>
          </ul>
          <div class="container_info">
            <div class="content_description">
              <section>
                <div class="content_map">
                  <EventosMaps
                    v-if="
                      experiencia?.lat !== undefined &&
                      experiencia?.lng !== undefined
                    "
                    :lat="experiencia?.lat"
                    :lng="experiencia?.lng"
                  >
                  </EventosMaps>
                </div>
              </section>
            </div>
          </div>
        </div>
        <div id="Testimonios" v-if="experiencia?.id_experience_status === 3">
          <IndexSwiperTestimonios
            :slug="`/testimony/getByExperience/${experiencia?.id}`"
          ></IndexSwiperTestimonios>
        </div>
      </ClientOnly>
    </main>
    <EventosReserve :idExperience="`${experiencia?.id}`"></EventosReserve>
  </div>
</template>

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
  justify-content: space-evenly;
  flex-wrap: wrap;
  align-items: center;
}
.container_flayer img {
  width: 20rem;
  aspect-ratio: 9/16;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
  transition: all 0.3s linear;
  filter: drop-shadow(5px 5px 10px #00000036);
}

@media screen and (max-width: 800px) {
  .container_info_evento {
    display: flex;
    flex-direction: column;
    padding-bottom: 5%;
  }
  .container_imgs_evento {
    display: flex;
    flex-direction: column;
  }
  .container_flayer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .container_flayer img {
    width: 100%;
  }
  .container_flayer .precios {
    width: 100%;
  }
  .container_flayer .precios h1 {
    font-size: 1.5rem;
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
</style>
