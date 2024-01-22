<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="w-full"
  >
    <div class="container">
      <div class="flex flex-col items-center font-bold text-main justify-center gap-4 py-4">
          <h2 class="text-[40px] uppercase">
            {{ block.title }}
          </h2>
          <span class="h-[8px] bg-main w-[100px]"></span>
      </div>
      <form class="flex flex-col gap-[30px] py-[30px]">
        <div class="md:flex-row flex flex-col w-full gap-[30px]">
          <div class="flex flex-col gap-[8px] w-full">
            <label class="text-[14px]">{{block.label_name}}</label>
            <input type="text" class="border p-2"/>
          </div>
          <div class="flex flex-col gap-[8px] w-full">
            <label class="text-[14px]">{{block.label_email}}</label>
            <input type="text" class="border p-2"/>
          </div>
        </div>
        <div class="flex flex-col gap-[8px] w-full">
          <label class="text-[14px]">{{block.label_subject}}</label>
          <input type="text" class="border p-2"/>
        </div>
        <div class="flex flex-col gap-[8px] w-full">
          <label class="text-[14px]">{{block.label_message}}</label>
          <textarea  rows="10" cols="50" class="border p-2"></textarea>
        </div>
        <div class="flex flex-col justify-center items-center w-full">
          <button class="hover:bg-secondary rounded-full bg-main text-white uppercase font-medium py-2 px-6 text-[14px]">{{block.text_button}}</button>
        </div>
      </form>
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
