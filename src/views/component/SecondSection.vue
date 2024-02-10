<template>
  <section class="w-full shadow-3xl pt-8 sm:py-2 lg:pb-10">
    <div class="container mx-auto py-4 lg:py-10">
      <div class="flex flex-col sm:flex-row sm:gap-5 lg:gap-20 items-center sm:items-start">
        <div class="px-5 w-full md:w-1/2 h-full flex my-4 max-h-[250px] lg:w-100 sm:flex sm:px-0">
          <img
            src="../../image/photo_2024-02-03_11-01-17.jpg"
            alt="main image"
            class="w-full h-auto object-contain"
          />
        </div>
        <div
          class="flex flex-col justify-center px-2 sm:px-0 gap-2 lg:gap-4 w-full md:w-1/2 sm:gap-4 lg:gap-5 xl:gap-6"
        >
          <p
            class="text-xl font-bold sm:text-xl lg:text-xl xl:text-2xl uppercase text-center md:text-start mb-7 sm:mb-2 pt-2"
          >
            Чому саме ми?
          </p>
          <ul
            class="flex flex-col gap-3 lg:gap-2 text-sm sm:text-xs lg:text-xs xl:text-base px-8 md:px-0"
          >
            <li v-for="item in list" :key="item" class="flex items-center gap-2">
              <icon-done-svg class="w-4 h-4 min-w-4 min-h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6" /><span>{{
                item
              }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { list } from '../../config/config'
export default defineComponent({
  name: 'second-section',
  setup() {
    return { list }
  }
})
</script>

<style scoped></style>
