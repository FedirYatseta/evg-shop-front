<template>
  <section class="w-full shadow-xl">
    <div
      class="inline-block w-full text-base sm:text-lg font-bold uppercase xl:text-2xl text-center mb-5 md:mb-10 lg:mb-16 text-white bg-main p-3 sm:p-1 lg:p-3"
    >
      <p class="mx-auto">Вибери свою сумку</p>
    </div>
    <div class="container mx-auto px-2 sm:px-20" id="catalog">
      <div class="grid grid-co gap-2 mb-3">
        <div class="w-full text-center pb-3">
          <router-link
            class="m-1 px-4 xl:px-5 py-2 inline-flex text-sm md:text-base xl:text-xl font-semibold md:font-bold"
            :class="{ 'shadow-3xl': path.path !== routePath }"
            v-for="path in dataItems.pathConfigNew"
            :key="path.name"
            :to="path.path"
            @click="() => handleSetPath(path.name)"
            >{{ path.name }}
          </router-link>
        </div>
        <div class="px-5 flex justify-between py-2">
          <button
            class="flex items-center"
            :class="['Panel', { Active: nested.first }]"
            @click="nested.first = !nested.first"
          >
            <div class="mr-2"><icon-filter /></div>

            <p class="text-sm md:text-xl text-black-100">Фільтри</p>
          </button>
          <div class="relative">
            <my-input
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
              class="h-full"
            />
            <div
              class="absolute flex items-center justify-center inset-y-0 right-2 pointer-events-none"
            >
              <icon-search />
            </div>
          </div>
        </div>
        <div class="px-5 my-5">
          <Collapse :when="nested.first">
            <div class="border-t border-gray">
              <button
                @click="nested.second = !nested.second"
                class="py-1 w-full text-start"
                :class="['Panel', { Active: nested.second }]"
              >
                Сортування
              </button>
              <Collapse :when="nested.second">
                <my-select
                  class="max-w-xs shadow-4xl appearance-none mb-2"
                  :options="sortOptions"
                  :selected="selectedSort"
                  @update:selected="setSelectedSort"
                />
              </Collapse>
            </div>
            <div class="border-b border-gray"></div>
          </Collapse>
        </div>

        <span class="text-xl font-bold mx-auto p-2 uppercase">{{ selectedPath }}</span>
      </div>
      <product-card :products="sortedAndSearchProducts" />
      <div v-if="showButton" class="px-5 flex items-center justify-center my-5 pb-12">
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
import { computed, defineComponent, reactive, ref, watch, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore, mapGetters } from 'vuex'
import { Collapse } from 'vue-collapsed'

export default defineComponent({
  name: 'products-section',
  components: {
    Collapse
  },
  setup() {
    const store = useStore()
    const selectedPath = ref<string>('')
    const active = ref('')
    const route = useRoute()
    const nested = reactive({
      first: true, // Initial value
      second: false
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

    const questions = reactive<any>([]) // Початково порожній масив для питань

    watchEffect(() => {
      // Викликається при зміні store.state.product.confShop
      if (store.state.product.confShop.length > 0) {
        // Якщо дані завантажені
        questions.length = 0 // Очищаємо попередні питання
        const confShop = store.state.product.confShop[0]
        if (confShop && confShop.collapse) {
          questions.push(
            ...confShop.collapse.map(({ title, description }: any) => ({
              title,
              description,
              isExpanded: false
            }))
          )
        }
      }
    })

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
      selectedPath
    }
  },
  computed: {
    ...mapGetters({
      sortedAndSearchProducts: 'product/sortedAndSearchProducts'
    })
  }
})
</script>

<style></style>
