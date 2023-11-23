<template>
  <div class="grid grid-col mx-auto px-2 md:px-16">
    <div class="flex justify-between items-center p-2 md:hidden">
      <div class="before:content-['←'] before:pr-1 flex uppercase text-xs">
        <div @click="setShowModal">Назад до каталогу</div>
      </div>
      <div>
        <IconClose @click="setShowModal" />
      </div>
    </div>
    <div class="grid grid-col md:grid-cols-2 py-5 md:pt-0 gap-4">
      <div class="flex flex-col justify-center mx-auto">
        <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
          <Slide v-for="slide in selectedProduct.imageSrc" :key="slide">
            <div class="w-full h-auto mb-2">
              <img
                :src="slide"
                alt="image-product-slide"
                class="rounded-b-md max-h-[510px] mx-auto"
              />
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
            <div @click="slideTo(index)" class="mx-2 pt-5">
              <img
                class="opacity-10 rounded-md"
                :src="slide"
                alt="image-product-slide"
                :class="{ 'opacity-100': index === currentSlide }"
              />
            </div>
          </Slide>
        </Carousel>
      </div>
      <div class="flex flex-col justify-start mx-auto relative">
        <div>
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <div class="text-xl font-bold mt-5">{{ selectedProduct.title }}</div>
              <div class="flex px-2 flex-wrap">
                <p class="text-sm md:text-lg xl:text-2xl text-red">
                  {{ selectedProduct.price }} UAH
                </p>
                <span
                  class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block ml-1"
                >
                  <p class="text-black-200 text-sm md:text-lg xl:text-2xl">
                    {{ selectedProduct.oldPrice }} UAH
                  </p>
                </span>
              </div>
            </div>
            <div v-if="selectedProduct.sale">
              <count-down class="bg-white" :textColor="true" />
            </div>
          </div>

          <div class="text-lg font-bold"><strong>Опис</strong></div>
          <div class="text-xs font-light">
            <QuillEditor
              theme="snow"
              v-model:content="selectedProduct.describe"
              contentType="html"
              readOnly="true"
            />
          </div>
          <div class="border-brown-50 border-t md:mt-16"></div>
        </div>
        <MyButton
          @click="goToBuy(selectedProduct._id)"
          class="text-white border bg-brown-50 mt-5 p-2"
          >ДОДАТИ У КОШИК</MyButton
        >
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
import CountDown from './CountDown.vue'
export default defineComponent({
  components: {
    Carousel,
    Slide,
    MyButton,
    IconClose,
    CountDown
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

    const goToBuy = (id) => {
      store.commit('product/setShowModal', false)
      store.commit('product/setProductToOrder', id)
    }

    return {
      currentSlide,
      slideTo,
      goBack,
      selectedProduct: computed(() => store.state.product.selectedProduct),
      setShowModal: () => store.commit('product/setShowModal'),
      goToBuy
    }
  }
})
</script>

<style scoped></style>
