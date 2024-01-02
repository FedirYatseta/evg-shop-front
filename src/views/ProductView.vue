<template>
  <section class="w-full mt-[70px] md:mt-2 py-10">
    <div class="container mx-auto px-2">
      <div class="grid grid-co gap-2 mb-3">
        <div>
          <div class="w-full text-center pb-3">
            <router-link
              class="m-1 px-4 xl:px-5 py-2 inline-flex text-sm md:text-base 2xl:text-3xl font-semibold md:font-bold rounded-[70px] shadow-3xl"
              @click="handleReviewsClick(path)"
              v-for="path in dataItems.pathConfigNew"
              :key="path.name"
              :to="path.path"
              >{{ path.name }}</router-link
            >
          </div>
        </div>
        <div class="px-5 flex justify-between py-2">
          <button class="flex items-center" @click="nested.first = !nested.first">
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
              <button @click="nested.second = !nested.second" class="py-1 w-full text-start">
                Сортування
              </button>
              <Collapse :when="nested.second">
                <my-select
                  class="max-w-xs shadow-4xl rounded-md appearance-none mb-2"
                  :options="sortOptions"
                  :selected="selectedSort"
                  @update:selected="setSelectedSort"
                />
              </Collapse>
            </div>
            <div class="border-b border-gray"></div>
          </Collapse>
        </div>
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
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, ref, watch, watchEffect } from 'vue'
import { useStore } from 'vuex'
import { mapState, mapGetters, mapMutations } from 'vuex'
import { useRoute } from 'vue-router'
import { pathConfigNew } from '@/config/path'
import { Collapse } from 'vue-collapsed'
export default defineComponent({
  components: {
    Collapse
  },
  setup() {
    const route = useRoute()
    const dataItems = ref<any>({
      pathConfigNew
    })
    const fetchNextProduct = () => {
      const { _id } = store.state.product.product[store.state.product.product.length - 1]
      let param = {}
      if (route.params.id === 'hit' || route.params.id === 'new' || route.params.id === 'sale') {
        param[route.params.id] = true
      } else param = { type: route.params.id }

      store.dispatch('product/fetchProduct', { limit: 10, cursor: _id, ...param })
    }
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
    onMounted(async () => {
      let param = {}
      if (route.params.id === 'hit' || route.params.id === 'new' || route.params.id === 'sale')
        param[route.params.id] = true
      else param = { type: route.params.id }

      await store.dispatch('product/fetchProduct', param) // 'product' - це ім'я вашого модулю Vuex
    })

    const store = useStore()
    const nested = reactive({
      first: false, // Initial value
      second: false,
      third: false
    })

    const rotation = ref(45)
    const activeIndex = ref(-1)
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

    const handleAccordion = (selectedIndex: number) => {
      questions.forEach((question, index) => {
        if (index === selectedIndex) {
          // Якщо це питання, яке ми відкриваємо
          question.isExpanded = !question.isExpanded
        } else {
          // Інакше, закриваємо всі інші питання
          question.isExpanded = false
        }
      })
    }
    return { fetchNextProduct, handleAccordion, rotation, activeIndex, nested, dataItems }
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
