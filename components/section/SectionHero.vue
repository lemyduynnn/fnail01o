<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="w-full"
  >
    <swiper
      :slides-per-view="1"
      @swiper="onSwiper"
      class="mySwiper w-full"
      :modules="modules"
      :pagination="true"
      :navigation="true"
      :loop="true"
    >
      <swiper-slide
        v-for="(slide, index) in block.banner_slides"
        :key="index"
        style="width: 100% !important"
      >
          <img
            class="hover:cursor-pointer w-full"
            :src="slide.banner"
            :alt="slide.banner_alt"
          />
      </swiper-slide>
    </swiper>
  </section>
</template>

<script lang="ts" setup>
  import { Pagination } from 'swiper/modules';
  import { Navigation } from 'swiper/modules';
  import 'swiper/css/pagination';

interface Props {
  dataBinding: any;
  block: any;
}
const { dataBinding, block } = defineProps<Props>();
const modules =  [Pagination, Navigation]
  const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
};
const mySwiper = ref<any | null>(null);

</script>

<style lang="scss" scoped>
</style>
