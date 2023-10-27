<template>
  <div class="block-product">
    <div class="container">
      <my-input placeholder="Пошук" />
      <product-card />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import MyInput from '@/UI/MyInput.vue'
export default defineComponent({
  components: {
    ProductCard,
    MyInput
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.block-product {
  width: 100%;
  padding: 50px 0;
}
</style>
