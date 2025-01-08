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
        <h5 class="active">
          Próximamente <span v-if="!isAvaible"><button>Reservar</button></span>
        </h5>
        <h5>¡En curso!</h5>
        <h5>Terminado</h5>
      </div>
    </div>
    <div class="container_imgs_evento bg_color_principal">
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
    <div class="container_description">
      <ul class="container_submenu">
        <li class="active">Descripción</li>
        <li>Locación</li>
        <li>Comentarios</li>
      </ul>
      <div class="container_info">
        <div class="content_description">
          <section>
            <h2 class="text_color_principal">Acerca de esta meditación</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis quas sequi quae id. Dicta, eos natus quibusdam tempora
              architecto illum suscipit impedit nostrum necessitatibus
              blanditiis ratione, laudantium omnis repudiandae eius nemo tempore
              odit reiciendis cupiditate. Nam debitis animi culpa est facere,
              similique libero tempora id amet ut esse expedita placeat, eveniet
              voluptatem magnam quibusdam! Pariatur earum vel saepe nemo commodi
              minima accusantium excepturi. Dignissimos necessitatibus
              perspiciatis doloremque nisi fugiat dicta nostrum amet iste earum
              maiores, mollitia, ipsum id ducimus. Aspernatur assumenda
              praesentium voluptatum doloribus recusandae, sunt sint iste
              ducimus! Sed itaque dicta sequi distinctio fuga, fugiat officia?
              Tenetur, illo quis.
            </p>
          </section>
          <section>
            <h2><span>$3,500</span> por persona</h2>
            <hr class="bg_color_secundario" />
            <div>
              <h5>Fecha</h5>
              <select name="" id="">
                <option value="">Marzo 30, 2025</option>
              </select>
            </div>
            <h5>Inivitado</h5>
            <select name="" id="">
              <option value="">1</option>
            </select>
            <h3>Total <span>$7,000</span></h3>
            <button>Reservar Ahora</button>
          </section>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isAvaible = ref<boolean>(false);

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
  justify-content: space-between;
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
.container_status h5 span button {
  width: 100%;
  border-radius: 10px;
  border: #b47f4a 2px solid;
  background: #b47f4a;
  color: #fff;
  padding: 2%;
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
.content_description section:last-child {
  border-radius: 10px;
  border: #b47f4a solid 2px;
  padding: 5%;
}

.content_description section:last-child h5,
.content_description section:last-child h2 {
  color: #b47f4a;
}
.content_description section:last-child h2 span {
  font-size: 4rem;
}
.content_description section:last-child hr {
  margin: 0;
}
.content_description section:last-child div {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.content_description section:last-child button {
  border: #b47f4a solid 2px;
  background: #b47f4a;
  color: #fff;
  padding: 2%;
  border-radius: 10px;
  font-size: 1rem;
}
.content_description section:last-child select {
  border: 2px solid transparent;
  border-bottom: #b47f4a solid 2px;
  background: none;
  color: #b47f4a;
  padding: 2%;
  font-weight: 600 !important;
}
.content_description section:last-child h3 {
  color: #b47f4a;
}
.content_description section:last-child h3 span {
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid #b47f4a;
}
</style>
