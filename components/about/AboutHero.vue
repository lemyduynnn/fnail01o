<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="w-full"
  >
    <div class="container">
      <div class="md:flex-row flex flex-col justify-center items-start gap-[30px] py-[20px]">
        <div clas="aspect-[370/470]">
         <img :src="block.img" :alt="block.img_alt" class="object-cover"/>
        </div>
        <div class="leading-[34px] flex flex-col gap-2 text-justify items-stretch" v-html="block.content" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import headerData from "@/data/header.json";

interface Props {
  dataBinding: any;
  block: any;
}

const { dataBinding, block } = defineProps<Props>();
</script>


<style lang="scss" scoped>
.bg_color{
  background-color: rgba(72, 72, 72, 0.7);

}
</style>
