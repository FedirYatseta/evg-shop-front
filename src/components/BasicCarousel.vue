<template>
  <Carousel :wrap-around="true" :v-bind="settings" :breakpoints="breakpoints">
    <Slide v-for="slide in array" :key="slide.image">
      <div class="px-2">
        <img :src="slide.image" class="carousel__item" />
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { feedback } from '@/config/path'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Pagination
  },
  setup() {
    const array = ref(feedback)
    return {
      array
    }
  },
  data: () => ({
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center'
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 3,
        snapAlign: 'start'
      }
    }
  })
})
</script>

<style scoped>
.carousel__item {
  height: auto;
  padding: 10px;
  margin: 25px 5px;

  background: #fff;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.25),
    0px 6px 6px 0px rgba(0, 0, 0, 0.21),
    0px 12px 7px 0px rgba(0, 0, 0, 0.13),
    0px 22px 9px 0px rgba(0, 0, 0, 0.04),
    0px 35px 10px 0px rgba(0, 0, 0, 0);
}
</style>
