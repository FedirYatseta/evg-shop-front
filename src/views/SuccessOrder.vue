<template>
  <div class="w-full md:mt-2 py-10">
    <div class="container mx-auto pt-12 pb-24 lg:pb-32 lg:pt-0 relative">
      <div class="absolute top-5 w-full h-[51px] flex items-center justify-end px-3">
        <icon-close @click="router.push('/')" :color="'#000'" class="cursor-pointer" />
      </div>
      <div
        class="p-4 md:p-12 flex w-full flex-col items-center justify-center z-50 bg-white h-full"
        v-if="!successOrder"
      >
        <div class="m-auto flex flex-col items-center justify-center">
          <div>
            <icon-bags />
          </div>
          <p class="p-2 md:p-12 text-3xl text-center uppercase">Дякуємо, що обрали саме нас!</p>
          <p class="text-xl text-black-300 text-center max-w-[652px]">
            Ваше замовлення було прийнято. В скорому часі наш менеджер зв’яжеться з вами для
            уточнень.
          </p>
        </div>
        <div class="border-t w-full border-brown-50 pb-5"></div>
        <div
          class="w-full max-w-[520px] h-[33px] bg-brown-50 flex items-center justify-center px-3"
          @click="closeModal"
        >
          <router-link to="/" class="text-sm text-white uppercase">На головгу</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'

import { useRoute, useRouter } from 'vue-router'

export interface IOrder {
  name: String
  phone: String
  idShop: String
  order: IProduct[]
}

interface IProduct {
  count: Number
  id: String
  image: String
  oldPrice: Number
  price: Number
  size: String
  title: String
}

export default defineComponent({
  name: 'order-form',

  setup() {
    const store = useStore()
    const successOrder = ref(false)
    const router = useRouter()

    function removeConversionTrackingScript() {
      // Find the <head> element in the document
      let header = document.querySelector('head')

      // Find the added script by its ID
      let scriptToRemove = document.getElementById('conversionScript')

      // Remove the script if it exists
      if (scriptToRemove && header) {
        header.removeChild(scriptToRemove)
      }
    }
    setTimeout(() => {
      removeConversionTrackingScript()
    }, 5000)

    return {
      items: computed(() => store.state.product.buyProduct),
      minusCount: (id) => store.commit('product/setDecrease', id),
      plusCount: (id) => store.commit('product/setIncrease', id),
      deleteProduct: (id) => store.commit('product/deleteProduct', id),
      router,
      closeModal: () => store.commit('product/setShowBuyModal', false),
      successOrder
    }
  }
})
</script>
<style scoped></style>
