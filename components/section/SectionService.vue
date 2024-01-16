<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: 'url(\'' + block.background + '\')' }"
  >
    <div
      class="container flex flex-col justify-center items-center 3md:pb-0 pb-[90px]"
    >
      <!-- title -->
      <div class="mt-[90px] mb-[30px] flex gap-[5px]">
        <div class="flex flex-col items-end text-main justify-center">
          <div class="font-rubik text-[45px] ">
            {{ block.title }}
          </div>
          <div>
            <img :src="block.icon_star" :alt="block.alt_image" />
          </div>
        </div>
        <div class="text_sub_tile relative translate-y-[32%]">
          <div class="font-yellowtail text-[45px] text-main translate-y-[-20%] break-all">
            {{ block.sub_title }}
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col gap-[40px]">
        <!-- desktop -->
        <div class="hidden 3md:flex justify-around items-center">
          <h1
            v-for="(data, index) in block.services"
            :key="index"
            :class="{ 'text-main': handleActiveTab(index) }"
            class="font-rubik text-[22px] px-[30px] py-[18px] cursor-pointer"
            @click="changeSlider(index)"
          >
            {{ data.text }}
          </h1>
        </div>
        <!-- swiper mobile -->
        <div class="3md:hidden">
          <swiper :slides-per-view="'auto'" :space-between="30">
            <swiper-slide
              v-for="(data, index) in block.services"
              :key="index"
              style="width: auto !important"
              @click="changeSlider(index)"
            >
              <h2 :class="{ 'text-main': handleActiveTab(index) }" class="font-rubik text-[22px] px-[30px] py-[18px] cursor-pointer">
                {{ data.text }}
              </h2>
            </swiper-slide>
          </swiper>
        </div>
        <!-- swiper -->
        <div>
          <swiper @swiper="onSwiper" :slides-per-view="'auto'" class="custom_swiper" :space-between="16">
            <swiper-slide v-for="(data, index) in serviceItems" :key="index" style="width: auto !important;">
              <div class="flex flex-col hover:cursor-pointer">
                <p class="w-[274px] h-[299px]">
                  <img
                    class="image"
                    :src="data.img"
                    :alt="data.image_alt"
                  />
                </p>
                <p class="mt-[40px]">
                  {{ data.author }}
                </p>
              </div>
            </swiper-slide>
          </swiper>
          <div
            class="hidden 3md:flex justify-center items-center gap-[30px] mt-[60px] mb-[90px]"
          >
            <img
              :src="block.icon_left"
              class="cursor-pointer"
              :alt="block.alt_image"
              :class="{ 'opacity-20 cursor-auto': disablePrev }"
              @click="handlePrev"
            />
            <img
              :src="block.icon_right"
              class="cursor-pointer"
              :class="{ 'opacity-20 cursor-auto': disableNext }"
              :alt="block.alt_image"
              @click="handleNext"
            />
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
const mySwiper = ref<any | null>(null);

const disablePrev = computed(() => {
  return mySwiper.value?.isBeginning;
})
const disableNext = computed(() => {
  return mySwiper.value?.isEnd;
})

const onSwiper = (swiperInstance: any) => {
  mySwiper.value = swiperInstance;
};
const handleActiveTab = (index: number) => {
  return (
    Math.round(mySwiper.value?.activeIndex / block.services.length) === index
  );
};
const changeSlider = (idx: number) => {
  if (mySwiper.value) {
    const targetSlideIndex = idx * 4;
    mySwiper.value.slideTo(targetSlideIndex);
    handleActiveTab(idx);
  }
};

const handlePrev = () => {
  mySwiper.value.slideTo(mySwiper.value?.activeIndex - 4);
};

const handleNext = () => {
  mySwiper.value.slideTo(mySwiper.value?.activeIndex + 4);
};

const serviceItems = ref(block.services.flatMap((item:any) => {
  const arr = (item.service_item || []).map((item2:any) => {
    return {
      ...item2
    };
  });
  return arr;
}));

</script>

<style lang="scss" scoped>

</style>
