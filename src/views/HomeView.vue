<template>
  <main>
    <div class="w-full">
      <div class="container mx-auto">
        <img src="../image/photo_1.jpg" alt="Organization Logo" class="w-full" />
        <div class="px-2">
          <h3>ШВИДКА ДОСТАВКА</h3>
          <p>- Новою поштою <strong>та</strong> Укрпоштою</p>
          <p>- по Україні від 1 - 3 робочих днів</p>
        </div>
        <div class="px-2">
          <p>БЕЗ ПЕРЕДОПЛАТИ + ПЕРЕВІРКА ТОВАРУ ДО ОПЛАТИ</p>
        </div>
      </div>
    </div>
    <div class="w-full bg-stone-400 py-5">
      <div class="container">
        <p class="text-center">
          Обмін, повернення товару 14 календарних днів без заморочок та складностей
        </p>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto">
        <div v-for="item in text" :key="item.title" class="flex p-4">
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
    </div>
    <div class="w-full">
      <div class="container mx-auto my-10">
        <product-card :products="product" />
      </div>
    </div>
    <div class="w-full bg-stone-200 py-5">
      <div class="container mx-auto max-w-[760px]">
        <div
          v-for="(question, index) in questions"
          :key="question.title"
          class="w-full divide-y px-3"
        >
          <div class="bg-stone-100 w-full">
            <button
              :class="['flex w-full  justify-between p-3  ', { Active: question.isExpanded }]"
              @click="handleAccordion(index)"
            >
              <p class="section-title">{{ question.title }}</p>
              <div class="panel__icon">
                <IconPlus
                  :style="{
                    transform: `rotate(${activeIndex === index ? rotation : 0}deg)`,
                    transition: `transform 0.3s`
                  }"
                />
              </div>
            </button>
          </div>
          <Collapse as="section" :when="question.isExpanded">
            <p class="p-3 bg-stone-100 w-full">
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
    <div class="w-full">
      <div class="container mx-auto">
        <div class="my-10">
          <basic-carousel />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import IconDone from '@/assets/IconDone.vue'

import { defineComponent, ref, reactive } from 'vue'
import data from '@/config/collapse.json'
import cond from '@/config/condition.json'
import { Collapse } from 'vue-collapsed'
import IconPlus from '@/assets/IconPlus.vue'
import IconBase from '@/assets/IconBase.vue'
import BasicCarousel from '@/components/BasicCarousel.vue'
import ProductCard from '@/components/ProductCard.vue'
import { mapState } from 'vuex'
export default defineComponent({
  components: {
    IconDone,
    Collapse,
    IconPlus,
    IconBase,
    BasicCarousel,
    ProductCard
  },
  computed: {
    ...mapState({
      product: (state) => state.product.product
    })
  },
  setup() {
    const collapseData = ref<any>(data)
    const rotation = ref(45)
    const activeIndex = ref(-1)

    const text = ref(cond)
    const questions = reactive(
      collapseData.value.map(({ title, answer }: any, index: any) => ({
        title,
        answer,
        isExpanded: false // Initial values, display expanded on mount
      }))
    )
    function handleAccordion(selectedIndex: number) {
      questions.forEach((_: any, index: any) => {
        if (activeIndex.value === selectedIndex) {
          activeIndex.value = -1 // Закрити активне питання
        } else {
          activeIndex.value = selectedIndex // Відкрити нове питання
        }
        questions[index].isExpanded = index === selectedIndex ? !questions[index].isExpanded : false
      })
    }
    return {
      text,

      handleAccordion,
      questions,
      rotation,
      activeIndex
    }
  }
})
</script>

<style></style>
