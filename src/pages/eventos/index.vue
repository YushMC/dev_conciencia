<template>
  <div class="container_dashboard_eventos">
    <div class="container_search">
      <div class="search_bar">
        <input type="text" />
        <img src="/assets/gui/search_icon.svg" alt="" />
      </div>
    </div>
    <div class="dashboard_eventos">
      <aside>
        <button>hoa</button>
        <button>hoa 2</button>
        <button>hoa 3</button>
      </aside>
      <div class="container_eventos">
        <div class="card_evento">
          <img src="/assets/locations_examples/1.jpg" alt="" />
        </div>
        <div class="card_evento">
          <img src="/assets/locations_examples/1.jpg" alt="" />
        </div>
        <div class="card_evento">
          <img src="/assets/locations_examples/1.jpg" alt="" />
        </div>
        <div class="card_evento">
          <img src="/assets/locations_examples/1.jpg" alt="" />
        </div>
        <div class="card_evento">
          <img src="/assets/locations_examples/1.jpg" alt="" />
        </div>
      </div>
      <article>
        <Swiper
          :modules="[Pagination, Navigation, Autoplay]"
          :grabCursor="true"
          :centeredSlides="true"
          :spaceBetween="30"
          :loop="true"
          :slidesPerView="3"
          :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
          }"
          :navigation="true"
          :pagination="true"
          class="mySwiper"
        >
          <swiper-slide>
            <div class="card_slide">
              <img src="/assets/locations_examples/1.jpg" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card_slide">
              <img src="/assets/locations_examples/1.jpg" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card_slide">
              <img src="/assets/locations_examples/1.jpg" alt="" />
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="card_slide">
              <img src="/assets/locations_examples/1.jpg" alt="" />
            </div>
          </swiper-slide>
        </Swiper>
        <hr class="bg_color_secundario" />
        <h2 class="titulo text_color_secundario">Descripción General</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
          delectus, culpa tempore provident doloremque odit hic possimus modi
          fugit quidem numquam totam quisquam soluta sunt iure repellat sed
          dolores mollitia illo aperiam recusandae magnam laboriosam.
          Reprehenderit aut, consequuntur adipisci soluta eveniet saepe
          assumenda sint obcaecati ipsum ex corrupti? Recusandae molestias fugit
          hic minus nesciunt eos. Minus, dicta. Distinctio quasi molestias
          fugiat dolores repudiandae consectetur asperiores suscipit officia
          excepturi fugit saepe rerum pariatur quam earum, sapiente in unde
          harum blanditiis? Consequatur quae facere iste numquam ab dolore non
          modi nisi quia, accusamus amet? Tempora hic quidem fugiat atque optio
          distinctio omnis?
        </p>
        <NuxtLink to="/eventos">Ver Más</NuxtLink>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// Opcionales: módulos para Swiper
import { Navigation, Pagination, Autoplay } from "swiper/modules";
</script>

<style scoped>
.container_dashboard_eventos {
  width: 100%;
  position: relative;
  padding: 100px 10%;
  background: #fcf7f3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 50;
}

.container_search {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #b47f4a;
}
.search_bar {
  position: relative;
  width: 30dvw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
}
.search_bar input {
  width: 100%;
  padding: 2%;
  padding-left: 2.5rem;
  outline: none;
  border-radius: 10px;
  border: none;
  background: #b47f4a27;
  font-size: 1.5rem;
}
.search_bar img {
  width: 1.3dvw;
  position: absolute;
  top: 1.5dvh;
  left: 1%;
}
.dashboard_eventos {
  width: 100%;
  height: 70dvh;
  position: relative;
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 4fr;
  gap: 1rem;
  overflow: hidden;
}
aside {
  overflow: hidden;
  width: 100%;
  height: 100%;
  border: #b47f4a 2px solid;
  border-radius: 10px;
  padding: 20%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.container_eventos {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  scrollbar-width: none !important;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 10px;
  padding: 2%;
}
.card_evento {
  position: relative;
  width: 100%;
  height: 40dvh;
  border-radius: 10px;
  padding: 2%;
  transition: all 0.3s linear;
  z-index: 80;
}
.card_evento:hover {
  transform: translateX(8px);
}
.card_evento.active {
  transform: translateX(8px);
}
.card_evento img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
}
.card_evento:hover aside button {
  width: 100%;
  height: 5dvh;
}
article {
  width: 100%;
  border-left: #b47f4a solid 2px;
  padding: 2%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  scrollbar-width: none;
}
article .swiper {
  margin: 0 auto;
  width: 40dvw;
  height: 30dvh;
}
article .card_slide {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.card_slide img {
  width: 100%;
  height: 100%;
  aspect-ratio: 9/16;
  object-fit: cover;
  object-position: center;
}
hr {
  margin: 3% 0;
  opacity: 0.5;
}
article h2 {
  text-align: left;
}
p {
  color: #000;
  line-height: 1.5;
  margin: 2% 0;
}
article a {
  font-size: 1.25rem;
  align-self: flex-start;
  border: #b47f4a solid 2px;
  padding: 1% 2%;
  border-radius: 10px;
}
@media screen and (max-width: 600px) {
  .dashboard_eventos {
    display: flex;
    flex-direction: column;
  }
  .search_bar {
    width: 100%;
  }

  aside {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0% 5%;
  }
  .container_eventos {
    width: 100%;
    height: 1000dvh !important;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 0;
  }
  .card_evento {
    width: 100%;
    height: 20dvh !important;
  }
  .card_evento img {
    width: 100%;
    height: 100%;
  }
  .card_evento:hover {
    transform: scale(0.9) translateX(0px) !important;
  }
  article {
    height: 800dvw;
  }
  article .swiper {
    width: 1000dvw;
  }
}
</style>
