<template>
  <div
    class="flex w-full h-full items-center justify-center container mx-auto sm:py-2 lg:px-6 lg:py-4 gap-4"
  >
    <router-link to="/" class="w-[150px] h-[25px] lg:h-[30px] xl:h-[50px]">
      <img src="@/image/logo.png" alt="logo-header" class="w-full h-full object-contain" />
    </router-link>
    <nav class="flex mx-auto w-full h-full justify-end lg:mr-5">
      <ul class="flex justify-center relative h-full">
        <li v-for="item in pathFooter" :key="item.path">
          <div class="dropdown inline-block relative" v-if="item.subPath">
            <button
              class="px-2 text-xs10 md:text-xs lg:text-xs whitespace-nowrap font-light uppercase text-white"
            >
              <span class="mr-1">{{ item.name }}</span>
            </button>
            <ul class="dropdown-menu absolute hidden bg-main pt-1 border border-white z-50">
              <li v-for="subItem in item.subPath" :key="subItem.name" class="p-2">
                <router-link
                  :to="subItem.path"
                  @click="() => handleReviewsClick(subItem)"
                  class="block whitespace-no-wrap px-2 md:text-xs lg:text-xs whitespace-nowrap font-light uppercase text-white"
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
            class="px-2 text-xs10 md:text-xs lg:text-xs whitespace-nowrap font-light uppercase text-white"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <router-link to="/order/" class="w-[35px] h-[35px] lg:mr-6 relative">
      <div
        class="absolute flex items-center justify-center rounded-full h-4 w-4 lg:h-4 lg:w-4 xl:h-5 xl:w-5 -left-5 -top-1 bg-white"
      >
        <span class="text-xs10 lg:text-xs10 xl:text-xs font-bold">{{ countProduct }}</span>
      </div>

      <img src="@/image/bags.png" alt="bags-header" class="w-full h-full object-contain" />
    </router-link>
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
      saleTime: computed(() => store.state.product?.confShop[0]?.saleTime),
      countProduct: computed(() => store.state.product?.buyProduct.length)
    }
  }
})
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
