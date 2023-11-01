<template>
  <div class="flex w-full items-center justify-between">
    <div>Доставка без предоплати</div>
    <img src="../image/logo_new.jpg" alt="logo-desc" class="max-w-[250px]" />
    <a href="tel:+380632563677">+380632563677</a>
  </div>
  <nav class="block mx-auto w-full">
    <ul class="flex justify-center py-3">
      <li v-for="item in pathConfig" :key="item.path">
        <router-link
          :to="item.path"
          class="px-2 md:text-xs lg:text-lg xl:text-2xl font-light uppercase"
          >{{ item.name }}</router-link
        >
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathConfig } from '@/config/path'
export default defineComponent({
  setup() {
    return { pathConfig }
  }
})
</script>

<style scoped></style>
