<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="bg-no-repeat bg-cover bg-center"
    :style="{ backgroundImage: 'url(\'' + block.background + '\')' }"
  >
    <div
      class="flex mb-[90px] flex-col items-center max-w-[820px] px-[10px] 3md:container 3md:px-0"
    >
      <!-- title -->
      <div class="mt-[90px] mb-[80px] flex gap-[5px]">
        <div class="flex flex-col items-end text-main justify-center">
          <div class="font-rubik text-[45px] pt-[20px]">
            {{ block.title }}
          </div>
          <div>
            <img :src="block.icon_star" />
          </div>
        </div>
        <div class="text_sub_tile relative translate-y-[32%]">
          <p
            class="font-yellowtail text-[45px] text-main translate-y-[-20%] break-all"
          >
            {{ block.us }}
          </p>
        </div>
      </div>
      <!-- form input -->
      <!-- <div
        class="flex gap-[15px] justify-center items-center flex-col 2lg:flex-row"
      > -->
      <div class="grid md:grid-cols-2 gap-[15px] items-stretch">
        <div
          class="flex flex-col items-center justify-center w-full py-[90px]"
          style="
            background: linear-gradient(180deg, #f7fefc 8.33%, #fdf1f1 100%);
          "
        >
          <h1 class="font-yellowtail text-secondary text-[45px] mb-[41px]">
            {{ block.get_in_touch }}
          </h1>
          <div class="text-[18px] mb-[16px] px-[30px]">
            {{ block.content_form }}
          </div>
          <form
            class="flex flex-col items-center justify-center gap-[16px] px-[30px] w-full"
          >
            <input
              type="text"
              class="py-[16px] w-full pl-[16px] rounded-[6px] border border-secondary outline-none text-[16px] font-century text-[#000] leading-[18px]"
              :placeholder="block.input_name"
            />
            <input
              :placeholder="block.input_email"
              type="text"
              class="py-[16px] w-full pl-[16px] rounded-[6px] border border-secondary outline-none text-[16px] font-century text-[#000] leading-[18px]"
            />
            <textarea
              :placeholder="block.area_name"
              rows="4"
              cols="50"
              class="h-[150px] py-[16px] w-full pl-[16px] rounded-[6px] border border-secondary outline-none text-[16px] font-century text-[#000] leading-[18px]"
            />
            <button
              class="text-[white] font-bold rounded-l-[30px] rounded-r-[30px] text-[20px] px-[60px] py-[15px] bg-secondary w-[186px] h-[54px]"
              type="submit"
            >
              {{ block.submit }}
            </button>
          </form>
        </div>
        <!-- google map -->
        <div class="md:aspect-[0/0] aspect-[1/2]">
          <iframe class="h-full w-full" :src="block.google_map" />
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

<style lang="scss"></style>
