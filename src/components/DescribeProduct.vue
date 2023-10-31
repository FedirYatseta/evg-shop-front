<template>
  <div class="grid grid-col mx-auto px-2">
    <div class="flex justify-between items-center p-2">
      <div class="before:content-['←'] before:pr-1 flex uppercase text-xs">
        <div @click="setShowModal">Назад до каталогу</div>
      </div>
      <div class="cancel-btn">
        <IconClose @click="setShowModal" />
      </div>
    </div>
    <div class="flex flex-col md:flex-row mx-auto pt-5">
      <div class="block max-w-[400px]">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
          <Slide v-for="slide in selectedProduct.imageSrc" :key="slide">
            <div class="w-full h-auto my-2">
              <img :src="slide" alt="image-product-slide" />
            </div>
          </Slide>
        </Carousel>

        <Carousel
          id="thumbnails"
          :items-to-show="4"
          :wrap-around="true"
          v-model="currentSlide"
          ref="carousel"
        >
          <Slide v-for="(slide, index) in selectedProduct.imageSrc" :key="slide">
            <div @click="slideTo(index)">
              <img
                class="opacity-10"
                :src="slide"
                alt="image-product-slide"
                :class="{ 'opacity-100': index === currentSlide }"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="block md:px-5">
        <div class="text-xl font-bold mt-5">{{ selectedProduct.title }}</div>
        <div class="line-through text-red-500 mt-5">{{ selectedProduct.oldPrice + ' грн' }}</div>
        <div class="new-price-content">{{ selectedProduct.price + ' грн' }}</div>
        <MyButton class="bg-slate-50 hover:bg-slate-100 text-slate-950 mt-5"
          >Швидке замовлення</MyButton
        >
        <div class="text-lg font-bold"><strong>Опис</strong></div>
        <div class="text-xs font-light">{{ selectedProduct.describe }}</div>
        <div class="text-lg font-bold"><strong> Характеристики</strong></div>
        <ul class="text-xs font-light list-disc pl-5">
          <li>Матеріал: натуральна овеча шкіра</li>
        </ul>
        <div class="text-lg font-bold"><strong>Структура</strong></div>
        <ul class="text-xs font-light list-disc pl-5">
          <li>одне основне відділення на молнії;</li>
        </ul>
        <div class="text-xs font-light py-10">Обмін та повернення протягом 14 календарних днів</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MyButton from '@/UI/MyButton.vue'
import { defineComponent, computed, ref } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import IconClose from '@/assets/IconClose.vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default defineComponent({
  components: {
    Carousel,
    Slide,
    MyButton,
    IconClose
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const currentSlide = ref<any>(0)

    const goBack = () => {
      router.go(-1)
    }
    const slideTo = (val) => {
      console.log('val', val)

      currentSlide.value = val
    }
    return {
      currentSlide,
      slideTo,
      goBack,
      selectedProduct: computed(() => store.state.product.selectedProduct),
      setShowModal: () => store.commit('product/setShowModal')
    }
  }
})
</script>

<style scoped></style>
