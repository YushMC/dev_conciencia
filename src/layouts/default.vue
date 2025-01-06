<template>
  <Header></Header>
  <main>
    <NuxtPage />
  </main>
  <Footer> </Footer>
</template>

<script setup lang="ts"></script>

<style scoped>
body {
  width: 100%;
  display: flex;
  flex-direction: column;
}
main {
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
