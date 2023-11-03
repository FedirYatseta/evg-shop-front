<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-1">
    <div class="p-1 flex flex-col justify-between" v-for="prod in products" :key="prod.title">
      <div class="block text-center relative">
        <div
          class="h-9 w-9 text-white absolute uppercase rounded-full top-1 right-1 bg-stone-400 text-xs font-light flex items-center justify-center"
        >
          {{ prod.newProduct ? 'New' : prod.hitProduct ? 'Top' : 'sale' }}
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
        <p class="font-bold text-md md:text-lg">
          {{ prod.title }}
        </p>
        <p class="text-xs md:text-lg">
          Розмір <span> {{ prod.size + ' см' }}</span>
        </p>
        <p class="line-through text-red-500 text-xs md:text-lg">{{ prod.oldPrice }} грн</p>
        <p class="price text-xs md:text-lg">{{ prod.price }} грн</p>
      </div>
      <div class="grid grid-col md:grid-cols-2 gap-4">
        <MyButton
          @click="showDescribe(prod._id)"
          class="bg-slate-100 hover:bg-slate-200 text-slate-950"
          >Детальніше</MyButton
        >
        <MyButton class="bg-slate-950 hover:bg-slate-800 text-white" @click="buyProduct(prod._id)"
          >Купити</MyButton
        >
      </div>
    </div>
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
export default defineComponent({
  components: {
    MyButton
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
    console.log('showSecondImage', showSecondImage)

    return {
      showDescribe: (id: string) => store.dispatch('product/getProductId', id),
      buyProduct: (id: string) => store.commit('product/setProductToOrder', id),
      showSecondImage
    }
  }
})
</script>

<style scoped></style>
