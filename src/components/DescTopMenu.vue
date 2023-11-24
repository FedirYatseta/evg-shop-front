<template>
  <div class="flex w-full items-center justify-center container mx-auto px-14 py-3">
    <img src="@/image/logo_header.png" alt="logo-header" class="w-[123px] h-[42px]" />
    <nav class="block mx-auto w-full">
      <ul class="flex justify-center py-3">
        <li v-for="item in pathFooter" :key="item.path">
          <router-link
            @click="handleReviewsClick(item)"
            :to="item.path"
            class="font-serif px-2 md:text-xs lg:text-[14px] xl:text-xl whitespace-nowrap font-light uppercase text-white"
            >{{ item.name }}</router-link
          >
        </li>
      </ul>
    </nav>
    <div class="min-w-max xl:min-w-[200px] mx-2 lg:mx-10">
      <count-down />
    </div>

    <div class="flex flex-col">
      <a class="text-sm lg:text-xl font-bold text-white mb-3" href="tel:+380632563677"
        >+380632563677</a
      >
      <a class="text-sm lg:text-xl font-bold text-white" href="tel:+380632563677">+380632563677</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathFooter } from '@/config/path'
import useScrollToElement from '@/hooks/useScrollToElement'
import CountDown from '@/components/CountDown.vue'
export default defineComponent({
  components: {
    CountDown
  },
  setup() {
    const { handleReviewsClick } = useScrollToElement()

    return { pathFooter, handleReviewsClick }
  }
})
</script>

<style scoped></style>
