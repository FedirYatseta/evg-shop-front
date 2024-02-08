<template>
  <div class="mt-[53px] sm:mt-0">
    <section class="w-full bg-black-400">
      <div class="container mx-auto">
        <div class="flex w-full">
          <count-down :textColor="true" :time="time" />
        </div>
      </div>
    </section>
    <section class="w-full">
      <div class="container mx-auto py-6 lg:py-8">
        <div class="flex flex-col-reverse sm:flex-row gap-1 justify-items-center">
          <div
            class="flex flex-col justify-center sm:justify-start xl:justify-center gap-4 px-3 sm:px-0 sm:gap-5 sm:pt-5 lg:gap-5 xl:gap-6"
          >
            <p
              class="text-base uppercase font-bold md:text-2xl lg:text-2xl xl:text-3xl text-center md:text-start"
            >
              Шукаєш стильну та якісну сумку для себе або на подарунок ?
            </p>
            <p
              class="text-center uppercase md:text-start text-xs font-bold sm:text-sm sm:mb-6 lg:mb-2 md:font-bold text-main xl:text-xl"
            >
              Ми знаємо як тобі допомогти! Чоловічі сумки та аксесуари зі знижкою до -43% напряму
              від виробника
            </p>
            <div class="w-full max-w-20 mx-auto flex justify-center hidden sm:block">
              <router-link
                :to="'/'"
                @click="() => handleReviewsClick({ id: 'catalog' })"
                class="bg-main hover:bg-brown-50 text-white w-[150px] font-serif py-2 px-5 lg:p-2 text-center uppercase border border-brown-50 text-xs md:text-xs font-bold xl:text-xl"
                >Каталог</router-link
              >
            </div>
          </div>
          <div class="w-full h-full max-h-[380px] xl:max-h-[480px] flex mb-4">
            <img
              src="../image/image.jpg"
              alt="main image"
              class="w-full h-auto object-contain lg:hidden"
            />
            <img
              src="../image/image.jpg"
              alt="main image"
              class="w-full h-auto object-contain hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="w-full shadow-3xl pt-8 sm:py-2 lg:pb-10">
      <div class="container mx-auto py-4 lg:py-10">
        <div class="flex flex-col sm:flex-row sm:gap-5 lg:gap-20 items-center sm:items-start">
          <div class="px-5 w-full md:w-1/2 h-full flex my-4 max-h-[250px] lg:w-100 sm:flex sm:px-0">
            <img
              src="../image/photo_2024-02-03_11-01-17.jpg"
              alt="main image"
              class="w-full h-auto object-contain lg:hidden"
            />
            <img
              src="../image/photo_2024-02-03_11-01-17.jpg"
              alt="main image"
              class="w-full h-auto object-contain hidden lg:block"
            />
          </div>
          <div
            class="flex flex-col justify-center px-2 sm:px-0 gap-2 lg:gap-4 w-full md:w-1/2 sm:gap-4 lg:gap-5 xl:gap-6"
          >
            <p
              class="text-xl font-bold sm:text-xl lg:text-xl xl:text-2xl uppercase text-center md:text-start mb-7 sm:mb-2 pt-2"
            >
              Чому саме ми?
            </p>
            <ul
              class="flex flex-col gap-3 lg:gap-2 text-sm sm:text-xs lg:text-xs xl:text-base px-8 md:px-0"
            >
              <li v-for="item in list" :key="item" class="flex items-center gap-2">
                <icon-done-svg
                  class="w-4 h-4 min-w-4 min-h-4 lg:w-5 lg:h-5 xl:w-6 xl:h-6"
                /><span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
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
          <div class="px-5">
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
    <!-- <section class="w-full pb-8 lg:mb-16 shadow-xl">
      <div class="container mx-auto">
        <div
          class="grid grid-col sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-8 lg:gap-x-10 lg:gap-y-6 px-6 pt-8 lg:px-0 lg:pt-0"
        >
          <div v-for="item in items" :key="item.path" class="shadow-lg relative">
            <router-link :to="item.path" class="flex flex-col h-full justify-between relative">
              <img :src="item.image" :alt="item.path" class="w-full h-full" />
              <div class="bg-black-50 h-10 md:h-14 p-2 flex items-center">
                <p class="w-full text-center text-white text-xs sm:text-base lg:text-sm uppercase">
                  {{ item.name }}
                </p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section> -->
    <section id="aboutus" class="w-full py-2 lg:py-5 mb-6 shadow-xl sm:pb-12 lg:pb-24">
      <div class="container mx-auto">
        <div
          class="font-serif text-lg md:text-4xl xl:text-2xl font-bold text-center sm:hidden mb-6 lg:mb-12 uppercase"
        >
          Про нас
        </div>
        <div class="flex flex-col items-start sm:flex-row sm:gap-5">
          <div class="px-5 lg:w-1/2 h-full flex">
            <img
              src="../image/IMG_20240118_195008_325.jpg"
              alt="main image"
              class="w-full h-auto object-contain"
            />
          </div>
          <div
            class="flex flex-col justify-start items-start px-5 gap-2 sm:gap-5 lg:gap-4 lg:w-1/2 pt-10"
          >
            <div
              class="text-2xl hidden sm:block sm:text-lg lg:text-xl xl:text-2xl font-bold text-start lg:mb-2 uppercase"
            >
              Про нас
            </div>
            <p
              class="text-sm font-bold sm:text-base lg:text-xl xl:text-2xl text-center md:text-start"
            >
              "Ми знаємо що таке стиль"
            </p>
            <p
              class="text-sm font-bold sm:text-base lg:text-lg xl:text-xl text-justify md:text-start mb-7"
            >
              Ласкаво просимо до нашого магазину. Ми впевнені що Ви знайдете сумку для себе або на
              подарунок від українського виробника. Всі наші сумки викготовлені з високоякісної
              шкіри та фурнітури, через що наші сумки будуть слугувати вам роками без втрат свого
              стартового вигляду.
            </p>
          </div>
        </div>
        <!-- <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
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
        </div>-->
      </div>
    </section>
    <section id="question" class="w-full pb-4 mb-4 lg:mb-16">
      <div class="container mx-auto">
        <div class="px-5 sm:px-0 grid grid-col gap-5">
          <div class="flex items-center justify-center">
            <p
              class="text-center text-lg lg:text-base xl:text-2xl uppercase font-bold text-brown-50 sm:mb-1 lg:pt-8"
            >
              Часті запитання
            </p>
          </div>
          <div class="flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-8">
            <div class="lg:w-1/3 mt-3">
              <img src="../image/image3.jpg" alt="bug" class="w-full h-auto object-contain" />
            </div>
            <div class="w-full lg:w-2/3">
              <div v-for="(question, index) in questions" :key="index" class="w-full my-3">
                <div
                  class="bg-stone-100 w-full border border-black-400"
                  :class="[question.isExpanded ? 'border-b-0 ' : '']"
                >
                  <button
                    :class="['flex w-full  justify-between p-2 items-center text-start ']"
                    @click="() => handleAccordion(index)"
                  >
                    <p class="text-sm sm:text-xs lg:text-base font-bold w-full text-start">
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
                    class="p-3 bg-stone-100 sm:text-xs lg:text-base w-full border-b border-l border-r border-black-400"
                    v-html="processTextWithEmojis(question.description)"
                  ></div>
                </Collapse>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="feedback" class="w-full shadow-5xl py-5 mb-4 lg:mb-16">
      <div class="container mx-auto">
        <h1
          class="text-center text-xs sm:text-xl uppercase lg:text-base xl:text-2xl font-bold text-brown-50 pt-5 mb-10"
        >
          Відгуки наших клієнтів
        </h1>
        <div class="py-6">
          <basic-carousel />
        </div>
      </div>
    </section>
    <section class="w-full py-5 mb-4 sm:mb-16">
      <div class="container mx-auto">
        <div class="grid grid-col md:grid-cols-2 gap-4 px-3">
          <div class="max-h-[550px]">
            <img src="../image/6.jpg" alt="bug" class="w-full h-full object-contain" />
          </div>
          <div>
            <h1
              class="text-center text-xs sm:text-xs uppercase xl:text-2xl font-bold text-brown-50 pt-4 sm:pt-12"
            >
              Зворотній звязок
            </h1>
            <p class="text-center text-brown-50 text-xs10 sm:text-xs8 font-bold uppercase">
              Тут ви можете лишити свої коментарі, пропозиції та побажання
            </p>
            <div class="my-5 w-full">
              <form
                @submit.prevent
                @submit="onSubmit"
                class="flex flex-col items-center w-full mx-auto max-w-[500px]"
              >
                <div class="my-2 w-full">
                  <my-input
                    placeholder="Ваше І'мя"
                    v-bind="name"
                    name="name"
                    id="name"
                    class="bg-black-400 h-8 md:h-10 px-2 text-xs"
                  />
                  <p class="text-red">{{ errors.name }}</p>
                </div>
                <div class="my-2 w-full">
                  <my-input
                    placeholder="+380 (99) 999 99 99"
                    v-bind="phone"
                    name="phone"
                    id="phone"
                    type="tel"
                    v-mask="'+380 (##) ### ## ##'"
                    class="bg-black-400 h-8 md:h-10 px-2 text-xs"
                  />
                  <p class="text-red">{{ errors.phone }}</p>
                </div>
                <div class="my-2 w-full">
                  <my-textarea
                    placeholder="Введіть питання або повідомлення..."
                    v-bind="describe"
                    name="describe"
                    id="describe"
                    rows="4"
                    class="bg-black-400 px-2 text-xs p-2"
                  />
                  <p class="text-red">{{ errors.describe }}</p>
                </div>
                <my-button class="bg-main hover:bg-brown-100 uppercase text-white p-3 w-64"
                  >Відправити</my-button
                >
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect, watch, reactive, computed } from 'vue'
import { Collapse } from 'vue-collapsed'
import { categoryProduct, pathConfigNew } from '@/config/path'
import { useStore, mapGetters } from 'vuex'
import useScrollToElement from '@/hooks/useScrollToElement'
import { useRoute } from 'vue-router'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { list } from '../config/config'
export default defineComponent({
  components: {
    Collapse
  },

  setup() {
    const { handleReviewsClick } = useScrollToElement()
    const route = useRoute()

    const store = useStore()
    const phoneNumberRegex = /^\+380 \(\d{2}\) \d{3} \d{2} \d{2}$/
    const selectedPath = ref<string>('')
    const schema = yup.object({
      name: yup.string().required("Вкажіть ваше І'мя"),
      phone: yup
        .string()
        .required('Вкажіть мобільний номер телефону')
        .matches(phoneNumberRegex, 'Не вірний формат мобільного номеру телефона'),
      describe: yup.string().required('Напишіть мінімум 3 слова')
    })

    const { handleSubmit, defineInputBinds, errors, values } = useForm({
      initialValues: {
        name: '',
        phone: '',
        idShop: '',
        describe: ''
      },
      validationSchema: schema
    })
    const stages = ref([
      { image: 'icon-order' }, // Функція, що імпортує Vue компонент
      { image: 'icon-money' },
      { image: 'icon-where' },
      { image: 'icon-reload' }
    ])
    const items = ref(categoryProduct)

    const nested = reactive({
      first: false, // Initial value
      second: false,
      third: false
    })
    const dataItems = ref<any>({
      pathConfigNew
    })
    const active = ref('')
    const rotation = ref(45)
    const activeIndex = ref(-1)
    const questions = reactive<any>([]) // Початково порожній масив для питань
    const processTextWithEmojis = (text) => {
      const lines = text.split('\n')
      const paragraphs = lines.map((line) => `<p>${line}</p>`)
      return paragraphs.join('')
    }

    watch(
      () => route.fullPath,
      (newPath) => {
        active.value = newPath
      }
    )

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
      const param = route.params.id
      const params = {
        limit: 20,
        cursor: _id,
        type: param
      }
      store.dispatch('product/fetchProduct', params)
    }

    const name = defineInputBinds('name')
    const phone = defineInputBinds('phone')
    const describe = defineInputBinds('describe')

    const onSubmit = handleSubmit(async (values) => {
      const newObj = {
        name: values.name,
        phone: values.phone,
        idShop: store.state.product.shop,
        describe: values.describe
      }

      await store.dispatch('product/createMessage', newObj)
    })

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

    const handleSetPath = (e) => {
      selectedPath.value = e
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
      time: computed(() => store.state.product?.confShop[0]?.saleTime),
      routePath: active,
      name,
      phone,
      describe,
      errors,
      values,
      onSubmit,
      handleSetPath,
      showButton: computed(() => store.state.product?.showButton),
      selectedPath,
      list,
      nameParams: route.params.id
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
