<template>
  <div class="w-full">
    <div class="container mx-auto px-2">
      <div class="grid grid-col md:grid-cols-2 gap-2 my-5">
        <my-input
          placeholder="Пошук"
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
        />
        <my-select
          :options="sortOptions"
          :selected="selectedSort"
          @update:selected="setSelectedSort"
        />
      </div>
      <product-card :products="sortedAndSearchProducts" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import MyInput from '@/UI/MyInput.vue'
import MySelect from '@/UI/MySelect.vue'
import { useStore } from 'vuex'
import { mapState, mapGetters, mapMutations } from 'vuex'
export default defineComponent({
  components: {
    ProductCard,
    MyInput,
    MySelect
  },
  setup() {
    const store = useStore()

    onBeforeMount(async () => {
      await store.dispatch('product/fetchProduct') // 'product' - це ім'я вашого модулю Vuex
    })
    return {}
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'product/setSearchQuery',
      setSelectedSort: 'product/setSelectedSort'
    })
  },
  computed: {
    ...mapState({
      product: (state) => state.product.product,
      searchQuery: (state) => state.product.searchQuery,
      sortOptions: (state) => state.product.sortOptions,
      selectedSort: (state) => state.product.selectedSort
    }),

    ...mapGetters({
      sortedProducts: 'product/sortedProducts',
      sortedAndSearchProducts: 'product/sortedAndSearchProducts'
    })
  }
})
</script>

<style scoped></style>
