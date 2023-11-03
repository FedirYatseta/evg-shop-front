<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue'
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
export default defineComponent({
  components: {
    MyFooter,
    BurgerButton,
    MobileMenu,
    DescTopMenu,
    MyDialog,
    DescribeProduct,
    MyModalView,
    BuyForm
  },

  setup() {
    const menuVisible = ref(false)
    const router = useRouter()

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    const store = useStore()

    onBeforeMount(async () => {
      await store.dispatch('product/fetchProduct') // 'product' - це ім'я вашого модулю Vuex
    })

    watch(
      () => router.currentRoute.value,
      () => {
        // Закрити меню при зміні маршруту
        menuVisible.value = false
      }
    )
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
  <header class="block h-11 md:h-52">
    <div class="container mx-auto block h-full">
      <div class="fixed flex md:hidden w-full justify-between bg-black items-center px-2 z-50">
        <h2 class="text-white">Men`s bugs</h2>
        <BurgerButton @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <MobileMenu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
      </div>
      <div class="hidden md:block">
        <DescTopMenu />
      </div>
    </div>
  </header>
  <div class="">
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
