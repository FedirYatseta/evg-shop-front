<template>
  <div class="w-full md:mt-2 pb-10">
    <div class="container mx-auto pt-20 pb-24 lg:pb-64 lg:pt-0">
      <div class="grid grid-col gap-2 mx-auto px-2 md:px-16">
        <div class="flex justify-between items-center p-2 lg:py-10">
          <div class="before:content-['←'] before:lg:text-2xl before:pr-1 flex uppercase text-xs">
            <div @click="router.go(-1)" class="text-xs lg:text-2xl">Назад до каталогу</div>
          </div>
          <div>
            <icon-close @click="router.go(-1)" />
          </div>
        </div>
        <div class="grid grid-col md:grid-cols-2 py-5 md:pt-0 lg:gap-10">
          <div class="grid grid-col gap-4 mx-auto">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
              <Slide v-for="slide in productEl.imageSrc" :key="slide">
                <div class="carousel__item">
                  <img
                    v-if="isImage(slide)"
                    :src="slide"
                    alt="image-product-slide"
                    class="rounded-b-md"
                  />
                  <iframe
                    v-else
                    class="rounded-b-md w-full h-full"
                    :src="slide"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowfullscreen
                  ></iframe>
                </div>
              </Slide>
            </Carousel>

            <Carousel
              id="thumbnails"
              :breakpoints="breakpoints"
              :wrap-around="true"
              v-model="currentSlide"
              ref="carousel"
            >
              <Slide v-for="(slide, index) in productEl.imageSrc" :key="slide">
                <div
                  @click="slideTo(index)"
                  class="carousel__item px-2 max-h-[150px] md:max-h-[250px]"
                >
                  <img
                    v-if="isImage(slide)"
                    class="opacity-10 rounded-md object-cover h-full"
                    :src="slide"
                    alt="image-product-slide"
                    :class="{ 'opacity-100': index === currentSlide }"
                  />
                  <div v-else class="w-[90%] h-full">
                    <div class="absolute inset-0 z-50"></div>
                    <iframe
                      :src="slide"
                      title="YouTube video player"
                      frameborder="0"
                      allowfullscreen
                      class="opacity-10 rounded-md w-full h-full"
                      :class="{ 'opacity-100': index === currentSlide }"
                    ></iframe>
                  </div>
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="flex flex-col justify-start mx-auto relative">
            <div class="pt-8 lg:pt-0">
              <div class="grid grid-col gap-4">
                <div class="w-full">
                  <div class="text-xl lg:text-4xl font-bold mb-2 lg:mb-5">
                    {{ productEl?.title }}
                  </div>
                  <div class="flex lg:px-2 flex-wrap mb-2 lg:mb-5 items-center">
                    <span
                      class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block mr-4"
                    >
                      <p class="text-black-200 text-xl md:text-lg xl:text-3xl">
                        {{ productEl?.oldPrice }} UAH
                      </p>
                    </span>
                    <p class="text-2xl md:text-lg xl:text-4xl text-red">
                      {{ productEl?.price }} UAH
                    </p>
                  </div>
                </div>
              </div>

              <div v-if="productEl?.describe">
                <QuillEditor
                  theme="snow"
                  v-model:content="productEl.describe"
                  contentType="html"
                  :readOnly="true"
                />
              </div>
              <div class="border-brown-50 border-t md:mt-16 mt-5"></div>
            </div>
            <router-link
              :to="'/order/' + productEl?._id"
              class="text-white text-center border bg-brown-50 mt-5 px-24 py-4 lg:text-2xl"
              >Замовити</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'desc-product',
  components: {
    Carousel,
    Slide
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const currentSlide = ref<any>(0)
    const isImage = (src) => {
      return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(src)
    }

    onMounted(async () => {
      await store.commit('product/setProductId', route.params.id)
    })

    const breakpoints = ref({
      250: {
        itemsToShow: 3,
        snapAlign: 'center'
      },
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'center'
      }
    })

    const goBack = () => {
      router.go(-1)
    }
    const slideTo = (val) => {
      currentSlide.value = val
    }

    const goToBuy = (id) => {
      store.commit('product/setProductToOrder', id)
    }

    const stopVideo = (e) => {
      e.stopPropagation()
    }

    return {
      currentSlide,
      slideTo,
      goBack,
      productEl: computed(() => store.state.product.selectedProduct),
      buyProduct: (id: string) => store.commit('product/setProductToOrder', id),
      setShowModal: () => store.commit('product/setShowModal'),
      goToBuy,
      stopVideo,
      breakpoints,
      saleTime: computed(() => store.state.product?.confShop[0]?.saleTime),
      router,
      isImage
    }
  }
})
</script>

<style scoped></style>
