<!-- eslint-disable vue/html-self-closing -->
<template>
  <header
    class="h-[90px] sticky w-full top-0 z-[9999] bg-[white]"
    :style="{ backgroundColor: headerData.background }"
    style="box-shadow: 0px 5px 60px 0px rgba(0, 0, 0, 0.45)"
  >
    <div class="container h-full w-full relative">
      <nav class="flex items-center justify-around h-full w-full">
        <div class="py-[10px]">
          <img :src="headerData.logo" :alt="headerData.alt_image" />
        </div>
        <div class="h-full hidden 2md:block">
          <ul class="flex items-center justify-between h-full">
            <li
              v-for="(header, index) of headerData.items"
              :key="index"
              class="py-[32px] px-[30px] hover:text-[#FF0101] hover:cursor-pointer hover:underline hover:font-bold"
            >
              <NuxtLink :to="header.link">
                {{ header.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <!-- show menu -->
        <div class="2md:hidden" @click="showMenu = !showMenu">
          <img :src="headerData.icon_menu" class="hover:cursor-pointer" />
          <div
            v-if="showMenu"
            class="top-0 h-screen w-full absolute flex flex-col items-center justify-start bg-[#FFF] right-[50%] translate-x-[50%]"
          >
            <div class="flex justify-end w-full hover:cursor-pointer p-2">
              <img
                width="30"
                height="30"
                :src="headerData.icon_close"
                :alt="headerData.alt_image"
              />
            </div>
            <div
              v-for="(header, index) of headerData.items"
              :key="index"
              class="px-[20px] py-[15px] w-full text-center hover:text-main hover:underline hover:font-bold"
            >
              <NuxtLink :to="header.link">
                {{ header.text }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from "@/data/header.json";

const showMenu = ref(false);
</script>

<style lang="scss" scoped></style>
