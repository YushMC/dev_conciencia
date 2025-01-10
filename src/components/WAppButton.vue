<template>
  <a
    class="container_button_wa"
    href="https://wa.me/524291206036?text=Hola,%20me%20gustaría%20saber%20más%20sobre%20Conciencia%20Del%20Ser%20Divino"
    target="_blank"
  >
    <img src="/assets/gui/wa_icon.svg" alt="" />
    <div class="container_text_wa">
      <h3>¡Envianos un mensaje!</h3>
    </div>
  </a>
</template>

<script setup lang="ts"></script>

<style scoped>
.container_button_wa {
  position: fixed;
  width: 50px;
  bottom: 2rem;
  right: 2rem;
  padding: 1%;
  z-index: 100;
  background: #b47f4a;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
}
.container_button_wa img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: contain;
}

.container_text_wa {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 5rem;
  width: 15dvw;
  height: 8dvh;
  background: #b47f4a;
  border-radius: 10px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s linear;
}
.container_text_wa h3 {
  width: 100%;
  text-align: center;
  font-size: 1rem;
  color: #fff;
}

.container_button_wa:hover .container_text_wa {
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 600px) {
  .container_button_wa {
    width: 60px;
    padding: 2%;
  }

  .container_text_wa {
    width: 50dvw;
  }
}
@media screen and (min-width: 1400px) {
  .container_button_wa {
    width: 4dvw;
  }
}
</style>
