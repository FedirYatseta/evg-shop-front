//:autoplay="3000"
<template>
  <Carousel :breakpoints="breakpoints">
    <Slide v-for="prod in products" :key="prod.id">
      <TransitionGroup name="product-list">
        <div class="p-1 flex flex-col justify-between">
          <div class="flex flex-col text-start relative cursor-pointer">
            <router-link :to="'/preview/' + prod._id" class="w-full h-auto">
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
              <!-- <p class="flex items-center font-bold text-center text-xs10 whitespace-pre">
                {{ prod.title }}
              </p> -->
            </router-link>
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
import 'vue3-carousel/dist/carousel.css'
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
        itemsToShow: 6,
        snapAlign: 'center'
      },
      // 1024 and up
      1024: {
        itemsToShow: 8,
        snapAlign: 'center'
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
