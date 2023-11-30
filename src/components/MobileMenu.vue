<template>
  <div
    :class="{ block: menuVisible, hidden: !menuVisible }"
    class="fixed w-full h-full inset-x-0 bottom-0 bg-white top-[80px] px-2 z-30"
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
    <div class="flex w-full items-center justify-center mt-8">
      <a href="https://t.me/moiseev_stom" class="mx-2" aria-label="FaceBook number">
        <icon-base>
          <icon-fb />
        </icon-base>
      </a>
      <a href="https://t.me/moiseev_stom" class="mx-2" aria-label="Inst Link ">
        <icon-base>
          <icon-inst />
        </icon-base>
      </a>
      <a href="https://t.me/moiseev_stom" class="mx-2" aria-label="Telegram number">
        <icon-base>
          <icon-teleg />
        </icon-base>
      </a>
    </div>
    <p class="text-main text-center mt-auto">Доставка без передоплати</p>
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
