<template>
  <div
    class="container_front_page"
    :style="{ backgroundImage: `url(${image})` }"
  >
    <div class="container_text_front_page">
      <h1>Conciencia del Ser Divino</h1>
    </div>
  </div>
</template>
<script setup lang="ts">
import image from "./../assets/gallery/main.webp";
</script>
<style scoped>
.container_front_page {
  width: 100%;
  padding: 110px 10%;
  display: flex;
  justify-content: center;
  height: 100dvh;
  align-items: end;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
}
.container_text_front_page {
  width: 80%;
  margin: 0 auto;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  backdrop-filter: blur(2px);
  background: #f8f3ee1a;
  border-radius: 10px;
  padding: 1%;
  transition: all 0.3s linear;
}

.container_text_front_page h1 {
  color: #fff;
  text-align: center;
}
.container_text_front_page p {
  color: #fff;
}

.container_img_front_page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_img_front_page img {
  border-radius: 20px;
}

@media screen and (max-width: 600px) {
  .container_front_page {
    background-size: cover;
    background-attachment: unset;
  }
  .container_text_front_page p {
    display: none;
  }
  .container_text_front_page h1 {
    font-size: 1.5rem;
    display: flex;
    flex-direction: column;
  }
  .container_text_front_page h1::before {
    content: "Somos";
    margin-right: 1%;
  }
}
</style>
