<template>
  <Carousel :wrap-around="true" :autoplay="3000" :breakpoints="breakpoints">
    <Slide v-for="slide in array" :key="slide.image">
      <div class="px-2">
        <img :src="slide.image" class="carousel__item" alt="slider image" />
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
  name: 'basic-carousel',
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
  padding: 10px;
  object-fit: contain;
  margin: 25px 5px;
  width: 100%;
  background: #fff;
  box-shadow:
    0px 1px 3px 0px rgba(0, 0, 0, 0.25),
    0px 6px 6px 0px rgba(0, 0, 0, 0.21),
    0px 12px 7px 0px rgba(0, 0, 0, 0.13),
    0px 22px 9px 0px rgba(0, 0, 0, 0.04),
    0px 35px 10px 0px rgba(0, 0, 0, 0);
}
</style>
