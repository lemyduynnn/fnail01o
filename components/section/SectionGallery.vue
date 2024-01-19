<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="section_gallery"
  >
    <div class="container">
      <div class="flex flex-col items-center font-bold text-main justify-center gap-4 py-4">
          <h2 class="text-[40px]">
            {{ block.title }}
          </h2>
          <p class="text-[18px] text-center leading-[36px]" v-html="block.sub_title "></p>
          <span class="h-[8px] bg-main w-[100px]"></span>
      </div>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[12px] mt-6">
        <div
          v-for="(item, index) in block.gallery_items"
          :key="index"
          class="cursor-pointer	aspect-[1/1] hover_transform_item"
        >
          <img :src="item.img" :alt="item.alt_image" class="object-cover w-full h-full"/>
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
  .hover_transform_item {
    transition: all 0.6s;
    &:hover{
      transform: scale(1.05);
      transition-duration: 700ms;
    }
  }
}
</style>
