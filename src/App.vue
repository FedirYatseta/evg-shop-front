<script lang="ts">
import { defineComponent, ref, onMounted, watch } from 'vue'
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

    const urlParams = new URLSearchParams(window.location.search)
    const param1 = urlParams.get('name')

    const store = useStore()
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }

    router.afterEach((to, from) => {
      menuVisible.value = false
    })
    // watch(
    //   route,
    //   async (to, from) => {
    //     if (to.query.name !== from?.query.name || route.query.name) {
    //       await store.dispatch('product/fetchProduct', to.query.name)
    //     }
    //   },
    //   { immediate: true }
    // )
    onMounted(async () => {
      if (param1) {
        await store.dispatch('product/fetchProduct', { type: param1 })
      } else {
        await store.dispatch('product/fetchProduct')
      }

      await store.dispatch('product/fetchConf')
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
    <div class="block h-full">
      <div
        class="fixed flex md:hidden w-full justify-between bg-main top-0 items-end py-4 px-6 z-50"
      >
        <img src="@/image/logo_header.png" alt="logo-header" class="w-[123px] h-[42px]" />
        <BurgerButton @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <MobileMenu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
      </div>
      <div class="hidden md:block bg-main">
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
