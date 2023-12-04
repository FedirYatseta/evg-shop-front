<template>
  <div class="w-full bg-brown-50 p-5">
    <div class="container mx-auto">
      <div class="flex flex-col gap-4 my-5 justify-center">
        <div class="grid grid-cols-3 gap-2 align-items-start justify-items-center mb-4">
          <ul class="flex flex-col text-start">
            <li v-for="item in mainUrlOfFooter" :key="item.path" class="lg:pb-4">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
          <ul class="flex flex-col text-start">
            <li v-for="item in categoryProduct" :key="item.path" class="lg:pb-4">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
          <ul class="flex flex-col text-start">
            <li class="h-6 flex items-center mb-2">
              <p class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap">
                Наші контакти:
              </p>
            </li>
            <li class="flex mb-2 lg:py-4">
              <a href="viber://chat?number=+380680666996" aria-label="Viber number" class="pr-4">
                <icon-viber />
              </a>
              <a href="https://t.me/moiseev_stom" aria-label="Telegram number">
                <icon-telegram />
              </a>
            </li>
            <li class="lg:pb-4">
              <a
                href="mailto:bags7@urk.net"
                aria-label="Email"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
              >
                bags7.ukr@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+380632563677"
                aria-label="Phone number"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
                >+380632563677
              </a>
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
