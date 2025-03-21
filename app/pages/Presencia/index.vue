<template>
  <main>
    <h2 class="titulo text_color_secundario">Nuestra Presencia</h2>
    <div class="container_contacto">
      <details open class="container_info">
        <summary class="main_title">Culiacán, Sinaloa</summary>
        <ul>
          <li>(667) 581-3007</li>
          <li>(667) 208-5200</li>
          <li>(667) 107-0607</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Evelia Álvarez</li>
            <li>Rosa Araujo</li>
            <li>Silvia Ibarra</li>
            <li>Vanessa Castañeda</li>
            <li>Carmina Beltrán</li>
            <li>Sandra Ibarra</li>
            <li>Nereyda Sillas</li>
            <li>Anali Espinoza</li>
            <li>Dalia Aguirre</li>
            <li>Candelaria Rosales</li>
            <li>Anabel Monarrez</li>
            <li>Flor Núñez</li>
            <li>Irma Villa</li>
            <li>Claudia de la Cruz G</li>
            <li>Rosa Angelica</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Guadalajara, Jalisco</summary>
        <ul>
          <li>(33) 3117-9147</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Claudia Lindoro</li>
            <li>Yair Miranda</li>
            <li>Moises Gómez</li>
            <li>Samantha Acosta</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Chihuahua</summary>
        <ul>
          <li>(667) 107-0607</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Elisa Cano</li>
            <li>Veronica Contreras</li>
            <li>Lluixochitl Villa</li>
            <li>Ramiro Garza</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Monterrey</summary>
        <ul>
          <li>(667) 216-0290</li>
          <li>(811) 639-7047</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>María Luisa Melchor</li>
            <li>Irma Paredes</li>
            <li>Fernanda Paredes</li>
            <li>Jaziel Castellanos</li>
            <li>Ma. Guadalupe Melchor</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Mexicali, B.C</summary>
        <ul>
          <li>(686) 530-8949</li>
          <li>(667) 396-2340</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Cesar Olivas</li>
            <li>Amairani Figueroa</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Ensenada, B.C</summary>
        <ul>
          <li>(646) 400-0968</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Wanda Leoncioni</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Mazatlán y Nayarit</summary>
        <ul>
          <li>(669) 168-5026</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Alicia Gómez</li>
          </ul>
        </details>
      </details>
    </div>
    <hr class="bg_color_secundario" />
    <div class="container_contacto_inter">
      <details open class="container_info">
        <summary class="main_title">Los Ángeles, California</summary>
        <ul>
          <li>+1 (626) 377-2898</li>
          <li>+1 (818) 267-6315</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Liliana Soto</li>
            <li>Daniel Placencia</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">El Salvador</summary>
        <ul>
          <li>(503) 7541-4165</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Alma Guevara</li>
            <li>Isis Delgado</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Colombia</summary>
        <ul>
          <li>320-2039176</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Luis Chacón</li>
            <li>Natally Venegas</li>
          </ul>
        </details>
      </details>
      <details open class="container_info">
        <summary class="main_title">Argentina</summary>
        <ul>
          <li>+54 9112394-6086</li>
        </ul>
        <details open class="personal">
          <summary>Personal Capacitado</summary>
          <ul>
            <li>Fanny Barraza</li>
          </ul>
        </details>
      </details>
    </div>
  </main>
</template>

<script setup lang="ts">
const { isChecked } = useDespegablemenu();
useHead({
  title: "Nuestra Presencia",
});

onMounted(() => {
  isChecked.value = false;
});
</script>

<style scoped>
main {
  width: 100%;
  padding: 150px 10%;
  display: flex;
  flex-direction: column;
}

.container_contacto,
.container_contacto_inter {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: start;
  margin-block: 2%;
}

.container_info {
  width: fit-content;
  min-width: 15rem;
  min-height: 20rem;
  height: fit-content;
  padding: 2rem;
  border: solid 2px #b47f4a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_contacto .container_info:first-child {
  width: 60%;
}
.container_contacto .container_info:nth-child(4) {
  width: 30%;
}

.container_contacto .container_info:first-child ul,
.container_contacto .container_info:nth-child(4) ul {
  width: 100%;
  display: flex !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
}
.main_title {
  width: fit-content;
  padding-bottom: 0.5rem;
  border-bottom: #b47f4a solid 2px;
  cursor: pointer;
}

.personal {
  margin-top: 1rem;
}
ul {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
  list-style: none;
}
.personal li::after {
  content: ".";
}
hr {
  opacity: 0.5;
}
@media screen and (max-width: 600px) {
  .container_info,
  .container_contacto .container_info:first-child,
  .container_contacto .container_info:nth-child(4) {
    width: 100%;
  }
}
</style>
