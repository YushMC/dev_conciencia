<template>
  <div class="container_modal" :class="{ active: isActiveModal }">
    <article>
      <h3>Mi Cuenta:</h3>
      <div class="seccion_ajustes">
        <label for="">Nombre</label>
        <input type="text" v-model="meditator.name" />
      </div>
      <div class="seccion_ajustes">
        <label for="">Correo Electrónico</label>
        <input type="email" v-model="meditator.email" />
      </div>
      <div class="seccion_ajustes">
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

          <input type="text" v-model="phoneWithoutCountryCode" />
          <label for="user">Número Telefónico</label>
        </div>
      </div>
      <div class="container_input">
        <input
          type="date"
          id="date"
          placeholder=""
          v-model="meditator.birthdate"
        />
        <label for="date"> Fecha de Nacimiento </label>
      </div>
      <div class="seccion_ajustes">
        <button @click="updateInfo">Guardar Cambios</button>
      </div>
      <details class="seccion_ajustes">
        <summary>Cambiar Contraseña</summary>
        <div class="seccion_ajustes">
          <label for="">Contraseña Actual</label>
          <input
            :type="isPasswordVisible ? 'text' : 'password'"
            placeholder="Coloque la contraseña actual."
            v-model="meditator.password"
          />
          <img
            :src="isPasswordVisible ? hiddenIcon : visibleIcon"
            alt="icono"
            class="icon_eye"
            @click="togglePasswordVisibility"
          />
        </div>
        <div class="seccion_ajustes">
          <label for="">Nueva Contraseña</label>
          <input
            :type="isNewPasswordVisible ? 'text' : 'password'"
            placeholder="Coloque una nueva contraseña."
            v-model="newPsw"
          />
          <img
            :src="isNewPasswordVisible ? hiddenIcon : visibleIcon"
            alt="icono"
            class="icon_eye"
            @click="toggleNewPasswordVisibility"
          />
        </div>

        <button @click="updatePsw">Cambiar Contraseña</button>
      </details>

      <details class="seccion_ajustes">
        <summary>Editar Imagen de perfil</summary>
        <div class="container_imagen">
          <div id="container_buttos_file">
            <label for="">Imagen de Perfil</label>
            <button
              @click="triggerFileInput"
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

            <button @click="triggerFileInput" v-if="imagePreview" id="cambiar">
              Cambiar archivo
            </button>
            <button
              @click="removeImage"
              v-if="imagePreview !== meditator.photo"
              id="eliminar"
            >
              Cancelar
            </button>
            <button
              @click="onSubmit"
              v-if="imagePreview !== meditator.photo"
              id="cargar"
            >
              Cargar
            </button>
          </div>

          <!-- Imagen de previsualización -->
          <div v-if="imagePreview" id="previewImg">
            <h5>Vista Previa:</h5>
            <img :src="imagePreview" alt="Previsualización de la imagen" />
          </div>
        </div>
      </details>
    </article>
  </div>
  <div id="cerrarModal" v-if="isActiveModal" @click="toogleStateModal"></div>
</template>

<script setup lang="ts">
const { toogleStateModal, isActiveModal } = useModalAccount();
const { selectedPrefijo, countryList } = useCountryList();
import { ref, watch } from "vue";
import Swal from "sweetalert2";

const { meditator } = useInfoUser();

import hiddenIcon from "~/assets/gui/hidden.svg";
import visibleIcon from "~/assets/gui/visible.svg";

const isPasswordVisible = ref(false);
const isNewPasswordVisible = ref(false);

const togglePasswordVisibility = () => {
  isPasswordVisible.value = !isPasswordVisible.value;
};

const toggleNewPasswordVisibility = () => {
  isNewPasswordVisible.value = !isNewPasswordVisible.value;
};

const phoneWithoutCountryCode = ref(meditator.value.phone.slice(-10));
selectedPrefijo.value = meditator.value.phone.slice(0, -10);

const newPsw = ref<string>("");

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
  if (input.files && input.files[0]) {
    // Obtenemos el archivo
    const file = input.files[0];
    imageFile.value = file;
    fileName.value = file.name; // Asignar el nombre del archivo al botón

    // Creamos una URL temporal para la imagen seleccionada
    const reader = new FileReader();
    reader.onload = () => {
      imagePreview.value = reader.result as string; // Establecemos la previsualización
    };
    reader.readAsDataURL(file); // Leemos el archivo como URL
  }
};

// Función para manejar el envío del formulario
const onSubmit = async () => {
  if (!imageFile.value) {
    return;
  }
  try {
    Swal.fire({
      icon: "warning",
      title: "Confirmar cambios",
      text: "¿Estás seguro de que deseas guardar los cambios realizados?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        if (imageFile.value) {
          await authStore.updatePhoto(imageFile.value);
        }
      } else {
        Swal.fire("Operación cancelada", "", "info");
      }
    });
  } catch (e) {
    Swal.fire("Error", "No se pudo guardar la imagen", "error");
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

import { useAuthStore } from "./../../store/auth";

const authStore = useAuthStore();

const updateInfo = async () => {
  try {
    Swal.fire({
      icon: "warning",
      title: "Confirmar cambios",
      text: "¿Estás seguro de que deseas guardar los cambios realizados?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        meditator.value.phone =
          selectedPrefijo.value + phoneWithoutCountryCode.value;
        await authStore.update(meditator.value);
      } else {
        Swal.fire("Operación concelada.", "", "info");
      }
    });
  } catch (e) {
    Swal.fire("Error", "No se pudo actualizar la información.", "error");
  }
};

const updatePsw = async () => {
  try {
    Swal.fire({
      icon: "warning",
      title: "Confirmar cambios",
      text: "¿Estás seguro de que deseas guardar los cambios realizados a la contraseña?",
      showCancelButton: true,
      confirmButtonText: "Continuar",
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        meditator.value.phone =
          selectedPrefijo.value + phoneWithoutCountryCode.value;
        await authStore.updatePsw(meditator.value, newPsw.value);
      } else {
        Swal.fire("Operación cancelada.", "", "info");
      }
    });
  } catch (e) {
    Swal.fire("Error", "No se pudo guardar la contraseña.", "error");
  }
};

onMounted(() => {
  if (meditator.value.photo) {
    imagePreview.value = meditator.value.photo;
  }
});
</script>

<style scoped>
/* modal */

#cerrarModal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100dvh;
  z-index: 90;
  backdrop-filter: blur(5px);
}
.container_modal {
  position: fixed;
  width: 60%;
  height: 90%;
  top: 5%;
  left: 20%;
  margin: auto;
  z-index: 100;
  background: #f8f3ee;
  padding: 2%;
  border: solid 2px #b47f4a;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.3);
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;
  transform: scale(0);
}

.container_modal.active {
  opacity: 1;
  visibility: visible;
  transform: scale(1);

  /*
  animation: 0.3s linear bounce;
  */
}

.seccion_ajustes input[type="file"] {
  width: 100%;
  height: 7dvh;
}
.seccion_ajustes #container_buttos_file {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.seccion_ajustes #previewImg {
  width: 100%;
  padding: 2%;
  overflow: hidden;
  border: #b47f4a8e solid 2px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
}
.seccion_ajustes #previewImg h5 {
  color: #b47f4a;
  font-size: 1.5rem;
  border-bottom: solid 2px #b47f4a;
  width: fit-content;
}

.seccion_ajustes #previewImg img {
  width: 100%;
  aspect-ratio: 1/1;
  margin-top: 2%;
  object-fit: contain;
  border-radius: 10px;
  object-position: center;
}

.seccion_ajustes #eliminar {
  background: rgb(150, 1, 1);
  padding: 2%;
  color: #fff;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.seccion_ajustes #cambiar {
  background: #627daf;
  color: #fff;
  padding: 2%;
  border-radius: 5px;
  border: none;
  cursor: pointer;
}
.seccion_ajustes #selector_archivo {
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
.seccion_ajustes #selector_archivo.loaded {
  background: none;
  border: #b47f4a solid 2px;
  color: #000000;
  pointer-events: none;
  opacity: 0.5;
  cursor: not-allowed !important;
}
.seccion_ajustes #cargar {
  background: #b47f4a;
  color: #fff;
  padding: 2%;
  border: none;
  border-radius: 5px;
}
.seccion_ajustes_2 {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.container_input {
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
@media screen and (max-width: 1000px) {
  details.seccion_ajustes .container_imagen {
    display: flex;
    flex-direction: column-reverse;
  }
}
@media screen and (max-width: 800px) {
  .container_modal {
    width: 90%;
    left: 5%;
    height: 80%;
  }
}
</style>
