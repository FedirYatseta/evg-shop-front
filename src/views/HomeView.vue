<template>
  <div class="mt-[78px] md:mt-6">
    <div class="w-full">
      <div class="container mx-auto pt-4 pb-6">
        <div class="grid grid-col md:grid-cols-2 gap-2 justify-items-center">
          <div class="pb-3 px-5 flex flex-col justify-center">
            <h3
              class="text-main font-bold text-4xl font-bold lg:text-[51px] xl:text-[71px] uppercase md:leading-[55.2px] xl:leading-[85.2px] mb-3 md:mb-9"
            >
              Характер в кожній сумці
            </h3>
            <p class="font-light text-main md:text-2xl lg:text-3xl md:mb-9">
              Якісні шкіряні чоловічі сумки, які підкреслять твій стиль
            </p>
            <router-link
              to="/category"
              class="p-3 bg-brown-100 border-[1.4px] text-white uppercase w-max hidden md:block"
            >
              Переглянути каталог</router-link
            >
          </div>
          <div
            class="px-5 w-full h-full max-h-[250px] md:max-h-[350px] lg:max-h-[450px] xl:max-h-[550px]"
          >
            <img
              src="../image/image.webp"
              alt="main image"
              class="w-full h-full object-cover lg:hidden"
            />
            <img
              src="../image/imageDesc.webp"
              alt="main image"
              class="w-full h-full object-cover hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="border-t border-b border-black-50 mb-8 lg:mb-16 xl:mb-24">
        <div class="container mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-1 justify-items-center gap-2 items-center p-5">
            <div class="md:hidden"><count-down :textColor="false" :saleTime="saleTime" /></div>
            <p class="text-sm md:text-lg lg:text-xl xl:text-2xl text-justify leading-6">
              Сумки з натуральної шкіри та аксесуари, до 43% знижки!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto">
        <div class="px-6 lg:px-10">
          <p class="text-center font-bold text-2xl md:text-4xl xl:text-[53px] mb-2 md:mb-5">
            Про якість наших сумок
          </p>
          <p class="text-center font-light text-xs md:text-lg xl:text-xl mb-8 lg:mb-16 xl:mb-20">
            Або "Чому купити сумку саме у нас буде кращим рішенням?"
          </p>
          <div class="grid grid-col gap-3 md:gap-4 pb-6 md:px-4 lg:px-48 lg:mb-16">
            <div
              class="flex items-center justify-start pb-2 lg:pb-6 h-full px-4"
              v-for="(val, index) in conf[0]?.quality"
              :key="val.title"
            >
              <div class="flex items-start justify-center relative h-full mr-3 xl:mr-10">
                <div class="absolute block md:hidden rounded-full h-8 w-8 shadow-6xl"></div>
                <div
                  class="absolute hidden md:block xl:hidden rounded-full h-12 w-12 shadow-6xl"
                ></div>
                <div class="absolute hidden xl:block rounded-full h-20 w-20 shadow-6xl"></div>
                <div
                  class="text-white flex items-center justify-center text-center text-md md:text-2xl xl:text-4xl z-10 w-[32px] h-[32px] md:w-[48px] md:h-[48px] xl:w-[80px] xl:h-[80px]"
                >
                  <p>0{{ index + 1 }}</p>
                </div>
              </div>
              <div>
                <p
                  class="font-bold text-sm md:text-xl xl:text-[42px] normal-case leading-none xl:leading-10 mb-2 lg:mb-3"
                >
                  {{ val.title }}
                </p>
                <p class="font-light text-xs md:text-sm xl:text-2xl leading-none">
                  {{ val.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full shadow-5xl">
      <div
        class="inline-block w-full text-2xl md:text-4xl xl:text-[53px] text-center mb-3 md:mb-10 text-white bg-main p-5 md:p-10"
      >
        <p class="container mx-auto">Сумки з натуральної шкіри</p>
      </div>
      <div class="container mx-auto my-10 md:px-12 xl:px-0">
        <div>
          <div class="px-2 w-full text-center pb-3">
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
        <div
          id="search"
          class="h-[41px] relative max-w-[661px] container mx-auto my-8 hidden md:flex"
        >
          <my-input
            aria-labelledby="search"
            placeholder="Пошук"
            :model-value="searchQuery"
            @update:model-value="setSearchQuery"
            :shadow="true"
            class="px-4 rounded-xl h-[41px]"
          />
          <div
            class="absolute flex items-center justify-center inset-y-0 right-5 pointer-events-none"
          >
            <icon-search />
          </div>
        </div>
        <div class="px-5 flex justify-between py-2">
          <button class="flex items-center" @click="nested.first = !nested.first">
            <div class="mr-2"><icon-filter /></div>

            <p class="text-sm md:text-xl text-black-100">Фільтри</p>
          </button>
          <div class="relative md:hidden">
            <my-input
              :model-value="searchQuery"
              @update:model-value="setSearchQuery"
              class="md:hidden"
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

        <product-card :products="sortedAndSearchProducts" />

        <div class="px-5 flex items-center justify-center py-5 lg:py-10">
          <button
            @click="fetchNextProduct"
            class="uppercase border rounded-[35px] border-[1.4px] px-7 py-2 text-sm"
          >
            Завантажити ще...
          </button>
        </div>
      </div>
    </div>
    <div class="w-full py-2 lg:py-10 mb-6">
      <div class="container mx-auto px-5">
        <div
          class="font-serif text-2xl md:text-4xl xl:text-5xl font-bold text-center mb-10 lg:mb-12"
        >
          Этапи оформлення замовлення
        </div>
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          <div v-for="(item, index) in stages" :key="index" class="flex flex-col items-center">
            <div class="w-16 h-16 xl:w-24 xl:h-24 mb-6">
              <component :is="item.image" />
            </div>
            <p class="text-xl md:text-2xl lg:text-3xl font-bold">
              {{ conf[0]?.condition[index].title }}
            </p>
            <p class="font-serif text-xs md:text-sm lg:text-xl font-light">
              {{ conf[0]?.condition[index].description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="feedback" class="w-full md:shadow-5xl py-5 mb-4 lg:mb-16">
      <div class="container mx-auto px-5">
        <h1 class="text-center text-2xl md:text-4xl xl:text-[53px] font-bold text-brown-50 pt-4">
          Відгуки наших покупців
        </h1>
        <p class="text-center text-brown-50 pt-5 text-base lg:text-lg">
          Даруємо <strong>10%</strong> знижки за відмітку нас себе в соц. мережах "Іnstagram,
          Facebook"
        </p>
        <div class="my-5">
          <basic-carousel />
        </div>
      </div>
    </div>
    <div id="question" class="w-full mb-12 lg:mb-16">
      <div class="container mx-auto">
        <div class="px-5 grid grid-col gap-5">
          <div class="flex items-center justify-center">
            <p
              class="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-brown-50 md:leading-[63px] md:mb-5"
            >
              Часті питання від наших клієнтів:
            </p>
          </div>
          <div>
            <div v-for="(question, index) in questions" :key="index" class="w-full my-3">
              <div
                class="bg-stone-100 w-full border"
                :class="[question.isExpanded ? 'border-b-0 ' : '']"
              >
                <button
                  :class="['flex w-full  justify-between p-3 items-center text-start ']"
                  @click="() => handleAccordion(index)"
                >
                  <p class="text-sm md:text-2xl font-bold w-full text-center">
                    {{ question.title }}
                  </p>
                  <div class="panel__icon">
                    <icon-plus
                      :style="{
                        transform: `rotate(${question.isExpanded ? rotation : 0}deg)`,
                        transition: `transform 0.3s`
                      }"
                    />
                  </div>
                </button>
              </div>
              <Collapse as="section" :when="question.isExpanded">
                <div
                  class="p-3 bg-stone-100 md:text-2xl w-full border-b border-l border-r"
                  v-html="processTextWithEmojis(question.description)"
                ></div>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto">
        <div class="grid grid-cols-2 lg:grid-cols-3">
          <div v-for="item in items" :key="item.path" class="shadow-lg relative">
            <router-link :to="item.path">
              <img :src="item.image" :alt="item.path" />
              <p
                class="absolute w-full text-center top-2/4 left-2/4 -translate-x-2/4 text-white text-md md:text-2xl lg:text-4xl uppercase"
              >
                {{ item.name }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, reactive, computed } from 'vue'
import { Collapse } from 'vue-collapsed'
import { categoryProduct, pathConfigNew } from '@/config/path'
import { useStore, mapGetters } from 'vuex'
import useScrollToElement from '@/hooks/useScrollToElement'

export default defineComponent({
  components: {
    Collapse
  },

  setup() {
    const { handleReviewsClick } = useScrollToElement()
    const stages = ref([
      { image: 'icon-order' }, // Функція, що імпортує Vue компонент
      { image: 'icon-money' },
      { image: 'icon-where' },
      { image: 'icon-reload' }
    ])
    const items = ref(categoryProduct)
    const store = useStore()
    const nested = reactive({
      first: false, // Initial value
      second: false,
      third: false
    })
    const dataItems = ref<any>({
      pathConfigNew
    })

    const rotation = ref(45)
    const activeIndex = ref(-1)
    const questions = reactive<any>([]) // Початково порожній масив для питань
    const processTextWithEmojis = (text) => {
      const lines = text.split('\n')
      const paragraphs = lines.map((line) => `<p>${line}</p>`)
      return paragraphs.join('')
    }

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

    const fetchNextProduct = () => {
      const { _id } = store.state.product.product[store.state.product.product.length - 1]
      store.dispatch('product/fetchProduct', { limit: 10, cursor: _id })
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
      nested,
      fetchNextProduct,
      processTextWithEmojis,
      items,
      stages,
      saleTime: computed(() => store.state.product?.confShop[0]?.saleTime)
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
