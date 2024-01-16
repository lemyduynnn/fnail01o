<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center section_gallery"
    :style="{ backgroundImage: 'url(\'' + block.background + '\')' }"
  >
    <div class="container flex flex-col justify-center items-center pb-[90px]">
      <!-- title -->
      <div class="mt-[90px] mb-[90px] flex gap-[5px]">
        <div class="flex flex-col items-end text-main justify-center">
          <div class="font-rubik text-[45px]">{{ block.title }}</div>
          <div>
            <img :src="block.icon_star" :alt="block.alt_image" />
          </div>
        </div>
        <div class="relative text_sub_tile translate-y-[32%]">
          <div
            class="font-yellowtail text-[45px] text-main translate-y-[-20%] break-all"
          >
            {{ block.sub_title }}
          </div>
        </div>
      </div>
      <!-- grid -->
      <div
        class="grid grid-cols-2 3md:grid-cols-4 3md:grid-rows-2 grid__item gap-[15px]"
      >
        <div
          v-for="(data, idx) in block.gallery_items"
          :key="idx"
          class="grid__item__select"
        >
          <p class="aspect-[1/1]">
            <img
              class="image hover:cursor-pointer"
              :src="data.img"
              :alt="data.alt_image"
            />
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
interface Props {
  dataBinding: any;
  block: any;
}

defineProps<Props>();
</script>

<style lang="scss">
.section_gallery {
  .grid__item {
    .grid__item__select {
      &:hover {
        transform: scale(1.02);
      }
      &:nth-child(10n + 1),
      &:nth-child(10n + 8) {
        grid-row: span 2;
        grid-column: span 2;
      }
    }
  }
}
</style>
