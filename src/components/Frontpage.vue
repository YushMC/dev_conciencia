<template>
  <div class="container_front_page bg_color_principal">
    <div class="container_text_front_page">
      <h1>Conciencia del Ser Divino</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit ut saepe
        possimus amet dolorem consequuntur modi animi corporis quibusdam,
        architecto laboriosam, inventore harum vel, illum doloribus provident
        eius aspernatur consequatur.
      </p>
    </div>
    <div class="container_img_front_page">
      <img src="/assets/woman-in-white-meditation_48172667.png" alt="" />
    </div>
  </div>
</template>

<style scoped>
.container_front_page {
  width: 100%;
  padding: 110px 10%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}
.container_text_front_page {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
}

.container_img_front_page {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_img_front_page img {
  width: 100%;
}

@media screen and (max-width: 600px) {
  .container_front_page {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
</style>
