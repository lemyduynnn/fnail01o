<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="section_gallery"
  >
    <div class="container">
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-[30px] py-[20px]">
        <div
          v-for="(item, index) in block.listImg"
          :key="index"
          class="cursor-pointer	aspect-[800/600] hover_transform_item"
        >
          <img :src="item.img" :alt="item.alt" class="object-cover w-full h-full"/>
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
