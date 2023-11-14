<script lang="ts">
import { defineComponent, ref, onBeforeMount } from 'vue'
import BurgerButton from '@/components/BurgerButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import MyFooter from '@/components/MyFooter.vue'
import DescTopMenu from '@/components/DescTopMenu.vue'
import { useRouter, useRoute } from 'vue-router'
import MyDialog from './UI/MyDialog.vue'
import { useStore, mapState } from 'vuex'
import DescribeProduct from './components/DescribeProduct.vue'
import MyModalView from './UI/MyModalView.vue'
import BuyForm from './components/BuyForm.vue'

import IconLogo from './assets/IconLogo.vue'
export default defineComponent({
  components: {
    MyFooter,
    BurgerButton,
    MobileMenu,
    DescTopMenu,
    MyDialog,
    DescribeProduct,
    MyModalView,
    BuyForm,

    IconLogo
  },

  setup() {
    const menuVisible = ref(false)
    const router = useRouter()
    const route = useRoute()
    console.log('router', router, route)

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    const store = useStore()

    router.afterEach((to, from) => {
      menuVisible.value = false
    })

    onBeforeMount(async () => {
      await store.dispatch('product/fetchProduct')
      await store.dispatch('product/fetchConf') // 'product' - це ім'я вашого модулю Vuex
    })

    return { menuVisible, toggleMenu }
  },
  computed: {
    ...mapState({
      showModal: (state) => state.product.showModal,
      showModalBuy: (state) => state.product.showModalBuy
    })
  }
})
</script>

<template>
  <header class="block">
    <div class="container mx-auto block h-full">
      <div
        class="fixed flex md:hidden w-full h-[94px] justify-between bg-main top-0 items-end pb-4 px-6 z-50"
      >
        <h2 class="text-white text-3xl">Bags7</h2>

        <icon-logo />

        <BurgerButton @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <MobileMenu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
      </div>
      <div class="hidden md:block">
        <DescTopMenu />
      </div>
    </div>
  </header>
  <div>
    <router-view> </router-view>
    <my-dialog v-model:show="showModal">
      <describe-product />
    </my-dialog>
    <MyModalView v-model:show="showModalBuy">
      <BuyForm></BuyForm>
    </MyModalView>
  </div>
  <footer>
    <MyFooter />
  </footer>
</template>

<style scoped></style>
