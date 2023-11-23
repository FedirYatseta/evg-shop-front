<template>
  <main class="w-full mt-[96px] py-10">
    <div class="container mx-auto px-2">
      <div class="grid grid-col md:grid-cols-2 gap-2 mb-3">
        <my-input
          placeholder="Пошук"
          :model-value="searchQuery"
          @update:model-value="setSearchQuery"
          class="px-3 h-[40px] border border-brown-50 rounded-md"
        />
        <my-select
          class="rounded-md appearance-none leading-tight border border-brown-50 focus:outline-none focus:border-brown-100"
          :options="sortOptions"
          :selected="selectedSort"
          @update:selected="setSelectedSort"
        />
      </div>

      <product-card :products="sortedAndSearchProducts" />
      <div class="px-5 flex items-center justify-center my-5">
        <button
          @click="fetchNextProduct"
          class="uppercase border rounded-[35px] border-[1.4px] px-7 py-2 text-sm"
        >
          Завантажити ще...
        </button>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, watch } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import MyInput from '@/UI/MyInput.vue'
import MySelect from '@/UI/MySelect.vue'
import { useStore } from 'vuex'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { useRoute } from 'vue-router'
export default defineComponent({
  components: {
    ProductCard,
    MyInput,
    MySelect
  },
  setup() {
    const store = useStore()
    const route = useRoute()
    const fetchNextProduct = () => {
      const { _id } = store.state.product.product[store.state.product.product.length - 1]

      store.dispatch('product/fetchProduct', { id: _id })
    }
    watch(
      () => route.params.id,
      async (newId, oldId) => {
        if (newId !== oldId) {
          // Викликаємо метод при зміні шляху
          await store.dispatch('product/fetchProduct', newId)
        }
      }
    )
    onMounted(async () => {
      await store.dispatch('product/fetchProduct', route.params.id) // 'product' - це ім'я вашого модулю Vuex
    })
    return { fetchNextProduct }
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
      sortOptions2: (state) => state.product.sortOptions2,
      selectedSort: (state) => state.product.selectedSort
    }),

    ...mapGetters({
      sortedAndSearchProducts: 'product/sortedAndSearchProducts'
    })
  }
})
</script>

<style scoped></style>
