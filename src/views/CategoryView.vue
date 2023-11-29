<template>
  <main class="w-full mx-auto px-3">
    <div class="container mx-auto pt-16 lg:pt-2">
      <p class="my-4 text-center text-3xl font-bold">Категорії</p>
      <div class="grid grid-col lg:grid-cols-3 gap-4 md:gap-6 my-4">
        <div v-for="item in items" :key="item.path" class="shadow-lg">
          <router-link :to="item.path">
            <img :src="item.image" :alt="item.path" />
            <p class="p-4 text-md md:text-lg lg:text-3xl">{{ item.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { categoryProduct } from '@/config/path'
export default defineComponent({
  setup() {
    const items = ref(categoryProduct)
    return { items }
  }
})
</script>

<style scoped></style>
