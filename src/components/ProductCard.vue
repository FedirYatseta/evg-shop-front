<template>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-1">
    <div class="p-1 flex flex-col justify-between" v-for="prod in products" :key="prod.title">
      <div class="block text-center">
        <div class="w-full h-auto">
          <img :src="prod.imageSrc[0]" alt="iconProduct" class="mx-auto" />
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
          class="bg-slate-50 hover:bg-slate-100 text-slate-950"
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
import { defineComponent } from 'vue'
import MyButton from '@/UI/MyButton.vue'

interface Product {
  _id: string
  id: string
  title: string
  size: number
  oldPrice: number
  price: number
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

    return {
      showDescribe: (id: string) => store.dispatch('product/getProductId', id),
      buyProduct: (id: string) => store.commit('product/setProductToOrder', id)
    }
  }
})
</script>

<style scoped></style>
