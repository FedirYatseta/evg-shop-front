<template>
  <div class="w-full bg-brown-50 p-5">
    <div class="container mx-auto">
      <div class="flex flex-col gap-4 my-5 justify-center">
        <div class="grid grid-cols-3 gap-2 align-items-start justify-items-center">
          <ul class="flex flex-col text-start">
            <li v-for="item in mainUrlOfFooter" :key="item.path">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
          <ul class="flex flex-col text-start">
            <li v-for="item in categoryProduct" :key="item.path">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
          <ul class="flex flex-col text-start">
            <li class="h-6 flex items-center">
              <p class="text-white text-[8px] md:text-lg font-serif uppercase whitespace-nowrap">
                Наші контакти
              </p>
            </li>
            <li class="flex">
              <a href="viber://chat?number=+380680666996" aria-label="Viber number" class="pr-1">
                <icon-viber />
              </a>
              <a href="https://t.me/moiseev_stom" aria-label="Telegram number">
                <icon-telegram />
              </a>
            </li>
            <li>
              <a
                href="mailto:bags7@urk.net"
                aria-label="Email"
                class="text-white text-[10px] md:text-lg font-serif uppercase whitespace-nowrap"
              >
                bags7@urk.net
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
        <div class="text-center my-2 text-xs md:text-xl">
          <span class="text-white text-base uppercase">
            <strong>© Магазин сумок, 2023</strong>
          </span>
          <p class="font-serif text-white text-light">
            ФОП Бондар П.О. - Код ЕДРПОУ 3817928689 м.Вінниця
          </p>
          <div>
            <router-link
              to="/public"
              class="font-serif text-white text-[8px] sm:text-xs underline underline-offset-8"
            >
              Політика конфіденційності
            </router-link>
          </div>
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
