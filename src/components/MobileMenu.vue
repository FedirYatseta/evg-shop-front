<template>
  <div
    :class="{ block: menuVisible, hidden: !menuVisible }"
    class="fixed left-0 top-0 bg-black-0 top-[53px] z-100 border-t border-white"
  >
    <nav class="flex items-center justify-center mt-5 px-8">
      <ul class="flex flex-col gap-4 justify-center relative h-full">
        <li v-for="item in pathConfig" :key="item.path">
          <div class="dropdown inline-block relative" v-if="item.subPath">
            <button
              class="flex items-center px-2 text-base md:text-xs lg:text-xs whitespace-nowrap font-light uppercase text-white"
            >
              <span class="mr-1">{{ item.name }}</span>
              <img src="../image/arrowDown.png" alt="arrow" class="w-6 h-6" />
            </button>
            <ul class="dropdown-menu absolute left-20 hidden bg-main pt-1 border border-white z-50">
              <li v-for="subItem in item.subPath" :key="subItem.name" class="p-2">
                <router-link
                  :to="subItem.path"
                  @click="() => handleReviewsClick(subItem)"
                  class="block whitespace-no-wrap px-2 text-xs whitespace-nowrap font-light uppercase text-white"
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
            class="px-2 text-base md:text-xs lg:text-xs whitespace-nowrap font-light uppercase text-white"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <div
      class="flex flex-col w-full items-start justify-center mt-8 pt-4 mb-2 border-t border-white px-6"
    >
      <!-- <a href="https://t.me/moiseev_stom" class="mx-2" aria-label="Telegram number">
        <icon-telegram :height="50" :width="50" />
      </a>
      <a href="viber://chat?number=+380632563677" class="mx-2" aria-label="Viber number">
        <icon-viber :height="50" :width="50" />
      </a> -->

      <span class="text-white uppercase text-xs">Контакти:</span>
      <div class="text-start w-full">
        <a class="text-main text-white text-xs10" href="tel:+380632563677">+380632563677</a>
      </div>
      <div class="text-start w-full">
        <a class="text-main text-white text-xs10" href="mailto:bags7@urk.net">
          bags7.ukr@gmail.com</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { pathConfig } from '@/config/path'
import useScrollToElement from '@/hooks/useScrollToElement'
export default defineComponent({
  name: 'mobile-menu',

  props: {
    menuVisible: Boolean // Приймаємо проп "menuVisible"
  },
  setup() {
    const showModal = ref(false)
    const { handleReviewsClick } = useScrollToElement()
    const handleMouseLeave = () => {
      showModal.value = false
    }
    return {
      pathConfig,
      handleReviewsClick,
      handleMouseLeave,
      showModal
    }
  },
  emits: ['toggle-menu'],
  methods: {
    closeMenu() {
      this.$emit('toggle-menu')
    }
  }
})
</script>

<style scoped>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
