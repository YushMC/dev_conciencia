<template>
  <div class="container_loader">
    <span class="loader"></span>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.container_loader {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  display: block;
  margin: 15px auto;
  position: relative;
  background: #eed3b8;
  box-shadow: -24px 0 #eed3b8, 24px 0 #eed3b8;
  box-sizing: border-box;
  animation: shadowPulse 2s linear infinite;
}

@keyframes shadowPulse {
  33% {
    background: #eed3b8;
    box-shadow: -24px 0 #b47f4a, 24px 0 #eed3b8;
  }
  66% {
    background: #b47f4a;
    box-shadow: -24px 0 #eed3b8, 24px 0 #eed3b8;
  }
  100% {
    background: #eed3b8;
    box-shadow: -24px 0 #eed3b8, 24px 0 #b47f4a;
  }
}
</style>
