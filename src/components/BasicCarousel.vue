<template>
  <Carousel :wrap-around="true" :autoplay="3000" :breakpoints="breakpoints">
    <Slide v-for="slide in text" :key="slide.name">
      <div class="px-2 flex gap-2">
        <div class="w-36 h-36">
          <img :src="slide.image" :alt="slide.name" />
        </div>
        <div class="flex flex-col items-start text-start">
          <p class="text-xs">{{ slide.name }}</p>
          <p class="text-base mb-2">{{ slide.city }}</p>
          <p class="text-sm">{{ slide.descr }}</p>
        </div>
      </div>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>
//
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { feedback } from '@/config/path'
import 'vue3-carousel/dist/carousel.css'
import icon1 from '../image/iconfeedback.png'
export default defineComponent({
  name: 'basic-carousel',
  components: {
    Carousel,
    Slide,
    Pagination
  },
  setup() {
    const init = [
      {
        image: icon1,
        name: '1.02.2023',
        city: 'Роман Черненко',
        descr: 'Дуже задоволена покупкою, все супер, купувала чоловіку на подарунок! Рекомендую!'
      },
      {
        image: icon1,
        name: '1.02.2023',
        city: 'Роман Черненко',
        descr: 'Дуже задоволена покупкою, все супер, купувала чоловіку на подарунок! Рекомендую!'
      }
    ]

    const array = ref(feedback)
    const text = ref(init)
    return {
      array,
      text
    }
  },
  data: () => ({
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 2,
        snapAlign: 'start'
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
