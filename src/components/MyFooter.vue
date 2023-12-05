<template>
  <div class="w-full bg-brown-50 p-5">
    <div class="container mx-auto">
      <div class="flex flex-col gap-4 my-5 justify-center">
        <div
          class="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-y-10 align-items-start justify-items-center mb-4"
        >
          <ul class="flex flex-col md:flex-row gap-1 md:gap-4 text-start">
            <li v-for="item in mainUrlOfFooter" :key="item.path">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-[10px] md:text-lg lg:text-2xl font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>

          <ul
            class="flex flex-col md:flex-row gap-1 md:gap-4 md:text-center text-start text-[10px] md:text-xs lg:text-sm xl:text-xl uppercase whitespace-nowrap"
          >
            <li class="h-6 flex items-center">
              <p class="text-white font-serif">Наші контакти:</p>
            </li>
            <li class="h-6 flex items-center">
              <div><icon-viber /></div>

              <a href="mailto:bags7@urk.net" aria-label="Email" class="text-white font-serif px-2">
                bags7.ukr@gmail.com
              </a>
            </li>
            <li class="h-6 flex items-center">
              <icon-telegram />
              <a
                href="tel:+380632563677"
                aria-label="Phone number"
                class="text-white font-serif px-2"
                >+380632563677
              </a>
            </li>
            <li class="h-6 flex items-center">
              <a href="viber://chat?number=+380680666996" aria-label="Viber number">
                <icon-viber />
              </a>
              <p class="text-white font-serif px-2">Viber</p>
            </li>
            <li class="h-6 flex items-center">
              <a href="https://t.me/moiseev_stom" aria-label="Telegram number">
                <icon-telegram />
              </a>
              <p class="text-white font-serif px-2">Telegram</p>
            </li>
          </ul>
        </div>
        <div class="text-center my-2">
          <p class="text-white uppercase lg:pb-2 text-[8px] lg:text-base">
            <strong>© Магазин сумок, 2023</strong>
          </p>
          <p class="font-serif text-white text-light text-[8px] lg:text-base lg:pb-2">
            ФОП Бондар П.О. - Код ЕДРПОУ 3817928689 м.Вінниця
          </p>

          <router-link
            to="/public"
            class="font-serif text-white text-[8px] lg:text-base underline underline-offset-8"
          >
            Політика конфіденційності
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { categoryProduct, mainUrlOfFooter } from '@/config/path'
import useScrollToElement from '@/hooks/useScrollToElement'
export default defineComponent({
  name: 'my-footer',

  setup() {
    const { handleReviewsClick } = useScrollToElement()
    return {
      categoryProduct,
      handleReviewsClick,
      mainUrlOfFooter
    }
  }
})
</script>

<style scoped></style>
