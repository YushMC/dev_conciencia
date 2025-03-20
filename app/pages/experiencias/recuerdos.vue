<template>
  <main class="estructura">
    <h1>Nuestros Recuerdos</h1>
    <div class="container_images">
      <img src="~/assets/gallery/1.jpg" alt="" load="lazy" />
      <img src="~/assets/gallery/2.jpg" alt="" load="lazy" />
      <img src="~/assets/gallery/3.jpg" alt="" load="lazy" />
      <img src="~/assets/gallery/4.jpg" alt="" load="lazy" />
      <img src="~/assets/gallery/5.jpg" alt="" load="lazy" />
    </div>
  </main>
</template>

<script setup lang="ts">
const { isResponsiveMenu } = useMainHeader();

isResponsiveMenu.value = false;
</script>

<style scoped>
.estructura {
  width: 100%;
  padding: 20dvh 10%;
  display: flex;
  flex-direction: column;
}

.container_images {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.container_images img {
  width: 49%;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 1rem;
  transition: all 0.3s linear;
  cursor: pointer;
}
.container_images img:hover {
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.5);
  transform: scale(1.05);
}
.container_images:hover img:not(:hover) {
  opacity: 0.7;
  filter: brightness(0.8) blur(2px);
}
.container_images img:nth-child(odd) {
  width: 20%;
  aspect-ratio: 4/3;
}
.container_images img:last-child {
  width: 40%;
  aspect-ratio: 16/9;
}
@media screen and (max-width: 800px) {
  .container_images {
    flex-direction: column;
    justify-content: start;
    align-items: start;
  }
  .container_images img {
    width: 100%;
  }
  .container_images img:nth-child(odd) {
    width: 100%;
  }
}
</style>
