<template>
  <div class="w-full bg-main p-5">
    <div class="container mx-auto">
      <div class="flex flex-col gap-4 my-5 justify-center">
        <div
          class="grid grid-col md:grid-cols-3 gap-2 md:gap-y-10 align-items-start justify-items-center mb-4"
        >
          <img src="@/image/bags7.shop.png" alt="logo-site" />
          <ul class="flex flex-col gap-1 md:gap-4 lg:gap-4 text-center md:text-start mb-4">
            <li v-for="item in mainUrlOfFooter" :key="item.path">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-lg md:text-lg lg:text-xl font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
          <ul
            class="flex flex-col items-center md:items-start gap-1 md:gap-4 lg:gap-4 md:text-center text-[10px] md:text-xs lg:text-sm xl:text-xl uppercase whitespace-nowrap"
          >
            <li>
              <div class="flex items-center h-[100%]">
                <p class="text-white font-serif text-lg">Наші контакти:</p>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <a
                  href="mailto:bags7@urk.net"
                  aria-label="Email"
                  class="text-white font-serif text-lg"
                >
                  bags7.ukr@gmail.com
                </a>
              </div>
            </li>
            <li>
              <a
                href="tel:+380632563677"
                aria-label="Phone number"
                class="text-white font-serif flex items-center"
              >
                <p class="text-white font-serif text-lg">+380632563677</p>
              </a>
            </li>
            <!-- <li>
              <a
                href="viber://chat?number=+380632563677"
                aria-label="Viber number"
                class="flex items-center"
              >
                <p class="text-white font-serif">Viber</p>
              </a>
            </li> -->
            <!-- <li>
              <a
                href="https://t.me/moiseev_stom"
                aria-label="Telegram number"
                class="flex items-center"
              >
                <p class="text-white font-serif">Telegram</p>
              </a>
            </li> -->
          </ul>
        </div>
        <div class="text-center my-2">
          <!-- <p class="text-white uppercase lg:pb-2 text-xs lg:text-base">
            <strong>© Магазин сумок, 2023</strong>
          </p> -->

          <router-link
            to="/public"
            class="font-serif text-white text-xs lg:text-base underline underline-offset-8"
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
