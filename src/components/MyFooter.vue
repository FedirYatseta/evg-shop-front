<template>
  <div class="w-full bg-brown-50 p-5">
    <div class="container mx-auto">
      <div class="grid grid-col gap-4 my-5 justify-center">
        <div class="flex w-full items-center justify-center mb-4 md:mb-8">
          <a href="viber://chat?number=+380680666996" aria-label="Viber number">
            <icon-base iconColor="white" class="mx-2">
              <icon-viber />
            </icon-base>
          </a>
          <a href="https://t.me/moiseev_stom" aria-label="Telegram number">
            <icon-base iconColor="white" class="mx-2">
              <icon-telegram />
            </icon-base>
          </a>
          <a href="https://wa.me/+380680666996" aria-label="WhatsApp number">
            <icon-base iconColor="white" class="mx-2">
              <icon-whatsapp />
            </icon-base>
          </a>
        </div>
        <ul class="grid grid-cols-5 text-center justify-center">
          <li v-for="item in pathFooter" :key="item.path">
            <RouterLink
              @click="handleReviewsClick(item)"
              :to="item.path"
              class="text-white text-[8px] md:text-lg font-serif uppercase whitespace-nowrap"
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
          <div>
            <RouterLink
              to="/public"
              class="font-serif text-white uppercase text-[8px] sm:text-xs font-light"
            >
              Публічна Оферта
            </RouterLink>
          </div>
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
import useScrollToElement from '@/hooks/useScrollToElement'
export default defineComponent({
  name: 'my-footer',

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
