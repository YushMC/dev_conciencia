<script setup lang="ts">
import Swal from "sweetalert2";
const { fetchReserve } = useReservations();
const { meditator, token, isLogged } = useInfoUser();
const { experiencia } = useInfoEvento();
const { searchMeditator, dataMeditator, resetDataMeditator } =
  useApiFindByPhone();
const router = useRouter();
const { selectedPrice, showModalReserva } = useModalReserve();

const props = defineProps({
  idExperience: String,
});

const toggleModal = () => {
  showModalReserva.value = !showModalReserva.value;
};

const isEfectivo = ref(false);
const isNewUser = ref(false);

const inputReference = ref<HTMLInputElement | null>(null);

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

const checkReserve = async () => {
  /*
  if (selectedPrice.value !== 1) {
    if (dataMeditator.value.length < 1 || isNewUser.value === false) {
      Swal.fire({
        icon: "warning",
        title: "No se registró nigún acompañante para esta modalidad.",
      });
      return;
    }

    payReserve(true);
  } else {
    payReserve(false);
  }+
  */

  Swal.fire({
    title: "Registrando reserva...",
    text: "Por favor espera mientras procesamos tu solicitud.",
    allowOutsideClick: false,
    showConfirmButton: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });

  const config = useRuntimeConfig();
  const mensaje = ref("");
  const { data, error } = await useFetch<{ message: string }>(
    config.public.apiUrl + "/meditator/reservation/save",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `${token.value}`,
      },
      body: {
        id_experience: props.idExperience ?? "",
      },
    }
  );

  Swal.close();

  if (data.value) {
    await Swal.fire({
      icon: "success",
      title: "Reserva generada correctamente.",
      text: JSON.stringify(data.value.message),
    });
  }

  if (error.value) {
    await Swal.fire({
      icon: "error",
      title: "Ocurrió un error al generar la reserva.",
      text: JSON.stringify(error.value.data?.message),
    });
  }
};

const payReserve = (isPromo: boolean) => {
  const total = ref<number>(0);
  if (isPromo) {
    total.value = experiencia.value?.promo_price ?? 0;
  } else {
    total.value = experiencia.value?.single_price ?? 0;
  }

  if (isEfectivo.value) {
    fetchReserve(
      experiencia.value?.id ?? 0,
      token.value,
      inputReference?.value?.value.trim() ?? "",
      false,
      total.value
    );
  } else {
    if (inputReference?.value?.value.trim() == "") {
      Swal.fire({
        icon: "warning",
        title: "La referencia es obligatoria.",
      });
      return;
    }
    fetchReserve(
      experiencia.value?.id ?? 0,
      token.value,
      inputReference?.value?.value.trim() ?? "",
      true,
      total.value / 2
    );
  }
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
      }).then(async (result: any) => {
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
</script>

<template>
  <ClientOnly>
    <aside :class="{ active: showModalReserva }">
      <h1>Reservar: {{ experiencia?.description }}</h1>
      <div class="container_aside">
        <div class="content_info">
          <h3>Reserva a nombre de:</h3>
          <picture title="No es posible cambiar de persona.">
            <img :src="meditator.photo || ''" alt="" v-if="meditator.photo" />
            <h5 v-if="meditator.name">{{ meditator.name }}</h5>
          </picture>
          <!-- 
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

              <img
                src="/assets/gui/spei.png"
                alt=""
                @click="isEfectivo = false"
                title="Transferencia Bancaria"
                :class="{ cards: !isEfectivo }"
              />
              <img
                src="/assets/gui/billete.png"
                alt=""
                title="Pago en Efectivo"
                @click="isEfectivo = true"
                :class="{ cards: isEfectivo }"
              />
            </div>
            <div
              class="seccion_ajustes"
              style="flex-direction: column; margin: 0"
              v-if="!isEfectivo"
            >
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100"
                  >Cuenta (insertar nombre de banco):
                </label>
                <input type="text" value="12345678909" disabled />
              </div>
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100"
                  >Clabe Interbancaria:
                </label>
                <input type="text" value="1234567890987654321" disabled />
              </div>
              <div class="container_input">
                <label for="" style="top: 0rem; z-index: 100"
                  >Clabe de Rastreo o Referencia:
                </label>
                <input
                  type="text"
                  placeholder="xxxx-xxxx-xxxx"
                  ref="inputReference"
                />
              </div>
            </div>
            <div
              style="display: flex; justify-content: space-between; width: 100%"
              v-if="isEfectivo"
            >
              <h3>
                Pagar en el lugar: $
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
                @click="checkReserve"
              >
                Finalizar Reserva
              </button>
            </div>
            <div
              style="display: flex; justify-content: space-between; width: 100%"
              v-else
            >
              <h3>
                Pagar Anticipo: $
                {{
                  selectedPrice == 1
                    ? (experiencia?.single_price ?? 0) / 2
                    : (experiencia?.promo_price ?? 0) / 2
                }}
                MXN
              </h3>
            -->
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
            @click="checkReserve"
          >
            Finalizar Reserva
          </button>
        </div>
      </div>
      <!--
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
        -->
    </aside>
    <div id="cerrarModal" v-if="showModalReserva" @click="toggleModal"></div>
  </ClientOnly>
</template>

<style scoped>
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
