<template>
  <div class="flex w-full h-full items-center justify-center container mx-auto px-14 py-3">
    <router-link to="/" class="w-full h-auto min-w-[140px] max-w-[200px]">
      <img src="@/image/bags7.shop.png" alt="logo-header" class="w-full h-full object-contain" />
    </router-link>
    <nav class="flex mx-auto w-full h-full justify-center">
      <ul class="flex justify-center py-3 relative h-full">
        <li v-for="item in pathFooter" :key="item.path">
          <div class="dropdown inline-block relative" v-if="item.subPath">
            <button
              class="font-serif px-2 md:text-xs lg:text-[14px] xl:text-xl whitespace-nowrap font-light uppercase text-white"
            >
              <span class="mr-1">{{ item.name }}</span>
            </button>
            <ul class="dropdown-menu absolute hidden bg-brown-50 pt-1 border border-white z-50">
              <li v-for="subItem in item.subPath" :key="subItem.name" class="p-2">
                <router-link
                  :to="subItem.path"
                  class="block whitespace-no-wrap font-serif px-2 md:text-xs lg:text-[14px] xl:text-xl whitespace-nowrap font-light uppercase text-white"
                  >{{ subItem.name }}</router-link
                >
              </li>
            </ul>
          </div>
          <router-link
            v-else
            :to="item.path"
            @click="
              () => {
                handleMouseLeave()
                handleReviewsClick(item)
              }
            "
            class="font-serif px-2 md:text-xs lg:text-[14px] xl:text-xl whitespace-nowrap font-light uppercase text-white"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="min-w-max xl:min-w-[200px] mx-2 lg:mx-10">
      <count-down :saleTime="saleTime" />
    </div>

    <div class="flex flex-col justify-center">
      <a class="text-sm lg:text-xl font-bold text-white" href="tel:+380632563677">+380632563677</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { pathFooter } from '@/config/path'
import useScrollToElement from '@/hooks/useScrollToElement'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'desc-menu',

  setup() {
    const store = useStore()
    const { handleReviewsClick } = useScrollToElement()
    const showModal = ref(false)
    const currentSubPath = ref<any>([])
    const handleMouseEnter = (item) => {
      if (item.subPath) {
        showModal.value = true
        currentSubPath.value = item.subPath
      }
    }
    const handleMouseLeave = () => {
      showModal.value = false
    }
    return {
      pathFooter,
      handleReviewsClick,
      handleMouseLeave,
      handleMouseEnter,
      showModal,
      currentSubPath,
      saleTime: computed(() => store.state.product?.confShop[0]?.saleTime)
    }
  }
})
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
