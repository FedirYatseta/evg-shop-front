<template>
  <div
    :class="{ block: menuVisible, hidden: !menuVisible }"
    class="fixed w-full h-full inset-x-0 bottom-0 bg-white top-[60px] px-2 z-30"
  >
    <nav class="flex items-center justify-center mt-5">
      <ul class="flex flex-col items-center">
        <li v-for="item in pathConfig" :key="item.path" class="my-1">
          <router-link
            :to="item.path"
            @click="handleReviewsClick(item)"
            class="text-main text-xl"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="flex w-full items-center justify-center mt-8 mb-4">
      <a href="https://t.me/moiseev_stom" class="mx-2 h-[25px]" aria-label="Telegram number">
        <icon-base>
          <icon-teleg />
        </icon-base>
      </a>
      <a href="viber://chat?number=+380680666996" class="mx-2" aria-label="Viber number">
        <icon-viber :color="'#000'" :width="'25px'" :height="'25px'" />
      </a>
    </div>

    <div class="text-center w-full">
      <a class="text-main" href="tel:+380680666996">+380 68 066 69 96</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathConfig } from '@/config/path'
import useScrollToElement from '@/hooks/useScrollToElement'
export default defineComponent({
  name: 'mobile-menu',

  props: {
    menuVisible: Boolean // Приймаємо проп "menuVisible"
  },
  setup() {
    const { handleReviewsClick } = useScrollToElement()

    return {
      pathConfig,
      handleReviewsClick
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

<style scoped></style>
