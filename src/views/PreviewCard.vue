<template>
  <section class="w-full bg-black-400 pt-16 md:pt-0" v-if="productEl?.oldPrice">
    <div class="container mx-auto">
      <div class="flex w-full">
        <count-down :textColor="true" :time="saleTime" />
      </div>
    </div>
  </section>
  <section class="w-full md:mt-2 pb-10">
    <div v-if="showModal" class="fixed inset-0 bg-black-100 z-50 flex items-center justify-center">
      <div class="bg-white p-4">
        <p class="text-2xl font-bold text-black">Товар додано</p>
      </div>
    </div>
    <div
      class="container mx-auto sm:pt-4 pb-24 lg:pb-48 lg:pt-0"
      :class="productEl?.oldPrice ? 'pt-2' : 'pt-16'"
    >
      <div class="grid grid-col gap-2 mx-auto px-2">
        <div class="flex justify-between items-center p-2 lg:py-10">
          <div @click="goBack" class="flex gap-1 uppercase text-2xl cursor-pointer">
            <img src="../image/arrow.png" alt="1" class="w-8 object-contain rotate-180" />
            <div class="text-xs lg:text-lg font-bold">Назад до каталогу</div>
          </div>
          <div class="cursor-pointer">
            <icon-close @click="goBack" />
          </div>
        </div>
        <div class="grid grid-col sm:grid-cols-2 md:pt-0 sm:gap-4">
          <div class="grid grid-col gap-1 mx-auto items-start">
            <div class="flex flex-col gap-3">
              <Carousel id="gallery" :items-to-show="1" v-model="currentSlide">
                <Slide v-for="slide in productEl?.imageSrc" :key="slide">
                  <div class="carousel__item">
                    <img
                      :src="slide"
                      alt="image-product-slide"
                      class="w-full h-full object-contain"
                    />
                  </div>
                </Slide>

                <template #addons>
                  <Navigation />
                </template>
              </Carousel>
              <Carousel id="thumbnails" :breakpoints="breakpoints" ref="carousel">
                <Slide
                  v-for="(slide, index) in productEl?.imageSrc"
                  :key="slide"
                  class="px-1 first:pl-0 last:pr-0"
                >
                  <div
                    @click="slideTo(index)"
                    class="carousel__item xl:h-16"
                    v-if="index <= productEl.imageSrc.length"
                  >
                    <img class="h-full w-full" :src="slide" alt="image-product-slide" />
                  </div>
                </Slide>
              </Carousel>
            </div>
          </div>
          <div class="flex flex-col justify-start mx-auto relative w-full">
            <div class="pt-8 sm:pt-0">
              <div class="grid grid-col gap-1">
                <div class="text-xl lg:text-2xl font-bold mb-2 lg:mb-2 text-center md:text-start">
                  {{ productEl?.title }}
                </div>
                <div
                  class="flex lg:px-2 flex-wrap mb-2 lg:mb-2 items-center justify-center md:justify-start"
                >
                  <span
                    v-if="productEl?.oldPrice"
                    class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:bg-main relative inline-block mr-4"
                  >
                    <p class="text-black-200 text-xl md:text-lg lg:text-xl xl:text-2xl">
                      {{ productEl?.oldPrice }} UAH
                    </p>
                  </span>
                  <p class="text-2xl md:text-lg lg:text-2xl xl:text-2xl text-black-50">
                    {{ productEl?.price }} UAH
                  </p>
                </div>
                <div class="py-5 flex flex-col sm:flex-row justify-center gap-2">
                  <router-link
                    :to="'/order/' + productEl?._id"
                    class="text-white uppercase text-center border bg-main px-6 py-1 lg:text-base w-full"
                    >Купити в один клік</router-link
                  >
                  <div
                    @click="() => addProductToBag(productEl?._id)"
                    class="text-white cursor-pointer uppercase text-center border bg-main px-6 py-1 lg:text-base w-full"
                  >
                    додати в кошик
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
              <div class="w-full">
                <div v-for="(question, index) in questions" :key="index" class="w-full my-3">
                  <div
                    class="bg-stone-100 w-full border border-black-400"
                    :class="[question.isExpanded ? 'border-b-0 ' : '']"
                  >
                    <button
                      :class="['flex w-full  justify-between p-2 items-center text-start ']"
                      @click="() => handleAccordion(index)"
                    >
                      <p class="text-sm sm:text-xs lg:text-base font-bold w-full text-start">
                        {{ question.title }}
                      </p>
                      <div class="panel__icon">
                        <icon-plus
                          :style="{
                            transform: `rotate(${question.isExpanded ? rotation : 0}deg)`,
                            transition: `transform 0.3s`
                          }"
                        />
                      </div>
                    </button>
                  </div>
                  <Collapse as="section" :when="question.isExpanded">
                    <div
                      class="p-3 bg-stone-100 sm:text-xs lg:text-base w-full border-b border-l border-r border-black-400"
                      v-html="processTextWithEmojis(question.description)"
                    ></div>
                  </Collapse>
                </div>
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
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { Collapse } from 'vue-collapsed'
import { useStore } from 'vuex'
import { useRoute, useRouter } from 'vue-router'
import { text } from '@/config/config'
import { notify } from 'notiwind'

export default defineComponent({
  name: 'desc-product',
  components: {
    Carousel,
    Slide,
    Navigation,
    Collapse
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const currentSlide = ref<any>(0)
    const sameProduct = ref<any>()
    const rotation = ref(45)
    const showModal = ref<boolean>(false)
    const questions = ref<any>(text)

    const isImage = (src) => {
      return /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(src)
    }
    const processTextWithEmojis = (text) => {
      const lines = text.split('\n')
      const paragraphs = lines.map((line) => `<p>${line}</p>`)
      return paragraphs.join('')
    }
    const handleAccordion = (selectedIndex: number) => {
      questions.value.forEach((question, index) => {
        if (index === selectedIndex) {
          // Якщо це питання, яке ми відкриваємо
          question.isExpanded = !question.isExpanded
        } else {
          // Інакше, закриваємо всі інші питання
          question.isExpanded = false
        }
      })
    }
    const addProductToBag = (id: string) => {
      store.commit('product/setProductToOrder', id)
      notify(
        {
          group: 'foo',
          title: 'Товар додано',
          text: ''
        },
        4000
      )
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
        itemsToShow: 7,
        snapAlign: 'start'
      },
      // 700px and up
      700: {
        itemsToShow: 6,
        snapAlign: 'start'
      },
      // 1024 and up
      1024: {
        itemsToShow: 9,
        snapAlign: 'start'
      },
      1440: {
        itemsToShow: 10,
        snapAlign: 'start'
      }
    })

    const goBack = () => {
      // router.push('/' + store.state.product.selectedProduct.type)
      router.back()
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
      addProductToBag,
      setShowModal: () => store.commit('product/setShowModal'),
      sameProduct: sameProduct,
      showModal,
      goToBuy,
      stopVideo,
      breakpoints,
      saleTime: computed(() => store.state.product?.confShop[0]?.saleTime),
      router,
      isImage,
      handleAccordion,
      rotation,
      processTextWithEmojis,
      questions
    }
  }
})
</script>

<style scoped></style>
