<!-- eslint-disable vue/html-self-closing -->
<template>
  <section
    :id="block.id"
    :data-cms-binding="dataBinding"
    class="section_gallery"
  >
    <div class="container">
      <ul class="w-full sm:flex-row flex flex-col gap-4 justify-center items-center py-[20px]">
        <li 
          v-for="(item, index) in block.list" 
          :key="index"
          @click="changeActiveTab(index)"
          :class="{ 'bg-main text-white': activeTab === index }"
          class="hover:bg-main hover:text-white sm:w-auto w-full border-[1px] border-main p-2 rounded-lg text-center"
        >
          {{ item.tab }}
        </li>
      </ul>

      <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-[10px] mb-6 relative">
        <div v-if="loading" class="loading-dots py-10 bg-main opacity-50 w-full h-full absolute">
          <div class="loading-dots--dot" />
          <div class="loading-dots--dot" />
          <div class="loading-dots--dot" />
        </div>
        <div
          v-for="(ele, idx) in block.list[activeTab].listImg"
          :key="idx"
          class="cursor-pointer aspect-[303/303] hover_transform_item"
        >
          <img :src="ele.img" :alt="ele.alt" class="object-cover w-full h-full" />
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
const activeTab = ref(0);
const changeActiveTab = (index: number) => {
  activeTab.value = index;
};

const loading = ref(false);

watch([activeTab], async () => {
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
});
</script>

<style lang="scss">
.section_gallery {
  .hover_transform_item {
    transition: all 0.6s;
    &:hover{
      transform: scale(1.04);
      transition-duration: 700ms;
    }
  }
}
</style>
