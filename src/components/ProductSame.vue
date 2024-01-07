div
<template>
  <Carousel :wrap-around="true" :autoplay="3000" :breakpoints="breakpoints">
    <Slide v-for="prod in products" :key="prod.id">
      <TransitionGroup name="product-list">
        <div class="p-1 flex flex-col justify-between">
          <div class="block text-start relative cursor-pointer">
            <div
              class="text-white absolute uppercase top-1 lg:top-6 right-0 bg-stone-400 text-xs font-light flex flex-col items-end justify-center"
            >
              <div v-if="prod.sale" class="relative my-1 px-2 h-5 w-12 lg:h-10 lg:w-24">
                <div
                  class="absolute inset-0 text-sm lg:text-3xl font-bold flex items-center justify-center h-full w-full bg-black-0 border-t-4 border-l-4"
                >
                  sale
                </div>
              </div>
              <div v-if="prod.newProduct" class="relative my-1 h-5 w-12 lg:h-10 lg:w-24">
                <div
                  class="absolute inset-0 text-sm lg:text-2xl font-bold flex items-center justify-center bg-black-50 h-full w-full border-t-4 border-l-4"
                >
                  New
                </div>
              </div>
              <div v-if="prod.hitProduct" class="relative my-1 h-5 w-12 lg:h-10 lg:w-24">
                <div
                  class="absolute inset-0 text-sm lg:text-2xl text-black-0 font-bold flex items-center justify-center bg-white border-t-4 border-l-4 h-full w-full"
                >
                  Хіт
                </div>
              </div>
            </div>
            <router-link :to="'/preview/' + prod._id">
              <div
                class="w-full h-auto"
                @mouseover="showSecondImage[prod.id] = true"
                @mouseleave="showSecondImage[prod.id] = false"
              >
                <img
                  :src="
                    showSecondImage[prod.id] && prod.imageSrc.length > 1
                      ? prod.imageSrc[1]
                      : prod.imageSrc[0]
                  "
                  alt="iconProduct"
                  class="w-full h-full"
                />
              </div>
            </router-link>
            <!-- <p class="font-bold text-center text-sm md:text-lg lg:text-2xl pt-2 md:pt-5">
            {{ prod.title }}
          </p>

          <div class="flex md:pt-2 mb-1 justify-center">
            <span
              v-show="prod.oldPrice"
              class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block mr-2"
            >
              <p class="text-black-200 text-base md:text-2xl xl:text-3xl">
                {{ prod.oldPrice }} UAH
              </p>
            </span>
            <p class="text-base sm:text-lg md:text-2xl xl:text-3xl text-black-50">
              {{ prod.price }} UAH
            </p>
          </div> -->
          </div>
        </div>
      </TransitionGroup>
    </Slide>

    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
export interface Product {
  _id: string
  id: string
  title: string
  size: number
  oldPrice: number
  price: number
  newProduct: boolean
  hitProduct: boolean
  imageSrc: string[]
  sale: boolean
}

export default defineComponent({
  name: 'product-same',
  components: {
    Carousel,
    Slide,
    Pagination
  },
  props: {
    products: {
      type: Array as () => Product[],
      required: true
    }
  },
  setup() {
    const showSecondImage = ref<Record<string, boolean>>({})
    return {
      showSecondImage
    }
  },
  data: () => ({
    breakpoints: {
      // 700px and up
      300: {
        itemsToShow: 2,
        snapAlign: 'center'
      },
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
.product-list-item {
  display: inline-block;
  margin-right: 10px;
}

.product-list-enter-active,
.product-list-leave-active {
  transition: all 1s ease;
}

.product-list-enter-from,
.product-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.product-list-move {
  transition: transform 0.4s ease;
}
</style>
