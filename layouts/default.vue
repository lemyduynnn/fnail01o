<template>
  <div class="">
    <MainHeader />
    <main class="grow">
      <slot />
    </main>
    <MainFooter  v-if="showFooter" />
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const showFooter = ref(route.path !== '/')
watch(() => route.path, (path) => {
  showFooter.value = path !== '/'
})
</script>

<style scoped></style>
