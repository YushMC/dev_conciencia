<template>
  <div class="container_main_dashboard">
    <h1>Hola, Roberto Gomez</h1>
    <img src="" alt="" />
    <div class="container_sections">
      <section>
        <div class="container_asides_horizontal">
          <aside>
            <h3>Editar Perfil</h3>
            <ul>
              <li>Información personal</li>
              <li>Métodos de acceso</li>
              <li>Métodos de pago</li>
            </ul>
            <router-link to="#">Cuenta</router-link>
          </aside>
          <aside>
            <h3>Consultar Expediente</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores odit, enim placeat iusto possimus nulla omnis.
              Perferendis explicabo impedit mollitia.
            </p>
            <a href="#">Solicitar</a>
          </aside>
          <aside>
            <h3>Reservar Meditación</h3>
            <p>
              Reserva una meditación privada o <br />asiste a uno de nuestros
              eventos!
            </p>
            <router-link to="#">Reservar ahora</router-link>
          </aside>
        </div>
        <div class="container_form">
          <details>
            <summary class="category">
              Cuestionarios activos <span>1</span>
              <div class="important">&nbsp;</div>
            </summary>
            <form action="">
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
              <label for="">
                1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis, ad?
              </label>
              <input type="text" />
            </form>
          </details>
        </div>
        <div class="container_form">
          <details open>
            <summary class="category">
              Comentario
              <div class="important">&nbsp;</div>
            </summary>
            <label for="">
              Deja tu comentario acerca de:
              <span>Meditación Guadalajara</span>
            </label>
            <textarea name="" id=""></textarea>
          </details>
        </div>
      </section>
      <section>
        <aside>
          <h3 class="category">Notificaciones</h3>
          <details open>
            <summary>
              Nuevas Notificaciones: <span> 1</span>
              <div class="important">&nbsp;</div>
            </summary>
            <ul>
              <li>Soporte: Solicitud aprovada.</li>
              <hr />
            </ul>
          </details>
        </aside>
        <aside>
          <h3 class="category">Historial de asistencias</h3>
          <details open>
            <summary>Selecciona un mes o año para ver tu historial:</summary>
            <div class="container_fechas">
              <select id="month" name="month">
                <option value="01">Enero</option>
                <option value="02">Febrero</option>
                <option value="03">Marzo</option>
                <option value="04">Abril</option>
                <option value="05">Mayo</option>
                <option value="06">Junio</option>
                <option value="07">Julio</option>
                <option value="08">Agosto</option>
                <option value="09">Septiembre</option>
                <option value="10">Octubre</option>
                <option value="11">Noviembre</option>
                <option value="12">Diciembre</option>
              </select>
              <select id="year" name="year">
                <option value="2025">2025</option>
              </select>
            </div>
            <table>
              <caption>
                Listado de Asistencias correspondiente a: Enero
              </caption>
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Lugar</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>09/01/2025</td>
                  <td>Guadalajara</td>
                </tr>
                <tr>
                  <td>09/01/2025</td>
                  <td>Guadalajara</td>
                </tr>
              </tbody>
            </table>
          </details>
        </aside>
        <aside v-if="rol === 'Administrador'">
          <h3 class="category">Panel de Administrador</h3>
          <p>Ingresa al panel de admistrador para funciones más avanzadas!</p>
          <a href="#" target="_blank">Ir al panel</a>
        </aside>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "accounts", // Nombre del layout que deseas usar
});

import { ref } from "vue";

const rol = ref<string>("Administrador");
</script>

<style scoped>
.container_main_dashboard {
  width: 100%;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
}
.container_sections {
  width: 100%;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
}
.container_sections section {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
.container_sections section:first-child {
  height: 100%;

  overflow-x: hidden;
  overflow-y: auto;
}
.container_sections section .container_asides_horizontal {
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
  flex-wrap: wrap;
}
.container_sections section aside {
  background: #ffffffb7;
  height: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 10px;
  backdrop-filter: blur(20px);
}

.container_sections section:nth-child(2) aside {
  width: 100%;
  padding: 5%;
}

aside h3 {
  color: #b47f4a;
}
aside p {
  color: #553b21;
}
aside ul {
  margin: 0 1rem;
}
.container_asides_horizontal aside p,
.container_asides_horizontal aside ul {
  height: 10dvh;
  overflow-y: auto;
}
aside li {
  color: #553b21;
}
aside details {
  overflow-x: auto;
}
summary {
  position: relative;
}
aside details ul {
  margin: 2%;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
aside details li {
  background: #b47f4adc;
  padding: 2%;
  color: #fff;
  border-radius: 10px;
}
aside a {
  width: 100%;
  padding: 0.5rem;
  background: #b47f4a;
  color: #fff;
  border-radius: 10px;
  text-align: center;
}
/* Histyorial */
aside .container_fechas {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
aside .container_fechas select {
  background: none;
  border: none;
  border-bottom: 2px solid #885e34;
  padding: 0.5rem;
  margin: 1% 0;
  color: #553b21;
}
aside table {
  width: 2rem !important;
  border-radius: 10px;
  font-size: 1em;
  font-family: sans-serif;
  min-width: 450px;
  box-shadow: 0 0 5px 10px rgba(0, 0, 0, 0.034);
}
aside table caption {
  margin-bottom: 2%;
  color: #573d24;
}
aside table thead {
  border-radius: 10px;
}
aside table thead tr {
  background-color: #b47f4a;
  color: #ffffff;
  text-align: middle;
}
aside table th,
aside table td {
  padding: 2%;
}
aside table tr:nth-of-type(even) {
  background: #b47f4a18;
}
/*Clase para las categorias */
.category {
  width: fit-content;
  border-bottom: solid 2px #b47f4a;
  padding: 0.1rem 1rem;
  line-height: 1.5;
  color: #b47f4a;
  opacity: 0.8;
  text-align: center;
  text-wrap: nowrap;
  position: relative;
}
.important {
  position: absolute;
  top: 0;
  right: 0;
  width: 1rem;
  height: 1rem;
  background: red;
  border-radius: 100%;
  transform: scale(0.5);
  opacity: 1;
}
.container_form {
  width: 100%;
  padding: 2%;
  border-radius: 10px;
  background: #ffffffb7;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_form form {
  margin-top: 2%;
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_form details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.container_form details label {
  margin-top: 1%;
}
.container_form details textarea {
  min-width: 50%;
  margin-top: 1%;
  max-width: 100%;
  max-width: 100%;
  min-height: 10dvh;
}

@supports (field-sizing: content) {
  .container_form details textarea {
    width: 100%;
    resize: none;
    field-sizing: content;
  }
}
</style>
