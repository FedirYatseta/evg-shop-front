<template>
  <section class="w-full">
    <div
      class="inline-block w-full text-base sm:text-lg font-bold uppercase xl:text-2xl text-center mb-5 md:mb-10 lg:mb-16 text-white bg-main p-3 sm:p-1 lg:p-3"
    >
      <p class="mx-auto">Вибери свою сумку</p>
    </div>
    <div class="container mx-auto px-2 sm:px-20" id="catalog">
      <div class="grid grid-co gap-2 mb-3">
        <div class="w-full text-center pb-3">
          <router-link
            class="m-1 px-4 xl:px-5 py-2 inline-flex text-sm md:text-base xl:text-xl font-semibold md:font-bold rounded-[10px]"
            :class="{ 'shadow-3xl': path.path !== routePath }"
            v-for="path in dataItems.pathConfigNew"
            :key="path.name"
            :to="path.path"
            @click="() => handleSetPath(path.name)"
            >{{ path.name }}
          </router-link>
        </div>
        <div class="px-5 flex flex-col md:flex-row justify-end items-center gap-2">
          <div class="relative w-full max-w-xs">
            <my-input
              placeholder="Пошук товарів"
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
              class="border-black-0 border"
            />
            <div
              class="absolute flex items-center justify-center inset-y-0 right-2 pointer-events-none"
            >
              <icon-search />
            </div>
          </div>
          <my-select
            class="w-full max-w-xs border-black-0 border appearance-none"
            :options="sortOptions"
            :selected="selectedSort"
            @update:selected="setSelectedSort"
          />
        </div>

        <span class="text-xl font-bold mx-auto p-2 uppercase">{{ selectedPath }}</span>
      </div>
      <product-card :products="sortedAndSearchProducts" />
      <div v-if="showButton" class="px-5 flex items-center justify-center my-5">
        <button
          @click="fetchNextProduct"
          class="uppercase border rounded-[35px] border-[1.4px] px-7 py-2 text-sm"
        >
          Завантажити ще...
        </button>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { pathConfigNew } from '@/config/path'
import { computed, defineComponent, reactive, ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useStore, mapGetters } from 'vuex'
export default defineComponent({
  name: 'products-section',
  setup() {
    const store = useStore()
    const selectedPath = ref<string>('')
    const active = ref('')
    const route = useRoute()
    const activeIndex = ref(-1)
    const nested = reactive({
      first: false, // Initial value
      second: false,
      third: false
    })
    const dataItems = ref<any>({
      pathConfigNew
    })
    const handleSetPath = (e) => {
      selectedPath.value = e
    }
    const fetchNextProduct = () => {
      const { _id } = store.state.product.product[store.state.product.product.length - 1]
      const param = route.params.id
      const params = {
        limit: 20,
        cursor: _id,
        type: param
      }
      store.dispatch('product/fetchProduct', params)
    }

    watch(
      () => route.fullPath,
      (newPath) => {
        active.value = newPath
      }
    )

    watch(
      () => route.params.id,
      async (newId, oldId) => {
        if (newId !== oldId) {
          let param = {}
          if (route.params.id === 'hit' || route.params.id === 'new' || route.params.id === 'sale')
            param[route.params.id] = true
          else {
            param = { type: route.params.id, limit: 10 }
          }
          // Викликаємо метод при зміні шляху
          await store.dispatch('product/fetchProduct', param)
        }
      }
    )
    return {
      dataItems,
      handleSetPath,
      nested,
      fetchNextProduct,
      showButton: computed(() => store.state.product?.showButton),
      searchQuery: computed(() => store.state.product.searchQuery),
      sortOptions: computed(() => store.state.product.sortOptions),
      setSelectedSort: (e) => store.commit('product/setSelectedSort', e),
      setSearchQuery: (e) => store.commit('product/setSearchQuery', e),
      selectedSort: computed(() => store.state.product.selectedSort),
      routePath: active,
      selectedPath,
      activeIndex
    }
  },
  computed: {
    ...mapGetters({
      sortedAndSearchProducts: 'product/sortedAndSearchProducts'
    })
  }
})
</script>

<style lang="scss" scoped></style>
