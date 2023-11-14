<template>
  <main class="mt-[94px]">
    <div class="w-full">
      <div class="container mx-auto py-8">
        <div class="pb-3 px-5">
          <h3 class="text-main font-bold text-4xl font-bold md:text-4xl uppercase leading-9">
            Твій характер в кожній сумці
          </h3>
        </div>
        <div class="pb-5 px-5">
          <p class="font-light text-main md:text-2xl">
            Якісні шкіряні чоловічі сумки, які підчеркнуть твій стиль
          </p>
        </div>
        <img src="../image/image.png" alt="main image" class="h-full object-none px-5" />
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto border-t border-b border-black-50">
        <div class="grid grid-cols-2 gap-2 items-center p-5">
          <div><count-down /></div>
          <p class="text-sm text-justify leading-6">
            Наші сумки, натуральна шкіра, якісна фурнітура, топ топскій купуй і не пожалкуєш
          </p>
        </div>
      </div>
    </div>
    <div class="w-full pt-10">
      <div class="container mx-auto">
        <div class="px-10">
          <p class="text-center font-bold text-2xl">Про якість наших сумок</p>
          <p class="text-center font-light text-sm mb-5">
            Або "Чому купити сумку саме у нас буде кращим рішенням?"
          </p>
          <div
            class="grid grid-cols-5 items-center gap-3 pb-6"
            v-for="(val, index) in conf[0]?.quality"
            :key="val.title"
          >
            <div class="flex items-center justify-center relative w-12 h-12">
              <div class="absolute"><icon-ellipse /></div>
              <div class="text-white text-2xl z-10">0{{ index + 1 }}</div>
            </div>
            <div class="col-span-4">
              <p class="font-bold text-sm normal-case">{{ val.title }}</p>
              <p class="font-light text-xs">{{ val.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="w-full py-10">
      <div class="container mx-auto">
        <div v-for="item in dataItems.cond" :key="item.title" class="flex p-4">
          <div>
            <icon-base width="45" height="45" icon-name="write">
              <icon-done />
            </icon-base>
          </div>

          <div class="block ml-3">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div> -->
    <div class="w-full">
      <div class="container mx-auto my-10">
        <div class="inline-block w-full text-2xl text-center mb-10 text-white bg-main p-5">
          Сумки з натуральної шкіри
        </div>
        <div>
          <div class="px-2 w-full text-center pb-3">
            <router-link
              class="m-1 px-4 py-2 inline-flex text-sm font-semibold rounded-[70px] shadow-3xl"
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
            <icon-filter />
            <p class="text-sm text-black-100">Фільтри</p>
          </button>

          <my-input :model-value="searchQuery" @update:model-value="setSearchQuery">
            <icon-search />
          </my-input>
        </div>
        <div class="px-5">
          <Collapse :when="nested.first">
            <div class="border-t border-gray">
              <button @click="nested.second = !nested.second" class="py-1">Сортування</button>
              <Collapse :when="nested.second">
                <my-select
                  :options="sortOptions"
                  :selected="selectedSort"
                  @update:selected="setSelectedSort"
                />
              </Collapse>
            </div>
            <div class="border-y border-gray">
              <button @click="nested.third = !nested.third" class="py-1">Наявність</button>
              <Collapse :when="nested.third">
                <my-select
                  :options="sortOptions"
                  :selected="selectedSort"
                  @update:selected="setSelectedSort"
                />
              </Collapse>
            </div>
          </Collapse>
        </div>
        <product-card :products="sortedAndSearchProducts" />
        <div class="px-5 flex items-center justify-center my-5">
          <button class="uppercase border rounded-[35px] border-[1.4px] px-7 py-2 text-sm">
            Завантажити ще...
          </button>
        </div>
      </div>
    </div>
    <div id="feedback" class="w-full">
      <div class="container mx-auto">
        <div class="my-10">
          <basic-carousel />
        </div>
      </div>
    </div>
    <div id="question" class="w-full bg-stone-200 py-5">
      <div class="container mx-auto max-w-[760px]">
        <div class="px-5">
          <p class="text-2xl font-bold text-brown-50">Відповіді на запитання, які часто задають</p>
          <p class="text-lg font-normal text-brown-50">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div v-for="(question, index) in questions" :key="index" class="w-full my-3">
            <div
              class="bg-stone-100 w-full border"
              :class="[question.isExpanded ? 'border-b-0 ' : '']"
            >
              <button
                :class="['flex w-full  justify-between p-3 items-center  ']"
                @click="() => handleAccordion(index)"
              >
                <p class="text-sm font-bold">{{ question.title }}</p>
                <div class="panel__icon">
                  <IconPlus
                    :style="{
                      transform: `rotate(${question.isExpanded ? rotation : 0}deg)`,
                      transition: `transform 0.3s`
                    }"
                  />
                </div>
              </button>
            </div>
            <Collapse as="section" :when="question.isExpanded">
              <p class="p-3 bg-stone-100 w-full border-b border-l border-r">
                {{ question.description }}
              </p>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import IconEllipse from '@/assets/IconEllipse.vue'
import { defineComponent, ref, watchEffect, reactive, computed } from 'vue'
import cond from '@/config/condition.json'
import quality from '@/config/quality.json'
import { Collapse } from 'vue-collapsed'
import IconPlus from '@/assets/IconPlus.vue'
import BasicCarousel from '@/components/BasicCarousel.vue'
import ProductCard from '@/components/ProductCard.vue'
import { pathConfigNew } from '@/config/path'
import { useStore, mapGetters } from 'vuex'
import useScrollToElement from '@/hooks/useScrollToElement'
import CountDown from '@/components/CountDown.vue'
import IconFilter from '@/assets/IconFilter.vue'
//import IconBase from '@/assets/IconBase.vue'
import MyInput from '@/UI/MyInput.vue'
import IconSearch from '@/assets/IconSearch.vue'
import MySelect from '@/UI/MySelect.vue'
export default defineComponent({
  components: {
    IconEllipse,
    Collapse,
    IconPlus,
    BasicCarousel,
    ProductCard,
    CountDown,
    IconFilter,
    // IconBase,
    MyInput,
    IconSearch,
    MySelect
  },

  setup() {
    const { handleReviewsClick } = useScrollToElement()
    const store = useStore()
    const nested = reactive({
      first: false, // Initial value
      second: false,
      third: false
    })
    const dataItems = ref<any>({
      quality,
      cond,
      pathConfigNew
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
    return {
      dataItems,
      handleAccordion,
      questions,
      rotation,
      activeIndex,
      product: computed(() => store.state.product.product),
      conf: computed(() => store.state.product.confShop),
      handleReviewsClick,
      searchQuery: computed(() => store.state.product.searchQuery),
      selectedSort: computed(() => store.state.product.selectedSort),
      sortOptions: computed(() => store.state.product.sortOptions),
      setSearchQuery: (e) => store.commit('product/setSearchQuery', e),
      setSelectedSort: (e) => store.commit('product/setSelectedSort', e),
      nested
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
