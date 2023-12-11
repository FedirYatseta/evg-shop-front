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
    <div class="flex w-full items-center justify-center mt-8 mb-2">
      <a href="https://t.me/moiseev_stom" class="mx-2" aria-label="Telegram number">
        <icon-telegram :height="50" :width="50" />
      </a>
      <a href="viber://chat?number=+380632563677" class="mx-2" aria-label="Viber number">
        <icon-viber :height="50" :width="50" />
      </a>
    </div>

    <div class="text-center w-full">
      <a class="text-main" href="tel:+380632563677">+380632563677</a>
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
