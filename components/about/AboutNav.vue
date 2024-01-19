<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="w-full"
  >
    <div class="bg_color w-full py-[34px]">
      <div>
        <ul class="flex items-center justify-center">
          <li
            class="first_items text-[22px] text-white uppercase hover:cursor-pointer font-semibold whitespace-nowrap"
          >
            <NuxtLink :to="headerData.items[0].link">
              {{ headerData.items[0].text }}
            </NuxtLink>
          </li>
          <li
            class="text-[22px] text-white uppercase hover:cursor-pointer font-semibold whitespace-nowrap"
          >
            {{ currentText }}
          </li>
        </ul>
      </div>
      <h2 class="font-bold text-[42px] uppercase text-white text-center leading-[42px] mt-2" v-html="block.sub_title"></h2>
    </div>
  </section>
</template>

<script lang="ts" setup>
import headerData from "@/data/header.json";

interface Props {
  dataBinding: any;
  block: any;
}

const { dataBinding, block } = defineProps<Props>();
  const route = useRoute();

const currentText = getCurrentPageText();

function getCurrentPageText(): string {
  const currentPagePath = route.path.replace(/^\//, '');
  return currentPagePath;
}
</script>


<style lang="scss" scoped>
.bg_color{
  background-color: rgba(72, 72, 72, 0.7);

}
.first_items {
  &::after {
    content: "/";
  }
}

</style>
