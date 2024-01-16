<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: 'url(\'' + block.background + '\')' }"
  >
    <div class="container py-[90px] flex justify-center items-center flex-col">
      <!-- title -->
      <div class="flex gap-[5px] justify-center items-start">
        <div class="flex flex-col items-end text-main justify-center">
          <div class="font-rubik text-[45px]">
            {{ block.title }}
          </div>
          <div>
            <img :src="block.icon_star" :alt="block.alt_image" />
          </div>
        </div>
        <div class="translate-y-[32%] text_sub_tile relative">
          <p class="font-yellowtail text-[45px] text-main break-all">
            {{ block.sub_title }}
          </p>
        </div>
      </div>
      <!-- grid -->
      <swiper
        space-between="20"
        :slides-per-view="'auto'"
        class="w-full h-full mt-[90px] custom_height_swipper"
        @swiper="onSwiper"
      >
        <swiper-slide
          v-for="(data, index) in block.customer_items"
          :key="index"
          style="width: auto !important;"
        >
          <div class="h-full pb-[8px] bg-white rounded-tl-[60px] rounded-br-[60px]">
            <div
              class=" h-full w-[273px] bg-[#eecdcd6e] text-[18px] rounded-tl-[60px] rounded-br-[60px]"
            >
              <div
                class="flex flex-col gap-[65px] py-[60px] px-[24px] h-full justify-between"
              >
                <p class="break-all">
                  {{ data.content }}
                </p>
                <div class="flex gap-[23px] items-center">
                  <p class="w-[64px] aspect-[1/1]">
                    <img
                      class="image rounded-full"
                      :src="data.img"
                      :alt="data.alt_image"
                    />
                  </p>
                  <div>
                    <h3 class="font-bold">
                      {{ data.author }}
                    </h3>
                    <p class="text-[16px]">
                      {{ data.birthday }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- <swiper
        :slidesPerView="4"
        class="mySwiper w-full"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(data, index) in block.customer_items" :key="index" class="w-full h-full">
          <div
            class="justify-center w-full flex-col hover:cursor-pointer"
          >
            <div
              class="w-[273px] bg-[#eecdcd6e] text-[18px] rounded-tl-[60px] rounded-br-[60px]"
            >
              <div
                class="flex flex-col gap-[65px] pt-[60px] pb-[40px] px-[24px]"
              >
                <p class="break-all">
                  {{ data.content }}
                </p>
                <div class="flex gap-[23px] items-center">
                  <p class="w-[64px] aspect-[1/1]">
                    <img
                      class="image rounded-full"
                      :src="data.img"
                      :alt="data.alt_image"
                    />
                  </p>
                  <div>
                    <h3 class="font-bold">
                      {{ data.author }}
                    </h3>
                    <p class="text-[16px]">
                      {{ data.birthday }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper> -->
      <div class="flex justify-center items-center gap-[30px] mt-[40px]">
        <img
          :src="block.icon_left"
          class="cursor-pointer"
          :class="{ 'opacity-20 cursor-auto': disablePrev }"
          :alt="block.alt_image"
          @click="handlePrev"
        />
        <img
          :src="block.icon_right"
          :class="{ 'opacity-20 cursor-auto': disableNext }"
          class="cursor-pointer"
          :alt="block.alt_image"
          @click="handleNext"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
type TypeDataMobile = {
  content: string;
  img: string;
  author: string;
  birthday: string;
};

const dataMobile = ref<TypeDataMobile[]>([]);
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

const handlePrev = () => {
  mySwiper.value.slideTo(mySwiper.value?.activeIndex - 4);
};

const handleNext = () => {
  mySwiper.value.slideTo(mySwiper.value?.activeIndex + 4);
};

onMounted(() => {
  dataMobile.value = props.block.customer_items.flatMap(
    (e: any) => e.customer_items
  );
});

interface Props {
  dataBinding: any;
  block: any;
}

const props = defineProps<Props>();
</script>

<style lang="scss">
.custom_height_swipper {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  .swiper-wrapper {
      display: flex;
      height: 100%;
      align-items: stretch;
    .swiper-slide{
      height: auto;
    }
  }
}

</style>
