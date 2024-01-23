<!-- eslint-disable vue/html-self-closing -->
<template>
   <section
     :id="block.id"
     :data-cms-binding="dataBinding"
     class="w-full"
   >
      <div class="container">
         <form class="form-booking py-[20px]">
            <div class="flex flex-col gap-[15px] text-[14px]">
               <div class="flex flex-col gap-[8px] lg:w-1/4 w-full">
                  <label class="">{{ block.form.label_date }}</label>
                  <UPopover :popper="{ placement: 'bottom-start' }"  class="custom_calendar">
                     <UButton icon="i-heroicons-calendar-days-20-solid" :label="label"/>
                     <template #panel="{ close }">
                        <LazyDatePicker v-model="date" @close="close"/>
                     </template>
                  </UPopover>               
               </div>
               <div class="grid lg:grid-cols-[3fr_1fr] md:grid-cols-[1fr_1fr] gap-[15px] items-start w-full">
                  <div class="flex flex-col gap-4">
                     <div v-for="(item, index) in selectionBlocks" :key="index" class="grid lg:grid-cols-[2fr_1fr] md:grid-cols-[1fr_1fr] gap-[15px] items-end w-full">
                        <div class="flex flex-col gap-[8px]">
                           <div class="flex gap-[4px] items-center">
                              <img v-if="index > 0" src="/images/icon_remove.png" class="w-4 h-4 cursor-pointer" @click="removeItem(index)"/>
                              <label>{{  block.form.label_service }}</label>
                           </div>
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
                     <button class="border-[2px] border-[#ced4da] w-full bg-secondary uppercase py-3.5 px-10 text-white text-[14px] font-medium">{{ block.form.button }}</button>
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
                  <div class="grid lg:grid-cols-4 gap-4 md:grid-cols-2 grid-cols-1 w-full">
                     <div v-for="(item, index) in selectionBlocks" :key="index" class="bg-gray-100 p-4 border-l-[3px] border-gray-200">
                        <b v-if="selectedtechnician(index)" class="text-[18px] font-bold leading-[32px]">{{ selectedtechnician(index).option }}</b>
                        <p v-if="selectedService(index)" class="text-[14px] font-light leading-[21px]">{{ selectedService(index).option }}</p>
                     </div>
                  </div>
                  <div class="flex flex-col gap-4 w-full">
                     <b v-if="date" class="text-[24px] font-bold">{{ label }}</b>
                  </div>
                  <div class="flex flex-col gap-2 w-full">
                     <h2 class="text-main text-[18px] font-bold leading-[32px]">{{ block.form.time_morning_appoinment.title }}</h2>
                     <div class="flex flex-wrap gap-2">
                        <div @click="isOpen = true" v-for="(item, index) in block.form.time_morning_appoinment.open_time" :key="index" class="cursor-pointer py-2 px-4 rounded-lg border">
                           {{ item.time }}
                        </div>
                     </div>
                  </div>
                  <div class="flex flex-col gap-2 w-full">
                     <h2 class="text-main text-[18px] font-bold leading-[32px]">{{ block.form.time_afternoon_appoinment.title }}</h2>
                     <div @click="isOpen = true" class="flex flex-wrap gap-2">
                        <div v-for="(item, index) in block.form.time_afternoon_appoinment.open_time" :key="index" class="cursor-pointer py-2 px-4 rounded-lg border">
                           {{ item.time }}
                        </div>
                     </div>
                  </div>
                  <div class="lg:hidden block">
                     <UModal
                        v-model="isOpen"
                        id="custom-modal"
                        prevent-close
                     >
                        <UCard
                           :ui="{
                           ring: '',
                           divide: 'divide-y divide-gray-100 dark:divide-gray-800 ',
                           }"
                        >
                           <div class="flex items-center justify-end">
                           <UButton
                              color="gray"
                              variant="ghost"
                              icon="i-heroicons-x-mark-20-solid"
                              class="-my-1"
                              @click="isOpen = false"
                           />
                           </div>
                           <div
                              class="flex flex-col gap-4"
                           >
                              <h2 class="text-main text-[34px] leading-=[26px] font-bold">{{block.form.confirm.title}}</h2>
                              <p class="text-[14px] font-light">{{block.form.confirm.sub_title}}</p>
                              <div class="grid lg:grid-cols-[1fr_1fr] grid-cols-[1fr] w-full gap-4">
                                 <div class="flex flex-col">
                                    <label class="text-[14px] font-light">{{ block.form.confirm.label_name }}</label>
                                    <input type="text" class="p-4 text-[14px] border"/>
                                 </div>
                                 <div class="flex flex-col">
                                    <label class="text-[14px] font-light">{{ block.form.confirm.label_phone }}</label>
                                    <input type="text" class="p-4 text-[14px] border"/>
                                    <p class="text-[13px] italic font-bold">{{ block.form.confirm.note_phone }}</p>
                                 </div>
                              </div>
                              <div class="flex flex-col">
                                 <label class="text-[14px] font-light">{{ block.form.confirm.label_note }}</label>
                                 <textarea arows="4" cols="50" class="p-4 text-[14px] border" placeholder="(Max length 200 character)"></textarea>
                              </div>
                              <div class="grid lg:grid-cols-[1fr_2fr] grid-cols-[1fr] w-full gap-4">
                                 <button class="py-3.5 uppercase text-white text-[14px] border-[2px] border-[#ced4da] bg-[#d7d7d7]">{{ block.form.confirm.text_button_cancel }}</button>
                                 <button class="py-3.5 uppercase text-white text-[14px] border-[2px] border-[#ced4da] bg-secondary">{{ block.form.confirm.text_button_confirm }}</button>
                              </div>
                           </div>
                        </UCard>
                     </UModal>
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

   const isOpen = ref(false);

const selectionBlocks = ref([{ service: null, technician: null }]);
const addAnother = () => {
  selectionBlocks.value.push({ service: null, technician: null });
};

const selectedService = (index:any) => {
  return serviceChecked.value.find((item:any) => item.option === selectionBlocks.value[index]);
};
const selectedtechnician = (index:any) => {
  return technicianChecked.value.find((item:any) => item.option === selectionBlocks.value[index]);
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

const removeItem = (removeIndex:any) => {
  selectionBlocks.value.splice(removeIndex, 1);
};

</script>

 <style lang="scss" scoped>
.custom_calendar {
   .bg-primary-500 {
    --tw-bg-opacity: 0;
   }
   .text-white {
      color: #000;
      font-size: 14px;
      font-weight: 300;
      border: 1px solid #d7d7d7;
      border-radius: 0;
   }
}
 </style>
 