<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: 'url(\'' + block.background + '\')' }"
  >
    <div class="container py-[90px] flex items-center justify-center flex-col">
      <!-- title -->
      <div
        class="flex gap-[30px] items-center justify-center flex-col 3md:gap-[36px] 3md:flex-row 3md:items-start"
      >
        <div class="mb-[30px] flex gap-[5px]">
          <div class="flex flex-col items-end text-main justify-center">
            <div class="font-rubik text-[45px]">
              {{ block.title }}
            </div>
            <div>
              <img :src="block.icon_star" :alt="block.alt_image" />
            </div>
          </div>
          <div class="text_sub_tile relative translate-y-[32%]">
            <p
              class="font-yellowtail text-[45px] text-main translate-y-[-20%] break-all"
            >
              {{ block.sub_title }}
            </p>
          </div>
        </div>
        <div>
          <p class="text-[18px] max-w-[757px] leading-[30px]">
            {{ block.title_content }}
          </p>
        </div>
      </div>
      <div
        class="flex mt-[90px] justify-center gap-[40px] flex-col-reverse lg:flex-row lg:gap-0 w-full"
      >
        <div class="flex justify-center items-center">
          <!-- Progress bar -->
          <div class="flex flex-col mt-[-8px] w-[367px]">
            <div
              v-for="(data, idx) in block.pedicures"
              :key="idx"
              class="flex gap-[21px] mb-[8px]"
            >
              <div class="flex flex-col items-center">
                <div class="w-[57px] h-[57px]">
                  <img
                    class="image rounded-full"
                    :src="data.img"
                    :alt="data.alt_image"
                  />
                </div>
                <div
                  v-show="idx !== block.pedicures.length - 1"
                  class="h-[127px] bg-[#000] w-[1px] relative translate-y-[-2px]"
                >
                  <div
                    class="absolute bottom-0 w-[5px] h-[5px] bg-[#000] left-[50%] translate-x-[-50%] rounded"
                  />
                </div>
              </div>

              <!-- step thousands -->
              <div class="flex flex-col max-w-[289px] text-[18px]">
                <h1 class="font-centuryb">{{ data.title }}</h1>
                <p class="mt-[7px] leading-[30px]">
                  {{ data.content }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative w-[100%] h-[267px] sm:h-[493px]">
          <div class="w-full h-full">
            <iframe
              class="h-full w-full rounded-[20px]"
              :src="block.link_youtube"
              :title="block.title_youtube"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
          <div
            class="bg-main absolute rounded-[20px] top-[-70px] 2sm:top-[-70px]  right-3 2sm:left-[50%] translate-x-0 2sm:translate-x-[-50%] w-[71%]"
          >
            <div
              class="flex items-center justify-center px-[10px] md:px-[30px] py-[10px] md:py-[33px] flex-col gap-[16px] 2sm:gap-[69px] 2sm:flex-row"
            >
              <div class="flex items-center justify-center gap-[8px]">
                <h1 class="font-rubik text-[60px] text-white">
                  {{ block.pedicure_number }}
                </h1>
                <div class="text-white">
                  <h3 class="">{{ block.step }}</h3>
                  <h3 class="text-[18px]">
                    {{ block.step_content }}
                  </h3>
                </div>
              </div>
              <div class="text-white pr-0 2sm:pr-[48px]">
                <h1>{{ block.thousands }}</h1>
                <h3 class="text-[18px]">
                  {{ block.customer_like }}
                </h3>
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

defineProps<Props>();
</script>

<style lang="scss" scoped></style>
