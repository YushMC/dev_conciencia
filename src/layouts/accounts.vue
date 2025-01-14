<template>
  <div class="container_body">
    <AccountsHeader></AccountsHeader>
    <div class="container_page">
      <NuxtPage> </NuxtPage>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.container_body {
  width: 100dvw;
  display: grid;
  grid-template-columns: 1fr 5fr;
}

.container_page {
  width: 100%;
  height: 100dvh;
  background-image: linear-gradient(to top, #ccc1b6 0%, #f8f3ee 100%);
  background-size: 200% 200%;
  background-repeat: no-repeat;
  backdrop-filter: blur(20px);
  animation: move_bg linear 20s infinite;
  display: flex;
  overflow: hidden;
}

@keyframes move_bg {
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 100%;
  }
  100% {
    background-position: 0% 0%;
  }
}
</style>
