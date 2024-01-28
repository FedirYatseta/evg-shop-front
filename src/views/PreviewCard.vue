<template>
  <section class="w-full md:mt-2 pb-10">
    <div class="container mx-auto pt-20 sm:pt-4 pb-24 lg:pb-64 lg:pt-0">
      <div class="grid grid-col gap-2 mx-auto px-2 md:px-16">
        <div class="flex justify-between items-center p-2 lg:py-10">
          <div @click="goBack" class="flex gap-1 uppercase text-2xl cursor-pointer">
            <img src="../image/arrow.png" alt="1" class="w-8 object-contain rotate-180" />
            <div class="text-xs lg:text-2xl font-bold">Назад до каталогу</div>
          </div>
          <div class="cursor-pointer">
            <icon-close @click="goBack" />
          </div>
        </div>
        <div class="grid grid-col sm:grid-cols-2 md:pt-0 sm:gap-4">
          <div class="grid grid-col gap-4 mx-auto items-start">
            <Carousel id="gallery" :items-to-show="1" :wrap-around="true" v-model="currentSlide">
              <Slide v-for="slide in productEl?.imageSrc" :key="slide">
                <div class="carousel__item">
                  <img
                    :src="slide"
                    alt="image-product-slide"
                    class="rounded-b-md w-full h-full object-contain"
                  />
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
              <Slide v-for="(slide, index) in productEl?.imageSrc" :key="slide">
                <div
                  @click="slideTo(index)"
                  class="carousel__item px-2 max-h-[150px] md:max-h-[250px]"
                >
                  <img
                    class="opacity-1000 rounded-md object-cover h-full"
                    :src="slide"
                    alt="image-product-slide"
                  />
                </div>
              </Slide>
            </Carousel>
          </div>
          <div class="flex flex-col justify-start mx-auto relative">
            <div class="pt-8 sm:pt-0">
              <div class="grid grid-col gap-1">
                <div class="text-xl lg:text-4xl font-bold mb-2 lg:mb-5 text-center md:text-start">
                  {{ productEl?.title }}
                </div>
                <div
                  class="flex lg:px-2 flex-wrap mb-2 lg:mb-5 items-center justify-center md:justify-start"
                >
                  <span
                    class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:bg-main relative inline-block mr-4"
                  >
                    <p class="text-black-200 text-xl md:text-lg lg:text-3xl xl:text-4xl">
                      {{ productEl?.oldPrice }} UAH
                    </p>
                  </span>
                  <p class="text-2xl md:text-lg lg:text-3xl xl:text-5xl text-black-50">
                    {{ productEl?.price }} UAH
                  </p>
                </div>
                <div class="py-5 flex justify-center">
                  <router-link
                    :to="'/order/' + productEl?._id"
                    class="text-white text-center border bg-main px-24 py-4 lg:text-2xl w-full"
                    >Замовити</router-link
                  >
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
            </div>
          </div>
        </div>
        <div v-if="productEl?.videoUrl" class="text-2xl lg:text-4xl font-bold mb-2 lg:mb-5 mx-auto">
          Відео огляд
        </div>
        <div v-if="productEl?.videoUrl" class="mx-auto w-full max-w-[620px] h-full min-h-[300px]">
          <iframe
            class="rounded w-full h-full"
            :src="productEl.videoUrl"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
            allowfullscreen
          />
        </div>
        <!-- <div class="text-2xl lg:text-4xl font-bold mb-2 lg:mb-5 mx-auto mt-20">Схожі товари</div> -->

        <!-- <product-same :products="sameProduct" /> -->
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted, watch } from 'vue'
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
    console.log('route', route)

    const currentSlide = ref<any>(0)
    const sameProduct = ref<any>()

    const isImage = (src) => {
      return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(src)
    }

    onMounted(() => {
      store.commit('product/setProductId', route.params.id)
      const data = store.state.product.product.filter(
        (x) => x.type === store.state.product.selectedProduct?.type
      )

      sameProduct.value = data
    })

    watch(
      () => route.matched,
      () => {
        store.commit('product/setProductId', route.params.id)
      }
    )

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
      router.push('/product/' + store.state.product.selectedProduct.type)
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
      sameProduct: sameProduct,
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
