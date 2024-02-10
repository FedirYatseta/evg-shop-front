<template>
  <section id="feedback" class="w-full shadow-5xl py-5 mb-4 lg:mb-16">
    <div class="container mx-auto">
      <h1
        class="text-center text-xs sm:text-xl uppercase lg:text-base xl:text-2xl font-bold text-brown-50 pt-5 mb-10"
      >
        Відгуки наших клієнтів
      </h1>
      <div class="py-6">
        <basic-carousel />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'feedback-section',
  setup() {
    return {}
  }
  // ваші props, методи, обчислення та дані тут
})
</script>

<style></style>
