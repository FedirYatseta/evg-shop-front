<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-1">
    <TransitionGroup name="product-list">
      <div class="p-1 flex flex-col justify-between" v-for="prod in products" :key="prod.title">
        <div class="block text-center relative">
          <div
            class="text-white absolute uppercase rounded-full top-1 right-1 bg-stone-400 text-xs font-light flex items-center justify-center"
          >
            <icon-circle />
            <div class="absolute text-sm font-bold">
              {{ prod.newProduct ? 'New' : prod.hitProduct ? 'Хіт' : 'sale' }}
            </div>
          </div>
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
              class="mx-auto max-h-[500px]"
            />
          </div>
          <p class="font-bold text-sm md:text-lg">
            {{ prod.title }}
          </p>
          <p class="text-xs md:text-lg text-black-150">
            Розмір <span> {{ prod.size + ' см' }}</span>
          </p>
          <div class="flex">
            <span
              class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block mr-1"
            >
              <p class="text-black-200 text-lg md:text-lg">{{ prod.oldPrice }} UAH</p>
            </span>

            <p class="text-lg md:text-lg text-red">{{ prod.price }} UAH</p>
          </div>
        </div>
        <div class="grid grid-col md:grid-cols-2 gap-4">
          <MyButton
            @click="showDescribe(prod._id)"
            class="bg-brown-50 hover:bg-brown-50 text-white font-serif"
            >Детальніше</MyButton
          >
          <MyButton
            class="bg-white hover:bg-slate-800 text-brown-50 border-brown-50 border-[1.4px] font-serif"
            @click="buyProduct(prod._id)"
            >Замовити</MyButton
          >
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import MyButton from '@/UI/MyButton.vue'

interface Product {
  _id: string
  id: string
  title: string
  size: number
  oldPrice: number
  price: number
  newProduct: boolean
  hitProduct: boolean
  imageSrc: string[]
}
import { useStore } from 'vuex'
import IconCircle from '@/assets/IconCircle.vue'
export default defineComponent({
  components: {
    MyButton,
    IconCircle
  },
  props: {
    products: {
      type: Array as () => Product[],
      required: true
    }
  },
  setup() {
    const store = useStore()
    const showSecondImage = ref<Record<string, boolean>>({})

    return {
      showDescribe: (id: string) => store.dispatch('product/getProductId', id),
      buyProduct: (id: string) => store.commit('product/setProductToOrder', id),
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
