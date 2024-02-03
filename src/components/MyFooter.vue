<template>
  <div class="w-full bg-main p-5" id="footer">
    <div class="container mx-auto">
      <div class="flex flex-col gap-1 justify-center">
        <div
          class="grid grid-col md:grid-cols-3 gap-2 md:gap-y-10 align-items-start justify-items-center mb-4 lg:pt-4 lg:mb-0"
        >
          <div>
            <img src="@/image/logo.png" alt="logo-site" class="p-1 max-h-[70px]" />
            <div class="sm:flex items-center gap-2 md:gap-4 justify-center md:justify-start hidden">
              <img src="@/image/visa.svg" alt="logo-site" class="w-8 h-8" />
              <img src="@/image/mastercard-4.svg" alt="logo-site" class="w-8 h-8" />
              <img src="@/image/site-ua-logo.svg" alt="logo-site" class="w-28 h-6" />
              <img src="@/image/Nova_Poshta_2014_logo.svg" alt="logo-site" class="w-20 h-6" />
            </div>
          </div>

          <ul class="flex flex-col gap-1 sm:gap-2 lg:gap-0 text-center md:text-start mb-4">
            <li v-for="item in mainUrlOfFooter" :key="item.path">
              <router-link
                @click="handleReviewsClick(item)"
                :to="item.path"
                class="text-white text-sm sm:text-xs10 lg:text-xs8 font-serif uppercase whitespace-nowrap"
                >{{ item.name }}</router-link
              >
            </li>
          </ul>
          <ul
            class="flex flex-col items-center md:items-start gap-1 md:gap-3 lg:gap-1 md:text-center text-xs10 md:text-xs lg:text-sm xl:text-xl uppercase whitespace-nowrap"
          >
            <li>
              <p class="text-white text-sm sm:text-xs8 pt-2">Контакти:</p>
            </li>
            <li>
              <a
                href="mailto:bags7@urk.net"
                aria-label="Email"
                class="text-white text-xs sm:text-xs8"
              >
                bags7.ukr@gmail.com
              </a>
            </li>
            <li>
              <a href="tel:+380632563677" aria-label="Phone number" class="text-white md:-mt-2">
                <p class="text-white text-xs sm:text-xs10 lg:text-xs8">+38063 25 63 677</p>
              </a>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-2 md:gap-4 justify-center md:justify-start sm:hidden">
          <img src="@/image/visa.svg" alt="logo-site" class="w-8 h-8 md:w-12 md:h-12" />
          <img src="@/image/mastercard-4.svg" alt="logo-site" class="w-8 h-8 md:w-12 md:h-12" />
          <img src="@/image/site-ua-logo.svg" alt="logo-site" class="w-28 h-6 md:w-32 md:h-12" />
          <img
            src="@/image/Nova_Poshta_2014_logo.svg"
            alt="logo-site"
            class="w-20 h-6 md:w-28 md:h-10"
          />
        </div>
        <div class="text-center my-2">
          <router-link to="/public" class="font-serif text-white text-xs lg:text-xs8">
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
