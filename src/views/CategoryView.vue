<template>
  <div class="container mx-auto px-3">
    <p class="my-4 text-center text-3xl font-bold">Категорії</p>
    <div class="grid grid-col md:grid-cols-3 gap-4 my-4">
      <div v-for="item in items" :key="item.path" class="shadow-lg">
        <router-link :to="item.path">
          <img :src="item.image" :alt="item.path" />
          <p class="p-4 text-xs md:text-lg">{{ item.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
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
