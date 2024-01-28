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
        class="fixed flex md:hidden w-full justify-between items-center bg-main top-0 items-end py-1 px-4 z-50"
      >
        <burger-btn @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <mobile-menu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
        <router-link to="/" class="w-full w-[80px] h-[36px]">
          <img src="@/image/logo.png" alt="logo-header" class="w-full h-full object-contain" />
        </router-link>
        <router-link to="/order/" class="w-[30px] h-[30]">
          <img src="@/image/bags.png" alt="bags-header" class="w-full h-full object-contain" />
        </router-link>
      </div>
      <div class="hidden md:block bg-main">
        <desc-menu />
      </div>
    </div>
  </header>
  <main>
    <router-view> </router-view>
    <!-- <img src="./product_768.png" alt="1" class="absolute inset-0 opacity-50 z-50" /> -->
    <back-to-top text="Back to top" visibleoffset="500">
      <button class="h-full w-full">
        <icon-to-top />
      </button>
    </back-to-top>
  </main>
  <footer>
    <my-footer />
  </footer>
</template>

<style scoped></style>
