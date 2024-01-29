<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="section_gallery"
  >
    <div class="container">
      <div class="bg-[#fff3cd] border-[#ffeeba] flex flex-col gap-2 justify-center items-center w-full p-4 mb-2 mt-[20px]">
        <div class="text-[#856404] leading-[32px] text-center" >
          <div v-html="block.desc">
          </div>
          <div class="flex justify-center items-center">
            <p>{{ block.contact }} :</p> 
            <p class="text-secondary">{{ block.phone }}</p>
          </div>
        </div> 
      </div>
      <div class="grid sm:grid-cols-2 grid-cols-1 gap-[30px] mb-6">
        <div
          v-for="(item, index) in block.listImg"
          :key="index"
          class="cursor-pointer	aspect-[800/400] hover_transform_item"
        >
          <img :src="item.img" :alt="item.alt" class="object-cover w-full h-full"/>
          <p class="text-center text-[14px]">{{ item.text }}</p>
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
