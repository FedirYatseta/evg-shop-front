<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

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
        await store.dispatch('product/fetchProduct', { type: param1 })
      } else {
        await store.dispatch('product/fetchProduct')
      }

      await store.dispatch('product/fetchConf')
    })

    return { menuVisible, toggleMenu }
  }
})
</script>

<template>
  <header class="block" id="home">
    <div class="block h-full">
      <div
        class="fixed flex md:hidden w-full justify-between items-center bg-main top-0 items-end py-2 px-6 z-50"
      >
        <router-link to="/" class="w-full h-auto min-w-[100px] max-w-[100px]">
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
  <main>
    <router-view> </router-view>
  </main>
  <footer>
    <my-footer />
  </footer>
</template>

<style scoped></style>
