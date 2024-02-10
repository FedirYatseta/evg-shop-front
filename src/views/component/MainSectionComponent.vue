<template>
  <section class="w-full">
    <div class="container mx-auto py-6 lg:py-8">
      <div class="flex flex-col-reverse sm:flex-row gap-1 justify-items-center">
        <div
          class="flex flex-col justify-center sm:justify-start xl:justify-center gap-4 px-3 sm:px-0 sm:gap-5 sm:pt-5 lg:gap-5 xl:gap-6 sm:w-1/2"
        >
          <p
            class="text-base uppercase font-bold md:text-2xl lg:text-2xl xl:text-3xl text-center md:text-start"
          >
            Шукаєш стильну та якісну сумку для себе або на подарунок ?
          </p>
          <p
            class="text-center uppercase md:text-start text-xs font-bold sm:text-sm sm:mb-6 lg:mb-2 md:font-bold text-main xl:text-xl"
          >
            Ми знаємо як тобі допомогти! Чоловічі сумки та аксесуари зі знижкою до -43% напряму від
            виробника
          </p>
          <div class="w-full max-w-20 mx-auto flex justify-center sm:hidden">
            <router-link
              :to="'/'"
              @click="() => handleReviewsClick({ id: 'catalog' })"
              class="bg-main hover:bg-brown-50 text-white w-[150px] font-serif py-2 px-5 lg:p-2 text-center uppercase border border-brown-50 text-xs md:text-xs font-bold xl:text-xl"
              >Каталог</router-link
            >
          </div>
        </div>
        <div class="w-full h-full max-h-[380px] xl:max-h-[580px] flex mb-4 sm:w-1/2">
          <img src="../../image/image.jpg" alt="main image" class="w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import useScrollToElement from '@/hooks/useScrollToElement'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'main-section-component',
  setup() {
    const { handleReviewsClick } = useScrollToElement()
    return {
      handleReviewsClick
    }
  }
})
</script>

<style></style>
