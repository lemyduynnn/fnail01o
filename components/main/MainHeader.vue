<!-- eslint-disable vue/html-self-closing -->
<template>
  <header
    class="sticky w-full top-0 z-[9999]"
    :style="{ backgroundColor: headerData.background }"
  >
    <div class="container">
      <nav class="lg:flex-row flex flex-col items-center justify-center h-full w-full lg:gap-6 lg:pb-0 pb-2">
        <div class="shrink-0 aspect-[2/1] h-full">
          <img :src="headerData.logo" :alt="headerData.alt_image" class="object-cover w-[200px] h-[90px]"/>
        </div>
        <div class="w-full overflow-x-auto">
          <ul class="flex items-center justify-center h-full">
            <li
              v-for="(header, index) of headerData.items"
              :key="index"
              :class="{ 'text-white bg-[#909090]': isActiveMenuItem(header.link) }"
              class="py-2 px-4 text-[14px] hover:text-secondary hover:cursor-pointer font-semibold uppercase whitespace-nowrap"
            >
              <NuxtLink :to="header.link">
                {{ header.text }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import headerData from "@/data/header.json";

const route = useRoute();

const isActiveMenuItem = (link: any) => {
  const isActive = route.path === link || route.params.id === link;
  console.log(isActive);
  return isActive;
};

</script>

<style lang="scss" scoped></style>
