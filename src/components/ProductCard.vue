<template>
  <div
    class="grid grid-col md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-3 md:gap-2 lg:gap-5 xl:gap-x-6 xl:gap-y-12"
  >
    <TransitionGroup name="product-list">
      <div
        class="p-3 md:p-1 flex flex-col justify-between"
        v-for="prod in products"
        :key="prod.title"
      >
        <div class="block text-start relative cursor-pointer">
          <div
            class="text-white absolute uppercase top-1 lg:top-6 right-0 bg-stone-400 text-xs font-light flex flex-col items-end justify-center"
          >
            <div v-if="prod.sale" class="relative my-1 px-2 h-5 w-12 lg:h-6 lg:w-20">
              <div
                class="absolute inset-0 text-sm lg:text-xl font-bold flex items-center justify-center h-full w-full bg-black-0 border-t-4 border-l-4"
              >
                sale
              </div>
            </div>
            <div v-if="prod.newProduct" class="relative my-1 h-5 w-12 lg:h-6 lg:w-20">
              <div
                class="absolute inset-0 text-sm lg:text-xl font-bold flex items-center justify-center bg-black-50 h-full w-full border-t-4 border-l-4"
              >
                New
              </div>
            </div>
            <div v-if="prod.hitProduct" class="relative my-1 h-5 w-12 lg:h-6 lg:w-20">
              <div
                class="absolute inset-0 text-sm lg:text-xl text-black-0 font-bold flex items-center justify-center bg-white border-t-4 border-l-4 h-full w-full"
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
          <p class="font-bold text-center text-xl md:text-lg lg:text-2xl pt-2 md:pt-5">
            {{ prod.title }}
          </p>

          <div class="flex md:pt-2 mb-1 justify-center">
            <span
              v-show="prod.oldPrice"
              class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block mr-2"
            >
              <p class="text-black-200 text-xl md:text-2xl xl:text-3xl">{{ prod.oldPrice }} UAH</p>
            </span>
            <p class="text-xl sm:text-lg md:text-2xl xl:text-3xl text-black-50">
              {{ prod.price }} UAH
            </p>
          </div>
        </div>
        <!-- <div class="grid grid-col md:grid-cols-2 gap-2 md:gap-4 pt-1 md:pt-5">
          <router-link
            :to="'/preview/' + prod._id"
            class="bg-main hover:bg-brown-50 text-white font-serif p-1 lg:p-2 text-center uppercase border border-brown-50 text-xs md:text-lg xl:text-xl"
            >Детальніше</router-link
          >
          <router-link
            :to="'/order/' + prod._id"
            class="bg-white hover:bg-slate-800 text-main border-main border font-serif p-1 lg:p-2 text-center uppercase text-xs md:text-lg xl:text-xl"
            >Замовити</router-link
          >
        </div> -->
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
