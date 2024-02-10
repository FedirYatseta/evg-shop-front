<template>
  <div class="mt-[53px] sm:mt-0">
    <count-down-component :textColor="true" :time="time" />
    <main-section-component />
    <second-section />
    <products-section />
    <!-- <section class="w-full pb-8 lg:mb-16 shadow-xl">
      <div class="container mx-auto">
        <div
          class="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 lg:gap-x-10 lg:gap-y-6 px-6 pt-8 lg:px-0 lg:pt-0"
        >
          <div v-for="item in items" :key="item.path" class="shadow-lg relative">
            <router-link :to="item.path" class="flex flex-col h-full justify-between relative">
              <img :src="item.image" :alt="item.path" class="w-full h-full" />
              <div class="bg-black-50 h-10 md:h-14 p-2 flex items-center">
                <p class="w-full text-center text-white text-xs sm:text-base lg:text-sm uppercase">
                  {{ item.name }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section> -->
    <about-us-section />
    <question-section />
    <feedback-section />
    <email-section />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

import { categoryProduct } from '@/config/path'
import { useStore, mapGetters } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const items = ref(categoryProduct)

    return {
      items,
      time: computed(() => store.state.product?.confShop[0]?.saleTime)
    }
  },
  computed: {
    ...mapGetters({
      sortedAndSearchProducts: 'product/sortedAndSearchProducts'
    })
  }
})
</script>

<style></style>
