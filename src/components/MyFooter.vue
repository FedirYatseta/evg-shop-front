<template>
  <div class="w-full bg-brown-50 p-5">
    <div class="container mx-auto">
      <div class="grid grid-col gap-4 my-5 justify-center">
        <div class="w-full flex items-center justify-center md:hidden">
          <icon-logo />
        </div>

        <div class="flex w-full items-center justify-center mb-8">
          <icon-base iconColor="white" class="mx-2">
            <icon-viber />
          </icon-base>
          <icon-base iconColor="white" class="mx-2">
            <icon-telegram />
          </icon-base>
          <icon-base iconColor="white" class="mx-2">
            <icon-whats-app />
          </icon-base>
        </div>
        <ul class="grid grid-cols-4 md:grid-flow-col text-center justify-center">
          <li v-for="item in pathFooter" :key="item.path">
            <RouterLink
              @click="handleReviewsClick(item)"
              :to="item.path"
              class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
              >{{ item.name }}</RouterLink
            >
          </li>
        </ul>
        <div class="text-center my-2 text-xs md:text-xl">
          <span class="text-opacityWhite">
            <strong
              >© NOSKAR, 2023. Всі дизайни захищені стародавнім мольфарським закляттям на
              слабкістьпрутня.</strong
            >
          </span>
        </div>
        <picture class="block mx-auto">
          <img src="../image/payment-methods0.png" alt="pay-method" class="w-full h-full" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathFooter } from '@/config/path'
import IconBase from '@/assets/IconBase.vue'
import IconViber from '@/assets/IconViber.vue'
import IconTelegram from '@/assets/IconTelegram.vue'
import IconWhatsApp from '@/assets/IconWhatsApp.vue'
import IconLogo from '@/assets/IconLogo.vue'
import useScrollToElement from '@/hooks/useScrollToElement'
export default defineComponent({
  components: {
    IconBase,
    IconViber,
    IconTelegram,
    IconWhatsApp,
    IconLogo
  },
  setup() {
    const { handleReviewsClick } = useScrollToElement()
    return {
      pathFooter,
      handleReviewsClick
    }
  }
})
</script>

<style scoped></style>
