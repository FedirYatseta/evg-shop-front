<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
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
    return {
      menuVisible,
      toggleMenu,
      countProduct: computed(() => store.state.product?.buyProduct.length)
    }
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
        <router-link to="/" class="h-[36px]">
          <img src="@/image/logo.png" alt="logo-header" class="w-full h-full object-contain" />
        </router-link>
        <router-link to="/order/" class="w-[30px] h-[30px] min-w-[30px] relative mx-2">
          <div
            class="absolute flex items-center justify-center rounded-full h-4 w-4 -left-5 -top-1 bg-white"
          >
            <span class="text-xs10 font-bold">{{ countProduct }}</span>
          </div>

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
    <back-to-top text="Back to top" visibleoffset="500">
      <button class="h-full w-full">
        <icon-to-top />
      </button>
    </back-to-top>
    <NotificationGroup group="foo">
      <div class="fixed inset-0 flex items-center justify-center p-6 px-4 py-6 pointer-events-none">
        <div class="w-full max-w-sm">
          <Notification
            v-slot="{ notifications }"
            enter="transform ease-out duration-300 transition"
            enter-from="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-4"
            enter-to="translate-y-0 opacity-100 sm:translate-x-0"
            leave="transition ease-in duration-500"
            leave-from="opacity-100"
            leave-to="opacity-0"
            move="transition duration-500"
            move-delay="delay-300"
          >
            <div
              class="flex w-full max-w-sm mx-auto mt-4 overflow-hidden bg-white rounded-lg shadow-md"
              v-for="notification in notifications"
              :key="notification.id"
            >
              <div class="flex items-center justify-center w-12 bg-green-500">
                <svg
                  class="w-6 h-6 text-white fill-current"
                  viewBox="0 0 40 40"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z"
                  />
                </svg>
              </div>

              <div class="px-4 py-2 -mx-3">
                <div class="mx-3">
                  <span class="font-semibold text-green-500">{{ notification.title }}</span>
                  <p class="text-sm text-gray-600">{{ notification.text }}</p>
                </div>
              </div>
            </div>
          </Notification>
        </div>
      </div>
    </NotificationGroup>
  </main>
  <footer>
    <my-footer />
  </footer>
</template>

<style scoped></style>
