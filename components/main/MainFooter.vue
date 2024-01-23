<!-- eslint-disable vue/html-self-closing -->
<template>
  <footer>
    <div class="container" style="padding-top: 0 !important;">
      <div class="w-full">
        <iframe :src="footerData.google_map" class="w-full h-[450px]">  
        </iframe>
      </div>
    </div>
    <div
      class="w-full bg-cover bg-center py-[50px]"
      :style="{ backgroundImage: 'url(\'' + footerData.background + '\')' }"
    >
    <div class="container">
      <div class="grid md:grid-cols-3 grid-cols-1 md:gap-0 gap-10 justify-between md:items-start items-center">
        <div class="flex flex-col gap-2 md:justify-start md:items-start justify-center items-center">
          <span class="w-1/3 h-[8px] bg-white"></span>
          <h2 class="text-white text-[28px] leading-[50px] uppercase font-medium">{{ footerData.items[0].title }}</h2>
          <div class="flex flex-col gap-2 justify-start items-start">
            <div class="flex gap-2">
              <img src="/images/icon_map.png" class="w-6 h-6"/>
              <p class="text-white leading-[30px]" v-html="footerData.information[0].address"></p>
            </div>
            <div class="flex gap-2">
              <img src="/images/icon_map.png" class="w-6 h-6"/>
              <p class="text-white leading-[30px]" v-html="footerData.information[1].phone"></p>
            </div>
            <div class="flex gap-2">
              <img src="/images/icon_map.png" class="w-6 h-6"/>
              <p class="text-white leading-[30px]" v-html="footerData.information[2].mail"></p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:justify-start md:items-start justify-center items-center">
          <span class="w-1/3 h-[8px] bg-white"></span>
          <h2 class="text-white text-[28px] leading-[50px] uppercase font-medium">{{ footerData.items[1].title }}</h2>
          <div class="flex flex-col gap-2 justify-start items-start">
            <div 
              class="flex gap-4"
              v-for="(item, index) in footerData.open"
              :key="index"
            >
              <b class="text-white leading-[30px]">{{ item.date }}</b>
              <p class="text-white leading-[30px]">{{ item.time }}</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-2 md:justify-start md:items-start justify-center items-center">
          <span class="w-1/3 h-[8px] bg-white"></span>
          <h2 class="text-white text-[28px] leading-[50px] uppercase font-medium">{{ footerData.items[2].title }}</h2>
          <div class="flex flex-wrap gap-2 md:justify-start md:items-start justify-center items-center">
            <div 
              class="flex gap-4"
              v-for="(item, index) in footerData.icons"
              :key="index"
            >
              <img :src="item.icon" class="w-10 h-10"/>
            </div>
          </div>
          <div class="w-full flex justify-center">
            <iframe style="overflow:hidden;max-height:300px" title="Social fanpage" src="https://www.facebook.com/plugins/likebox.php?&amp;width=450&amp;height=450&amp;show_faces=false&amp;stream=true&amp;header=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FFastboyMarketingAgency" width="450" height="300" scrolling="no" frameborder="0" allowtransparency="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="w-full flex flex-col md:justify-center items-center py-4">
      <div class="aspect-[2/1]">
        <img :src="footerData.logo" class="w-[200px] h-[90px] object-cover"/>
      </div>
      <div class="flex gap-6">
        <div class="flex gap-2">
          <img src="/images/phone_black.png" class="w-6 h-6"/>
          <p class="text-main leading-[30px] font-medium" v-html="footerData.information[1].phone"></p>
        </div>
        <div class="flex gap-2">
          <img src="/images/mail_black.png" class="w-6 h-6"/>
          <p class="text-main leading-[30px] font-medium" v-html="footerData.information[2].mail"></p>
        </div>
      </div>
    </div>
    <div class="bg-main md:h-[36px] h-[180px]">
      <div class="container h-full flex md:justify-start md:items-end justify-center items-center" style="padding:0 !important">
        <p class="text-white text-[16px]">{{ footerData.year }}</p>
      </div>
    </div>
    <div class="fixed right-[15px] bottom-[85px] z-50 gap-[20px] flex flex-col">
      <NuxtLink to="/contact" class="border-[3px] border-white bg-main rounded py-[7px] px-[10px] cursor-pointer custom_hover">
        <img :src="footerData.call" alt="call" class="mx-auto w-8 h-8">
      </NuxtLink>
      <NuxtLink to="/booking" class="border-[3px] border-white bg-secondary rounded py-[7px] px-[10px] cursor-pointer custom_hover">
        <img :src="footerData.book" alt="book" class="mx-auto w-8 h-8">
      </NuxtLink>
    </div>
    <div v-show="isShowButtonToTop" class="fixed right-[15px] bottom-[15px] z-50 bg-secondary rounded py-[10px] px-[13px] cursor-pointer" @click="scrollToTop()">
      <img :src="footerData.buttonToTop" alt="icon to top" class="mx-auto w-8 h-8">
    </div>
  </footer>
</template>

<script setup lang="ts">
import footerData from '@/data/footer.json';
import headerData from "@/data/header.json";

const isShowButtonToTop = ref(false)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      isShowButtonToTop.value = true
    } else {
      isShowButtonToTop.value = false
    }
  })
})
</script>

<style lang="scss" scope>
.custom_hover {
  transition: all 0.3s ease;

  &:hover{
    border: 3px solid #000;
    background-color: #000;
  }

}
</style>
