<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="w-full"
  >
    <div class="container">
      <div class="flex flex-col items-center font-bold text-main justify-center gap-4 py-4">
          <h2 class="text-[40px] pt-[20px]">
            {{ block.title }}
          </h2>
          <p class="text-[18px] text-center">
            {{ block.sub_title }}
          </p>
          <span class="h-[8px] bg-main w-[100px]"></span>
      </div>
      <div class="relative grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[60px] gap-y-[30px] justify-center items-center mt-6 w-full">
        <div 
          v-for="(item, index) in block.services" 
          :key="index"
          class="w-full h-full relative hover_item"
        >
          <div
            :style="{ backgroundImage: 'url(\'' + item.background_img + '\')' }"
            class="h-full w-full bg-cover z-[-3333] background-hover-left"
          ></div>
          <div
            :style="{ backgroundImage: 'url(\'' + item.background_img + '\')' }"
            class="h-full w-full bg-cover z-[-3333] background-hover-right"
          ></div>
          <div class="mx-8 bg-white">
            <div class="aspect-[230/230]">
              <img :src="item.img" class="w-full h-full border-[#e7e7e7] border-[3px] rounded-[50px]"/>
            </div>
            <div class="flex items-center gap-4 mt-6">
              <span class="h-[5px] bg-main w-[50px]"></span>
              <span class="uppercase font-bold leading-[32px]">{{ item.text }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 md:flex-row flex flex-col justify-between lg:items-stretch items-start gap-4 h-full w-full">
        <img :src="block.welcome.img" :alt="block.welcome.img_alt" class="md:w-1/2 w-full object-cover"/>
        <div
          :style="{ backgroundImage: 'url(\'' + block.welcome.bg_welcome + '\')' }"
          class="p-4 flex flex-col gap-6 justify-start items-center "
        >
          <h2 class="leading-[34px] text-white uppercase text-[26px] text-center font-semibold" v-html="block.welcome.title"></h2>
          <p class="leading-[34px] text-main text-[18px] text-justify font-normal	">{{ block.welcome.title_content1 }}</p>
          <p class="leading-[34px] text-main text-[18px] text-justify font-normal	">{{ block.welcome.title_content2 }}</p>
          <p class="flex flex-col justify-start w-full leading-[34px] text-[18px]"><a class="italic text-secondary outline-none no-underline cursor-pointer font-normal	">{{ block.welcome.view_more }}</a></p>
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
.hover_item{
  .background-hover-left{
    overflow: visible;
    clear: both;
    position: absolute;
    transition: all 0.3s ease;
    left: 50%;
    transform: translateX(-50%);

  }
  .background-hover-right{
    overflow: visible;
    clear: both;
    position: absolute;
    transition: all 0.3s ease;
    right: 50%;
    transform: translateX(50%);

  }
  &:hover {
    cursor: pointer;
      .background-hover-left{
      transform: translateX(-70%);
    }
    .background-hover-right{
      transform: translateX(70%);
    }
  }

}
</style>
