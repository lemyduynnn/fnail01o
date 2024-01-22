<!-- eslint-disable vue/html-self-closing -->
<template>
   <section
     :id="block.id"
     :data-cms-binding="dataBinding"
     class="w-full"
   >
      <div class="container">
         <form class="form-booking">
            <div class="flex flex-col gap-[15px] text-[14px]">
               <div class="flex flex-col gap-[8px] lg:w-1/4 w-full">
                  <label class="">{{ block.form.label_date }}</label>
                  <UPopover :popper="{ placement: 'bottom-start' }">
                     <UButton icon="i-heroicons-calendar-days-20-solid" :label="label" />
                     <template #panel="{ close }">
                        <LazyDatePicker v-model="date" @close="close"/>
                     </template>
                  </UPopover>               
               </div>
               <div class="grid lg:grid-cols-[3fr_1fr] md:grid-cols-[1fr_1fr] gap-[15px] items-start w-full">
                  <div class="flex flex-col gap-4">
                     <div v-for="(item, index) in selectionBlocks" :key="index" class="grid lg:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr] gap-[15px] items-end w-full">
                        <div class="flex flex-col gap-[8px]">
                           <label>{{  block.form.label_service }}</label>
                           <select v-model="item.service" class="border p-4">
                              <option value="null" disabled selected>Select service</option>
                              <option v-for="(item, index) in block.form.select_service" :key="index" :value="item.option">
                                 {{ item.option }}
                              </option>
                           </select>
                        </div>
                        <div class="flex flex-col gap-[8px]">
                           <label>{{ block.form.label_technician }}</label>
                           <select v-model="item.technician" class="border p-4">
                              <option value="null" disabled selected>Select technician</option>
                              <option v-for="(item, index) in block.form.select_technician" :key="index" :value="item.option">
                                 {{ item.option }}
                              </option>
                           </select>
                        </div>
                     </div>
                  </div>
                  <div class="flex flex-col md:py-[32px]">
                     <button class="w-full bg-secondary uppercase py-3.5 px-10 text-white text-[14px] font-medium">{{ block.form.button }}</button>
                  </div>
               </div>
               <div class="flex gap-2">
                  <img src="/images/icon_add.png" alt="" class="w-6 h-6 cursor-pointer" @click="addAnother"/>
                  <label>{{ block.form.add }}</label>
               </div>
               <div class="flex flex-col gap-4 relative">
                  <div v-if="loading" class="loading-dots py-10 bg-main opacity-50 w-full h-full absolute">
                     <div class="loading-dots--dot" />
                     <div class="loading-dots--dot" />
                     <div class="loading-dots--dot" />
                  </div>
                  <div class=" flex flex-col justify-center items-center w-full gap-2">
                     <h2 class="font-bold text-[34px] leading-[40px] text-center">{{ block.form.title }}</h2>
                     <span class="bg-gray-300 h-[3px] w-[100px]"></span>
                  </div>
                  <div class="bg-gray-100 p-4 w-1/4 border-l-[3px] border-gray-200">
                     <b v-if="selectedtechnician" class="text-[18px] font-bold leading-[32px]">{{ selectedtechnician.option }}</b>
                     <p v-if="selectedService" class="text-[14px] font-light leading-[21px]">{{ selectedService.option }}</p>
                  </div>
                  <div class="flex flex-col gap-4 w-full">
                     <b v-if="date" class="text-[24px] font-bold">{{ label }}</b>
                  </div>
               </div>
            </div>
         </form>
      </div>
   </section>
 </template>
 
 <script lang="ts" setup> 
 interface Props {
   dataBinding: any;
   block: any;
 }

 const { dataBinding, block } = defineProps<Props>();

const selectionBlocks = ref([{ service: null, technician: null }]);
const addAnother = () => {
  selectionBlocks.value.push({ service: null, technician: null });
};


const selectedService = () => {
  return serviceChecked.value.find((item) => item.option === selectionBlocks.value.service);
};
const selectedtechnician = () => {
  return technicianChecked.value.find((item) => item.option === selectionBlocks.value.technician);
};
const service = ref<string | null>(null);
const serviceChecked = ref(
  block.form.select_service.map((e) => {
    return { ...e, active: false };
  })
);
const technician = ref<string | null>(null);
const technicianChecked = ref(
  block.form.select_technician.map((e) => {
    return { ...e, active: false };
  })
);


const date = ref(new Date());
const label = computed(() => date.value.toLocaleDateString('en-us', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }));

const loading = ref(false);

watch([selectedService, serviceChecked, selectedtechnician,technicianChecked, label], async () => {
  loading.value = true;
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
});

</script>

 <style lang="scss" scoped>

 </style>
 