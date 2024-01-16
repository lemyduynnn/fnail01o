<!-- eslint-disable vue/attribute-hyphenation -->
<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center"
    :style="`background-image: url(${block.background});`"
  >
    <div
      class="container"
    >
      <div class="flex md:flex-row flex-col pb-[90px] pt-[110px] gap-[130px] md:gap-[30px] items-center justify-items-center">
        <div class="relative max-w-[260px]">
          <h2
            class="flex flex-col justify-center items-center font-rubik text-main text-[40px] md:text-[30px] lg:text-[40px] text-center"
          >
            {{ block.text }}
          </h2>

          <img
            :src="block.icon_star"
            class="absolute top-[-25px] left-[32px] object-cover"
            width="36"
            height="35"
            :alt="block.alt_image"
          />
          <img
            :src="block.icon_star"
            class="absolute right-[-20px] bottom-[-70px] object-cover"
            width="70"
            height="71"
            :alt="block.alt_image"
          />
        </div>
        <div class="flex md:w-[calc(100%_-_260px)] w-fulll gap-[22px]  overflow-hidden ">
          <!-- <swiper
            :slides-per-view="'auto'"
            :space-between="'22'"
            @swiper="onSwiper"
            class="h-[502px] custom_swiper mySwiper"
          >
            <swiper-slide
              v-for="(slide, index) in block.banner_slides"
              :key="index"
              style="width: auto !important; transition: width 0.3s;"
            >
              <p
                class="aspect-[177/542] rounded-[12px] h-full"
                :class="{ 'aspect-[466/476]': activeImg(index), 'swiper-clicked': activeImg(index) }"
                @click="onClickSlide(index)"
              >
                <img
                  class="image rounded-[12px] hover:cursor-pointer"
                  :src="slide.banner_left"
                  :alt="slide.banner_left_alt"
                />
              </p>
            </swiper-slide>
          </swiper> -->
          <template v-for="(item, index) in block.banner_slides" :key="index">
            <img
              class="image w-[20%] h-[502px] duration-300 rounded-[12px] hover:cursor-pointer"
              :class="{'!w-[calc(60%_-_44px)]': active == index}"
              :src="item.banner"
              :alt="item.banner_alt"
              @click="active = index"
            />
          </template>
        </div>
        <!-- <div class="overflow-hidden block sm:hidden w-full">
          <swiper class="w-full" :slides-per-view="'auto'" :space-between="'22'">
            <swiper-slide style="width: auto !important">
              <p class="w-[300px] h-[502px]">
                <img
                  class="image rounded-[12px] hover:cursor-pointer"
                  :src="block.banner_left"
                  :alt="block.banner_left_alt"
                />
              </p>
            </swiper-slide>
            <swiper-slide style="width: auto !important">
              <p class="w-[94px] h-[502px]">
                <img
                  class="image rounded-[12px] hover:cursor-pointer"
                  :src="block.banner_mid"
                  :alt="block.banner_mid_alt"
                />
              </p>
            </swiper-slide>
            <swiper-slide style="width: auto !important">
              <p class="w-[94px] h-[502px]">
                <img
                  class="image rounded-[12px] hover:cursor-pointer"
                  :src="block.banner_right"
                  :alt="block.banner_right_alt"
                />
              </p>
            </swiper-slide>
          </swiper>
        </div> -->
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
const active = ref(0);

onMounted(() => {
  setInterval(() => {
    active.value = (active.value + 1) % block.banner_slides.length;
  }, 3000);
});

</script>

<style lang="scss" scoped>
.custom_swiper{
  .swiper-wrapper {
    .active_slide_swiper {
      transition: transform 0.6s ease-in-out;
    }
  }
}
</style>
