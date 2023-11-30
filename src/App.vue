<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore, mapState } from 'vuex'

export default defineComponent({
  name: 'my-app',
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
    onMounted(async () => {
      if (param1) {
        await store.dispatch('product/fetchProduct', { limit: 12, type: param1 })
      } else {
        await store.dispatch('product/fetchProduct', { limit: 12 })
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
  <header class="block" id="home">
    <div class="block h-full">
      <div
        class="fixed flex md:hidden w-full justify-between bg-main top-0 items-end py-4 px-6 z-50"
      >
        <router-link to="/" class="w-full h-auto min-w-[100px] max-w-[120px]">
          <img
            src="@/image/bags7.shop.png"
            alt="logo-header"
            class="w-full h-full object-contain"
          />
        </router-link>
        <burger-btn @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <mobile-menu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
      </div>
      <div class="hidden md:block bg-main">
        <desc-menu />
      </div>
    </div>
  </header>
  <div>
    <router-view> </router-view>
    <my-dialog v-model:show="showModal">
      <describe-product />
    </my-dialog>
    <my-modal v-model:show="showModalBuy">
      <order-form></order-form>
    </my-modal>
  </div>
  <footer>
    <my-footer />
  </footer>
</template>

<style scoped></style>
