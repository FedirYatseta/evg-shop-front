<template>
  <div class="flex w-full items-center justify-center container mx-auto px-4 py-8">
    <div class="text-xs font-light">Доставка без предоплати</div>
    <img src="../image/logo_new.jpg" alt="logo-desc" class="max-w-[250px] mx-20" />
    <a class="text-3xl font-bold" href="tel:+380632563677">+380632563677</a>
  </div>
  <nav class="block mx-auto w-full">
    <ul class="flex justify-center py-3">
      <li v-for="item in pathConfig" :key="item.path">
        <router-link
          @click="handleReviewsClick(item)"
          :to="item.path"
          class="px-2 md:text-[10px] lg:text-[14px] xl:text-xl font-light uppercase"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathConfig } from '@/config/path'
import useScrollToElement from '@/hooks/useScrollToElement'
export default defineComponent({
  setup() {
    const { handleReviewsClick } = useScrollToElement()

    return { pathConfig, handleReviewsClick }
  }
})
</script>

<style scoped></style>
