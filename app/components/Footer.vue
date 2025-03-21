<template>
  <footer>
    <div class="container_up">
      <div class="container_logo">
        <img src="/assets/logo_without_bg.png" alt="" />
      </div>
      <div class="container_links">
        <ul>
          <li><NuxtLink to="/#Nuestra-Escencia">Nuestra Escencia</NuxtLink></li>
          <li><NuxtLink to="/experiencias">Experiencias</NuxtLink></li>
          <li><NuxtLink to="/#Testimonios">Testimonios</NuxtLink></li>
        </ul>
      </div>
    </div>
    <div class="container_down">
      <div class="social_media">
        <ul>
          <li><img src="/assets/instagram.svg" alt="" /></li>
          <li><img src="/assets/facebook.svg" alt="" /></li>
          <li><img src="/assets/whatsapp.svg" alt="" /></li>
          <li><img src="/assets/youtube.svg" alt="" /></li>
        </ul>
      </div>
      <div class="container_copy">
        <h4>
          &#169; 2025 Conciencia del Ser Divino. Todos los derechos reservados.
        </h4>
      </div>
      <div class="container_power_by">
        <h4>
          Powered by<a href="https://nuevaeradigital.mx/" target="_blank"
            >Nueva Era Digital</a
          >
        </h4>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped>
footer {
  width: 100%;
  padding: 2%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #f8f3ee;
}
.container_up {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
.container_logo {
  width: 10%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}
.container_logo img {
  width: 100%;
}
.container_links {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
li {
  cursor: pointer;
}
.container_links ul {
  width: 100%;
}
.container_down {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 3fr 2fr;
  gap: 5em;
  align-items: center;
}
.container_down ul {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}
.container_down ul li {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container_down ul li img {
  width: 1.5rem;
  aspect-ratio: 1/1;
  object-fit: contain;
}
.container_copy {
  width: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  color: #b47f4a;
}

.container_power_by h4 {
  width: 100%;
  display: flex;
  font-size: 1rem;
  justify-content: end;
  align-items: center;
  gap: 0.5rem;
  text-wrap: nowrap;
}

@media screen and (max-width: 600px) {
  .container_logo {
    width: 50%;
  }
  .container_links ul {
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 1rem;
    justify-content: start;
  }
  .container_down {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .container_copy {
    justify-content: center;
    align-items: center;
  }
}
</style>
