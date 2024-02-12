<template>
  <div
    class="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3 sm:gap-y-8 sm:gap-x-3 lg:gap-5 xl:gap-x-6 xl:gap-y-12 px-5"
  >
    <TransitionGroup name="product-list">
      <div
        class="p-3 md:p-1 flex flex-col justify-between"
        v-for="prod in products"
        :key="prod._id"
      >
        <div class="block text-start relative cursor-pointer">
          <div
            class="text-white absolute uppercase top-1 lg:top-2 right-0 bg-stone-400 text-xs font-light flex flex-col items-end justify-center"
          >
            <div v-if="prod.sale && prod.oldPrice" class="my-1 -mr-2 h-5 w-12 lg:h-6 lg:w-12">
              <div
                class="relative text-black-0 text-xs10 lg:text-xs10 font-bold flex items-center justify-center h-full w-full"
              >
                <span class="absolute text-red">
                  -{{ Math.round(((prod.oldPrice - prod.price) / prod.oldPrice) * 100) }}%</span
                >
                <img src="../image/bg-sale.png" alt="2" />
              </div>
            </div>
            <div v-if="prod.newProduct" class="mb-1 -mr-2 h-5 w-12 lg:h-6 lg:w-12">
              <div
                class="relative text-black-0 text-xs10 lg:text-xs10 font-bold flex items-center justify-center h-full w-full"
              >
                <span class="absolute">New</span>
                <img src="../image/bg-sale.png" alt="2" />
              </div>
            </div>
            <div v-if="prod.hitProduct" class="-mr-2 mb-1 h-5 w-12 lg:h-6 lg:w-12">
              <div
                class="relative text-black-0 text-xs10 lg:text-xs10 font-bold flex items-center justify-center h-full w-full"
              >
                <span class="absolute">Хіт</span>
                <img src="../image/bg-sale.png" alt="2" />
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
          <p class="font-bold text-center text-xl sm:text-sm lg:text-base pt-2 sm:pt-2">
            {{ prod.title }}
          </p>

          <div class="flex md:pt-2 mb-1 justify-center">
            <span
              v-show="prod.oldPrice"
              class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:bg-main relative inline-block mr-2"
            >
              <p class="text-black-200 text-xl sm:text-lg md:text-xl lg:text-base">
                {{ prod.oldPrice }} UAH
              </p>
            </span>
            <p class="text-xl sm:text-lg md:text-xl lg:text-base text-black-50">
              {{ prod.price }} UAH
            </p>
          </div>
        </div>
        <div class="grid grid-col gap-2 md:gap-1 pt-1 sm:pt-2">
          <router-link
            :to="'/order/' + prod._id"
            class="bg-main hover:bg-brown-50 font-bold text-white p-2 lg:p-2 text-center uppercase border border-brown-50 text-xs sm:text-sm xl:text-lg"
            >Купити</router-link
          >
          <router-link
            :to="'/preview/' + prod._id"
            class="bg-white hover:bg-slate-800 text-main underline-offset-4 underline decoration-2 decoration-dashed font-bold p-1 lg:p-2 text-center uppercase text-xs sm:text-sm lg:text-xs10 xl:text-sm"
          >
            Детальніше</router-link
          >
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

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
  name: 'product-card',
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
  }
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
