
<template>
   <section :id="block.id" :data-cms-bind="dataBinding" class="section-our">
    <div class="container">
      <div class="w-full flex flex-col justify-center items-center gap-20 py-[20px]">
        <div v-for="(item, index) in block.data" :key="index" class="lg:even:flex-row-reverse w-full lg:flex lg:flex-row flex flex-col justify-between items-center lg:gap-20 gap-8">
          <div class="flex flex-col items-center justify-center">
            <img :src="item.img" :alt="item.alt" class="object-cover w-full aspect-[500/500] border-[3px] rounded-full border-main"/>
          </div>
          <div class="w-full flex flex-col gap-6 items-center justify-center lg:justify-between">
            <div class="w-full border-b border-main pb-2">
              <h2 class="text-main text-[30px] font-bold leading-[30px] uppercase">{{ item.title }}</h2>
            </div>
            <div class="flex flex-col gap-4 w-full">
              <div v-for="(menu, key) in item.type" :key="key" class="flex justify-between items-center">
                <p class="whitespace-nowrap font-bold leading-[32px] text-[17px]">{{ menu.name }}</p>
                <div class="w-full h-px bg-gray-200 flex flex-col justify-center items-center"></div>
                <p class="whitespace-nowrap font-bold leading-[26px] text-[20px]">{{ menu.price }}</p>
              </div>
            </div>
          </div>
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
 
 const { dataBinding, block } = defineProps<Props>();
 </script>
 
 <style lang="scss" scoped>
.custom_item{

}
 </style>
 