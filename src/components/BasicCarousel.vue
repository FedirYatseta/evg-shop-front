<template>
  <Carousel :wrap-around="true" :breakpoints="breakpoints">
    <Slide v-for="slide in text" :key="slide.name">
      <div class="px-2 flex gap-2">
        <div class="w-16 h-16 contents">
          <img :src="slide.image" :alt="slide.name" class="w-16 h-16 rounded-full" />
        </div>
        <div class="flex flex-col items-start text-start">
          <p class="text-base font-bold">{{ slide.name }}</p>
          <p class="text-xs mb-2">{{ slide.city }}</p>
          <p class="text-sm italic">{{ slide.descr }}</p>
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
import icon1 from '../image/feedback/photo_1_2024-02-04_19-30-59.jpg'
import icon2 from '../image/feedback/photo_2_2024-02-04_19-30-59.jpg'
import icon3 from '../image/feedback/photo_3_2024-02-04_19-30-59.jpg'
import icon4 from '../image/feedback/photo_4_2024-02-04_19-30-59.jpg'
import icon5 from '../image/feedback/photo_5_2024-02-04_19-30-59.jpg'
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
        name: 'Саванчук Сергій, 29 років ',
        city: 'м. Одеса',
        descr:
          '"Купувала шкіряний месенджер на подарунок чоловіку. Все просто супер, сумка крутецька, чоловіку дуже сильно подобається нова обновка!" '
      },
      {
        image: icon2,
        name: 'Євген Горов, 26 років',
        city: 'м. Миколаїв',
        descr:
          '" Привіт! Купував сумку для макбуку в цьому інтернет - магазині, порекомендували друзі, то скажу що якість дійсно на високому рівні, дуже приємний менеджер який підібрав саме той розмір який мені підійшов. Рекомендую цей магазин."'
      },
      {
        image: icon3,
        name: 'Романов Олександр, 31 рік',
        city: 'м. Львів',
        descr:
          ' " Хочу лишити  позитивний відгук цьому магазину! Купую в них вже другу сумку, спочатку була бананка, яка через рік виглядає як нова, та й зараз замовив рюкзак ручної роботи, якість просто мега бомба, дякую вам за те що продаєте дійсно якісні речі!"'
      },
      {
        image: icon4,
        name: 'Ольга Лазутіна, 23 роки',
        city: 'м. Вінниця ',
        descr:
          '"Доброго дня! Купував у вас слінг, хожду з ним вже 2 тижня, все подобається, стильно та якісно, магазин цей рекомендую на 100%"  '
      },
      {
        image: icon5,
        name: 'Чокова Катерина, 27 років',
        city: 'м. Полтава ',
        descr:
          '"Купувала своєму хлопцю на День народження шкіряний рюкзак в цьому магазині і я скажу що тут дуже круті , гарні та високої якості сумки! Я однозначно рекомендую цей магазин та наступну сумку купуватиму також тільки тут." '
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
