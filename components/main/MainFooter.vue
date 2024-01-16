<!-- eslint-disable vue/html-self-closing -->
<template>
  <footer>
    <div
      class="flex items-center justify-around text-[16px] py-[30px] text-white flex-col-reverse gap-[12px] sm:flex-row sm:flex-initial"
      :style="{ background: footerData.background }"
    >
      <div>{{ footerData.title_footer }}</div>
      <div class="flex items-center justify-around gap-[12px]">
        <div>
          {{ footerData.follow }}
        </div>
        <img :src="footerData.icon_footer" />
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerData from '@/data/footer.json';
</script>

<style lang="scss"></style>
