<template>
  <main class="container_login">
    <section id="content_info">
      <picture>
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
      <div class="container_form">
        <form action="" id="logIn" :class="{ active: !isActiveSignUp }">
          <h4>Iniciar Sesión</h4>
          <div class="container_input">
            <input
              type="text"
              id="user"
              v-model="meditator.user"
              placeholder="Ingresa tu Usuario"
            />
            <label for="user">Usuario</label>
          </div>
          <div class="container_input">
            <input
              type="password"
              id="contra1"
              v-model="meditator.password"
              placeholder="Ingresa tu Contraseña"
            />
            <label for="contra1">Contraseña</label>
          </div>
          <button @click.prevent="login" class="signUp">Entrar</button>
        </form>
      </div>
    </section>
    <div class="container_form">
      <form action="" id="signUp" :class="{ active_absolute: isActiveSignUp }">
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
          <input
            type="text"
            id="tel"
            v-model="meditator.phone"
            placeholder="Ingresa un Número Telefónico"
          />
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
        <div class="container_input">
          <select v-model="meditator.state">
            <option value="Jalisco">Jalisco</option>
            <option value="Guanajuato">Guanajuato</option>
            <option value="Michoacan">Michoacán</option>
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
            type="password"
            id="contra2"
            v-model="meditator.password"
            placeholder="Ingresa tu Contraseña"
            :class="{ error: isErrorContra }"
            minlength="6"
            pattern=""
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
            type="password"
            id="contra3"
            v-model="contrasena_2"
            placeholder="Repite tu Contraseña"
            :class="{ error: isErrorContra }"
            minlength="6"
          />

          <label for="contra3">Repetir Contraseña</label>
        </div>
        <button class="signUp" @click.prevent="validarFormulario">
          Crear Cuenta
        </button>
      </form>
    </div>
  </main>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "login", // Nombre del layout que deseas usar
});
import { useHead } from "unhead";
import { ref, onBeforeMount } from "vue";

const textTittle = ref("Iniciar Sesión");

useHead({
  title: textTittle.value,
});

watch(textTittle, (newValue) => {
  useHead({
    title: textTittle.value,
  });
});
import useInfoUser from "~/composables/useInfoUser";

const { decodedToken } = useInfoUser();
import { useRouter } from "vue-router";

const router = useRouter();
const isActiveSignUp = ref(false);

const meditator = ref<Meditator>(new Meditator());

const contrasena_2 = ref("");

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
import { Meditator } from "~/store/meditator";

const authStore = useAuthStore();

const login = () => {
  authStore.login(meditator.value);
  router.push("/cuenta");
};

const errores = ref<string[]>([]);

const validarFormulario = () => {
  errores.value = []; // Reiniciar errores
  /*
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
  }
    */
  register();
};

const register = () => {
  if (meditator.value.password === contrasena_2.value) {
    if (!imageFile.value) {
      window.alert("Por favor, selecciona una imagen antes de continuar.");
      return;
    }

    authStore.register(
      meditator.value,
      imageFile.value // Ahora se asegura que no sea null
    );
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

onBeforeMount(() => {
  //if (decodedToken.value) return router.push("/cuenta");
});
</script>

<style scoped>
.container_login {
  position: relative;
  width: 100%;
  height: 100dvh;
  background-image: url(https://borjavilaseca.com/wp-content/uploads/2022/11/colton-sturgeon-6KkYYqTEDwQ-unsplash-scaled.jpg);
  display: grid;
  grid-template-columns: 2fr 5fr;
  gap: 2rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  opacity: 1; /* Establecer la visibilidad */
  transition: opacity 0.3s linear; /* Aplicar transición a opacity */
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
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(1px);
  padding: 1rem;
  border-radius: 10px;
  transition: all 0.8s linear;
}
#logIn {
  position: absolute;
  top: 0;
  left: -50dvw;
  opacity: 0;
  visibility: hidden;
}

#logIn.active {
  width: 100%;
  opacity: 1;
  visibility: visible;
  position: relative;
  top: 0;
  left: 0;
}

form .container_input {
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
}
.container_input:nth-child(2) {
  margin-top: 2%;
}
.container_input input {
  margin-top: 1dvh;

  border-radius: 5px;
  border: #b47f4a 2px solid;
  background: none;
  font-size: 1.2rem;
  outline: none;
  transition: all 0.3s linear;
  padding: 1%;
}
.container_input input:focus {
  background: #ffffff71;
  backdrop-filter: blur(50px);
  padding: 4%;
  padding-top: 3dvh;
}
.container_input input ~ label {
  position: absolute;
  top: 4dvh;
  left: 2px;
  color: #b47f4a;
  transition: all 0.3s linear;
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
}
.container_input input:focus ~ label {
  top: 0;
  left: 0;
  z-index: 100;
  background: #ffffffef;
  padding: 1%;
  border-radius: 5px;
  backdrop-filter: blur(50px);
  border: #b47f4a 2px solid;
  opacity: 1;
  visibility: visible;
}
.container_login form input ~ label.active {
  position: relative !important;
}
form button,
.signUp {
  background: #b47f4a !important;
  cursor: pointer;
}

.signUp {
  color: #fff !important;
}
#signUp {
  position: relative;
  max-height: 90dvh;
  width: 50%;
  margin: auto;
  opacity: 0;
  visibility: hidden;
  overflow-y: auto;
}
#signUp.active_absolute {
  opacity: 1;
  visibility: visible;
  position: relative;
  z-index: 100;
  background: #ffffff9a;
  backdrop-filter: blur(10px);
}
#signUp h4 {
  color: #b47f4a;
}

#signUp button {
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

.container_input select {
  margin: 2% 0;
  padding: 2% 0;
  background: none;
  border: none;
  border-bottom: 4px solid #b47f4a;
  color: #694929;
  outline: none;
}
</style>
