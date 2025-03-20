<template>
  <main class="container_login">
    <section id="content_info">
      <picture @click="router.push('/')" style="cursor: pointer">
        <img src="/assets/logo_without_bg.png" alt="" />
      </picture>
      <h2>
        <span v-if="!isActiveSignUp">Bienvenido de vuelta!</span
        ><span v-else>Bienvenido a Conciencia del Ser Divino!</span>
      </h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi,
        aliquid.
      </p>
      <h5 style="margin: 2% 0; opacity: 0.5" v-if="!isActiveSignUp">
        Si no tienes cuenta, registrate!
      </h5>
      <button @click="toggleSignUp" class="signUp">
        <span v-if="!isActiveSignUp">Crear Cuenta</span>
        <span v-else>Iniciar Sesión</span>
      </button>
    </section>
    <div class="container_form">
      <form
        action=""
        id="signUp"
        :class="{ active: isActiveSignUp }"
        :style="{ paddingTop: paddingSignUp }"
      >
        <h4>Crear Cuenta</h4>
        <div class="container_input">
          <input
            type="text"
            id="name"
            v-model="meditator.name"
            placeholder="Ingresa tu Nombre"
          />

          <label for="name"> Nombre </label>
        </div>
        <div class="container_input">
          <input
            type="email"
            id="correo"
            v-model="meditator.email"
            placeholder="Ingresa tu Correo Electrónico"
          />
          <label for="correo"> Correo Electrónico </label>
        </div>
        <div class="container_input">
          <div class="codeNumber">
            <select v-model="selectedPrefijo" v-if="countryList">
              <option
                v-for="country in countryList"
                :key="country.id"
                :value="country.lada"
              >
                {{ country.lada }}
              </option>
            </select>
            <input
              type="text"
              id="tel2"
              v-model="meditator.phone"
              placeholder="Ingresa un Número Telefónico"
            />
          </div>
          <label for="tel"> Teléfono </label>
        </div>
        <div class="container_input">
          <div class="container_imagen">
            <div id="container_buttos_file">
              <label for="">Imagen de Perfil</label>
              <button
                @click.prevent="triggerFileInput"
                id="selector_archivo"
                :class="{ loaded: isLoadedFile }"
              >
                {{ fileName || "Seleccionar archivo" }}
              </button>
              <input
                type="file"
                accept="image/*"
                @change="onImageChange"
                ref="fileInput"
                style="display: none"
              />

              <button
                @click.prevent="triggerFileInput"
                v-if="imagePreview"
                id="cambiar"
              >
                Cambiar archivo
              </button>
              <button
                @click.prevent="removeImage"
                v-if="imagePreview"
                id="eliminar"
              >
                Cancelar
              </button>
            </div>

            <!-- Imagen de previsualización -->
            <div v-if="imagePreview" id="previewImg">
              <h5>Vista Previa:</h5>
              <img :src="imagePreview" alt="Previsualización de la imagen" />
            </div>
          </div>
          <label for="" style="margin-top: 2%">Foto de Perfil</label>
        </div>
        <div v-if="isloadingState">Cargando</div>
        <div class="container_input" v-else>
          <select v-model="meditator.state">
            <option
              :value="state.id"
              v-for="state in statesData"
              :key="state.id"
            >
              {{ state.name }}
            </option>
          </select>
          <label for="">Estado:</label>
        </div>
        <div class="container_input">
          <select v-model="meditator.city">
            <option value="Guadalajara">Guadalajara</option>
          </select>
          <label for="">Ciudad:</label>
        </div>
        <label for="" style="text-align: left">Fecha de Nacimiento</label>
        <div class="container_input">
          <input
            type="date"
            id="date"
            v-model="meditator.birthdate"
            placeholder=""
          />
          <label for="date"> Fecha de Nacimiento </label>
        </div>
        <div class="container_input">
          <h6 style="color: red; margin-top: 1%">
            <span v-if="isShortContra"
              >La contraseña debe tener al menos 6 caracteres.</span
            >
          </h6>
          <input
            :type="isPasswordVisibleCreate ? 'text' : 'password'"
            id="contra2"
            v-model="meditator.password"
            placeholder="Ingresa tu Contraseña"
            :class="{ error: isErrorContra }"
            minlength="6"
            pattern=""
          />
          <img
            :src="isPasswordVisibleCreate ? hiddenIcon : visibleIcon"
            alt="icono"
            class="icon_eye"
            @click="togglePasswordVisibilityCreate"
          />
          <label for="contra2">Contraseña</label>
        </div>
        <div class="container_input">
          <h6 style="color: red; margin-top: 1%">
            <span v-if="isShortContra"
              >La contraseña debe tener al menos 6 caracteres.</span
            >
          </h6>
          <input
            :type="isPasswordVisibleCreate2 ? 'text' : 'password'"
            id="contra3"
            v-model="contrasena_2"
            placeholder="Repite tu Contraseña"
            :class="{ error: isErrorContra }"
            minlength="6"
          />
          <img
            :src="isPasswordVisibleCreate2 ? hiddenIcon : visibleIcon"
            alt="icono"
            class="icon_eye"
            @click="togglePasswordVisibilityCreate2"
          />
          <label for="contra3">Repetir Contraseña</label>
        </div>
        <button class="signUp" @click.prevent="validarFormulario">
          Crear Cuenta
        </button>
      </form>
      <form action="" id="logIn" :class="{ active: !isActiveSignUp }">
        <h4>Iniciar Sesión</h4>
        <div class="container_input">
          <div class="codeNumber">
            <select v-model="selectedPrefijo" v-if="countryList">
              <option
                v-for="country in countryList"
                :key="country.id"
                :value="country.lada"
              >
                {{ country.lada }}
              </option>
            </select>
            <input
              type="text"
              id="tel"
              v-model="meditator.phone"
              placeholder="Ingresa un Número Telefónico"
            />
            <label for="user">Número Telefónico</label>
          </div>
        </div>
        <div class="container_input">
          <input
            :type="isPasswordVisible ? 'text' : 'password'"
            id="contra1"
            v-model="meditator.password"
            placeholder="Ingresa tu Contraseña"
          />
          <img
            :src="isPasswordVisible ? hiddenIcon : visibleIcon"
            alt="icono"
            class="icon_eye"
            @click="togglePasswordVisibility"
          />
          <label for="contra1">Contraseña</label>
        </div>
        <button @click.prevent="login" class="signUp">Entrar</button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login", // Nombre del layout que deseas usar
});
const { countryList, selectedPrefijo } = useCountryList();
import { useHead } from "unhead";
import { ref, onBeforeMount } from "vue";

import hiddenIcon from "~/assets/gui/hidden.svg";
import visibleIcon from "~/assets/gui/visible.svg";

const textTittle = ref("Iniciar Sesión");

useHead({
  title: textTittle.value,
});

watch(textTittle, (newValue) => {
  useHead({
    title: textTittle.value,
  });
});
import Swal from "sweetalert2";

const { setToken } = useInfoUser();
const { apiUrl } = useApiUrl();

import { useRouter } from "vue-router";
const router = useRouter();
const isActiveSignUp = ref(false);

const meditator = ref<Meditator>(new Meditator());

const contrasena_2 = ref("");
const isPasswordVisible = ref(false);
const isPasswordVisibleCreate = ref(false);
const isPasswordVisibleCreate2 = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const togglePasswordVisibilityCreate = () => {
  isPasswordVisibleCreate.value = !isPasswordVisibleCreate.value;
};

const togglePasswordVisibilityCreate2 = () => {
  isPasswordVisibleCreate2.value = !isPasswordVisibleCreate2.value;
};

const isErrorContra = ref(false);
const isShortContra = ref(false);

watch(contrasena_2, (newValue) => {
  if (contrasena_2.value !== meditator.value.password) {
    isShortContra.value = true;
  } else {
    isShortContra.value = false;
  }
});

const toggleSignUp = () => {
  isActiveSignUp.value = !isActiveSignUp.value;
  if (isActiveSignUp.value) {
    textTittle.value = "Crear Cuenta";
  } else {
    textTittle.value = "Iniciar Sesión";
  }
};

import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();

const login = async () => {
  if (!meditator.value.user.trim() || !meditator.value.password.trim()) {
    Swal.fire({
      title: "Error",
      text: "Por favor, llena todos los campos.",
      icon: "error",
    });
    return;
  }
  meditator.phone = selectedPrefijo.value + meditator.phone;
  const response = await authStore.login(meditator.value);

  if (response.success) {
    await setToken();
    router.back();
  } else {
    meditator.value.phone = meditator.value.phone.slice(-10);
  }
};

const errores = ref<string[]>([]);

const validarFormulario = () => {
  errores.value = []; // Reiniciar errores

  if (!meditator.value.email.trim())
    errores.value.push("El correo electrónico es obligatorio.");
  if (!meditator.value.password.trim())
    errores.value.push("La contraseña es obligatoria.");
  if (!meditator.value.name.trim())
    errores.value.push("El nombre es obligatorio.");
  if (!meditator.value.phone.trim())
    errores.value.push("El teléfono es obligatorio.");
  if (!meditator.value.birthdate.trim())
    errores.value.push("La fecha de nacimiento es obligatoria.");
  if (!meditator.value.state.trim())
    errores.value.push("El estado es obligatorio.");
  if (!meditator.value.city.trim())
    errores.value.push("La ciudad es obligatoria.");
  if (imageFile.value === null) errores.value.push("No hay archivo");

  if (errores.value.length === 0) {
    register();
  } else {
    Swal.fire({
      title: "Error",
      text: "Por favor, llena los campos.",
      icon: "error",
    });
  }
};

const register = async () => {
  if (meditator.value.password === contrasena_2.value) {
    if (!imageFile.value) {
      window.alert("Por favor, selecciona una imagen antes de continuar.");
      return;
    }
    meditator.phone = selectedPrefijo.value + meditator.phone;
    await authStore.register(
      meditator.value,
      imageFile.value // Ahora se asegura que no sea null
    );
    setToken();
  }
};

// Estado para almacenar la imagen seleccionada
const imagePreview = ref<string | null>(null);
const imageFile = ref<File | null>(null);
const fileInput = ref<HTMLInputElement | null>(null);
const fileName = ref<string>("");

const isLoadedFile = ref<boolean>(false);

watch(fileName, (newValue, oldValue) => {
  isLoadedFile.value = !isLoadedFile.value;
});
// Función que se ejecuta cuando seleccionas una imagen
const onImageChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    const file = input.files[0];

    // Verificar que sea una imagen (opcional)
    if (!file.type.startsWith("image/")) {
      window.alert("Por favor, selecciona un archivo de imagen válido.");
      return;
    }

    imageFile.value = file;
    fileName.value = file.name;

    // Previsualización de la imagen
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result as string;
    };
    reader.readAsDataURL(file);
  }
};

// Función para eliminar la imagen seleccionada
const removeImage = () => {
  imagePreview.value = null;
  imageFile.value = null;

  // Reinicia el valor del input de archivo
  if (fileInput.value) {
    fileInput.value.value = ""; // Esto limpia el nombre del archivo seleccionado
    fileName.value = "Seleccionar archivo";
  }
};

// Función para abrir el input de archivo desde el botón "Cambiar archivo"
const triggerFileInput = () => {
  fileInput.value?.click();
};

// Creamos una referencia reactiva para almacenar el navegador detectado
const paddingSignUp = ref("0");
// Detectamos el navegador en el hook mounted()
onMounted(() => {
  if (process.client) {
    const userAgent = navigator.userAgent;

    if (userAgent.indexOf("Firefox") !== -1) {
      paddingSignUp.value = "22rem";
    } else {
      paddingSignUp.value = "1rem";
    }
  }
});

const statesData = ref<States[]>([]);

interface States {
  id: number;
  name: string;
  clave: string;
  // Agrega otras propiedades si existen en la API
}

interface ApiResponse {
  states: States[];
}
const isloadingState = ref(true);
const isloadingCitys = ref(false);

const searchStates = async () => {
  const response = await useFetch<ApiResponse>(apiUrl.value + "/state/list");

  if (response.error) {
    isloadingState.value = true;
    return false;
  }

  if (response.data.value) {
    statesData.value = response.data.value.states;
  }
  isloadingState.value = false;
};
onBeforeMount(() => {
  //if (decodedToken.value) return router.push("/cuenta");

  searchStates();
});
</script>

<style scoped>
.container_login {
  position: relative;
  width: 100%;
  height: 100dvh;
  background: #f8f3ee;
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 1; /* Establecer la visibilidad */
  transition: opacity 0.3s linear; /* Aplicar transición a opacity */
  overflow: hidden;
}

.container_login.active {
  opacity: 0.5; /* Cambiar la visibilidad */
}
#content_info {
  width: 100% !important;
  position: relative;
  height: 100%;
  z-index: 100;
  backdrop-filter: opacity(1%);
  padding: 4%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 98%
  );
}
#content_info h2 {
  color: #ad743a;
}
#content_info p {
  color: #b47f4a8e;
}
#content_info picture {
  width: 80% !important;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
#content_info picture img {
  width: 100%;
  filter: drop-shadow(4px 5px 10px #ffffff49);
}
#content_info button {
  width: 100%;
  border: 2px solid #b47f4a;
  padding: 2%;
  text-align: center;
  background: none;
  border-radius: 10px;
  margin: 2% 0;
  cursor: pointer;
  color: #b47f4a;
}
.container_form {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
}
form {
  margin: 2% 0;
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(1px);
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.8s linear;
}

form button,
.signUp {
  background: #b47f4a !important;
  cursor: pointer;
}

.signUp {
  color: #fff !important;
}

#logIn,
#signUp {
  position: absolute;
  width: fit-content;
  min-width: 50%;
  max-width: 80%;
  left: 100%;
  min-height: 0; /* Soluciona el recorte en Firefox */
  margin: auto;
  top: 10dvh !important;
  transition: all 0.3s ease-in-out;
  opacity: 0;
  visibility: hidden;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: space-evenly;
}
#signUp {
  height: 90dvh;
}
#logIn {
  height: 50dvh;
}
#logIn.active,
#signUp.active {
  overflow-y: auto;
  overflow-x: hidden;
  background: #ffffff71;
  position: relative;
  left: 0;
  min-height: 0; /* Soluciona el recorte en Firefox */
  top: -3dvh !important;
  opacity: 1;
  visibility: visible;
  backdrop-filter: blur(20px);
}

#signUp h4 {
  color: #b47f4a;
}

#signUp button,
#logIn button {
  background: #b47f4a;
  padding: 2%;
  margin: 2% 0;
  border: solid 2px #b47f4a;
  border-radius: 10px;
}

.container_imagen {
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin-top: 2%;
}
.container_imagen label {
  display: none;
}

#container_buttos_file {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
#previewImg {
  width: 40%;
  padding: 2%;
  overflow: hidden;
  border: #b47f4a8e solid 2px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: #ffffff71;
}
#previewImg h5 {
  color: #b47f4a;
  font-size: 1.5rem;
  border-bottom: solid 2px #b47f4a;
  width: fit-content;
}

#previewImg img {
  width: 100%;
  aspect-ratio: 1/1;
  margin-top: 2%;
  object-fit: contain;
  border-radius: 10px;
  object-position: center;
}

#eliminar {
  background: rgb(150, 1, 1) !important;
  padding: 2%;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
#cambiar {
  background: #627daf !important;
  color: #fff;
  padding: 2%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
#selector_archivo {
  padding: 2%;
  background: #c29364;
  border: none;
  border-radius: 10px;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  overflow: hidden;
  text-wrap: wrap;
  transition: all 0.3s linear;
}
#selector_archivo.loaded {
  background: none;
  border: #b47f4a solid 2px;
  color: #000000;
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed !important;
}
#cargar {
  background: #b47f4a;
  color: #fff;
  padding: 2%;
  border: none;
  border-radius: 5px;
}
.container_input input.error {
  border: solid 2px #e21b1b;
}

@media screen and (max-width: 600px) {
  .container_login {
    display: flex;
    flex-direction: column;
  }
  #content_info {
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 40%
    );
  }
  #content_info picture img {
    width: 10dvh !important;
  }

  #logIn.active,
  #signUp.active {
    background: #ffffffab;
  }

  #logIn.active {
    top: -10dvh !important;
  }
  #signUp.active {
    padding-top: 10% !important;
    width: 100%;
    height: 60dvh;
  }
}
</style>
