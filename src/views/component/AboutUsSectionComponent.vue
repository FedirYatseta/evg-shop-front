<template>
  <section id="aboutus" class="w-full py-2 lg:py-5 mb-6 shadow-xl sm:pb-12 lg:pb-24">
    <div class="container mx-auto">
      <div
        class="font-serif text-lg md:text-4xl xl:text-2xl font-bold text-center sm:hidden mb-6 lg:mb-12 uppercase"
      >
        Про нас
      </div>
      <div class="flex flex-col items-start sm:flex-row sm:gap-5">
        <div class="px-5 lg:w-1/2 h-full flex">
          <img
            src="../../image/IMG_20240118_195008_325.jpg"
            alt="main image"
            class="w-full h-auto object-contain"
          />
        </div>
        <div
          class="flex flex-col justify-start items-start px-5 gap-2 sm:gap-5 lg:gap-4 lg:w-1/2 pt-10"
        >
          <div
            class="text-2xl hidden sm:block sm:text-lg lg:text-xl xl:text-2xl font-bold text-start lg:mb-2 uppercase"
          >
            Про нас
          </div>
          <p
            class="text-sm font-bold sm:text-base lg:text-xl xl:text-2xl text-center md:text-start"
          >
            "Ми знаємо що таке стиль"
          </p>
          <p
            class="text-sm font-bold sm:text-base lg:text-lg xl:text-xl text-justify md:text-start mb-7"
          >
            Ласкаво просимо до нашого магазину. Ми впевнені що Ви знайдете сумку для себе або на
            подарунок від українського виробника. Всі наші сумки викготовлені з високоякісної шкіри
            та фурнітури, через що наші сумки будуть слугувати вам роками без втрат свого стартового
            вигляду.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'about-us-section'
})
</script>

<style></style>
