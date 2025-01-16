<template>
  <div class="container_modal" :class="{ active: isActiveModal }">
    <article>
      <h3>Mi Cuenta: {{ nameUser }}</h3>
      <div class="seccion_ajustes">
        <label for="">Nombre</label>
        <input type="text" :value="nameUser" disabled />
      </div>
      <div class="seccion_ajustes">
        <label for="">Contraseña</label>
        <input
          type="password"
          :value="contrasenaUser"
          placeholder="Coloque una nueva contraseña."
        />
      </div>
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
            <button @click="removeImage" v-if="imagePreview" id="eliminar">
              Cancelar
            </button>
            <button @click="onSubmit" v-if="imagePreview" id="cargar">
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
const { nameUser, contrasenaUser } = useInfoUser();

import { ref } from "vue";

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
const onSubmit = () => {
  if (imageFile.value) {
    // Aquí enviarías la imagen a tu servidor o realizarías la acción necesaria
    console.log("Imagen lista para enviar:", imageFile.value);
  } else {
    console.log("No se seleccionó una imagen");
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

.seccion_ajustes {
  position: relative;
  margin: 4dvh 0;
  display: flex;
  width: 100%;
  height: fit-content;
  gap: 1rem;
}
details.seccion_ajustes {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
details.seccion_ajustes summary {
  color: #6d3e0b !important;
}
details.seccion_ajustes .container_imagen {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 2%;
}
details.seccion_ajustes .container_imagen label {
  display: none;
}
.seccion_ajustes label {
  width: fit-content;
  position: absolute;
  top: -1.5dvh;
  left: 0;
  background: #b47f4a;
  color: #fff;
  padding: 0.3rem;
  border-radius: 5px;
}

.seccion_ajustes input {
  padding: 1rem;
  font-size: 1rem;
  border: 2px solid #b47f4a;
  border-radius: 10px;
}

.seccion_ajustes input[type="text"],
.seccion_ajustes input[type="password"] {
  width: 100%;
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
@media screen and (max-width: 1000px) {
  details.seccion_ajustes .container_imagen {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>
