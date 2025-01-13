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
  grid-template-columns: 1fr 8fr;
}

.container_page {
  width: 100%;
  border-radius: 20px;
  padding: 2%;
}
</style>
