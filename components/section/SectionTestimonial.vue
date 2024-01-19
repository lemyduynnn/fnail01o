<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    :style="{ backgroundImage: 'url(\'' + block.background + '\')' }"
    class="section_testimonial mt-[45px]"
  >
    <div class="container flex flex-col justify-between py-[20px]">
      <div class="flex flex-col items-center font-bold text-main justify-center gap-4">
          <h2 class="text-[40px]">
            {{ block.title }}
          </h2>
          <span class="h-[8px] bg-main w-[100px]"></span>
      </div>
      <div class="w-full bg-white py-[60px] px-[45px] mt-[30px]">
        <swiper
          :slides-per-view="1"
          :effect="'fade'"
          :speed="1000"
          @swiper="onSwiper"
          class="mySwiper"
          :modules="modules"
          :navigation=true
        >
          <swiper-slide
            v-for="(slide, index) in block.slide_testimonial"
            :key="index"
            class="w-full bg-white"
          >
            <div class="md:flex-row flex flex-col md:justify-between justify-center w-full gap-2">
              <div class="flex flex-col gap-[10px] justify-center items-center">
                <p class="leading-normal text-center text-[16px]">
                  {{ slide.text }}
                </p>
                <b class="text-[21px] font-bold	">{{ slide.name }}</b>
              </div>
              <img
                class="hover:cursor-pointer"
                :src="slide.img"
              />
            </div>
          </swiper-slide>
        </swiper>
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

  import { Navigation,EffectFade } from 'swiper/modules';
  import 'swiper/css/pagination';

const modules =  [Navigation, EffectFade]
  const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
};
const mySwiper = ref<any | null>(null);
</script>

<style lang="scss" scoped>
.section_testimonial {
  position: relative;
  z-index: 1;
  background-position: right center;
  background-size: cover;
  padding: 20px 0;
  background-attachment: fixed;
  &:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.9);
  }
  .mySwiper {
    .swiper-button-prev{
    }
  }
}
</style>
