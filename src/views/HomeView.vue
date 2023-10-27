<template>
  <main>
    <div class="block-1">
      <div class="container">
        <img src="../image/photo_1.jpg" alt="Organization Logo" class="imageIcon" />
        <div class="conditions">
          <h3>ШВИДКА ДОСТАВКА</h3>
          <p>- Новою поштою <strong>та</strong> Укрпоштою</p>
          <p>- по Україні від 1 - 3 робочих днів</p>
        </div>
        <div class="cond-text">
          <p>БЕЗ ПЕРЕДОПЛАТИ + ПЕРЕВІРКА ТОВАРУ ДО ОПЛАТИ</p>
        </div>
      </div>
    </div>
    <div class="block-2">
      <div class="container">
        <p class="block-2__text">
          Обмін, повернення товару 14 календарних днів без заморочок та складностей
        </p>
      </div>
    </div>
    <div class="block-3">
      <div class="container">
        <div v-for="item in text" :key="item.title" class="block-conditions">
          <div class="block-conditions__svg">
            <icon-base width="45" height="45" icon-name="write">
              <icon-done />
            </icon-base>
          </div>

          <div class="description-block">
            <h4>{{ item.title }}</h4>
            <p>{{ item.description }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="block-4">
      <div class="container">
        <product-card />
      </div>
    </div>
    <div class="block-5">
      <div class="container">
        <div v-for="(question, index) in questions" :key="question.title" class="Section">
          <div class="section-btn">
            <button
              :class="['Panel', { Active: question.isExpanded }]"
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
            <p class="CollapseContent">
              {{ question.answer }}
            </p>
          </Collapse>
        </div>
      </div>
    </div>
    <div class="block-6">
      <div class="container">
        <div class="carousel-block">
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
export default defineComponent({
  components: {
    IconDone,
    Collapse,
    IconPlus,
    IconBase,
    BasicCarousel,
    ProductCard
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

<style>
.carousel-block {
  padding: 20px 0;
}
.section-title {
  font-size: 20px;
  color: #000;
  font-weight: 600;
}
.block-conditions__svg {
  display: flex;
}
.panel__icon {
  display: flex;
  border-radius: 50%;
  background-color: #fafafa;
  padding: 5px;
}
.block-5__title {
  font-size: 28px;
  font-weight: 600;
  padding: 50px 0;
}
.section-btn {
  display: flex;
  align-items: center;
  padding: 0 5px;
}
.Panel {
  font-size: 24px;
  font-weight: 400;
  color: #000;
  text-align: start;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.CollapseContent {
  padding: 0 10px 10px;
  margin: 0;
  font-size: 1rem;
}
.Section {
  width: 100%;
  border-top: 1px solid #eee;
  margin: 0;
  background-color: #fff;
}
.Section:last-of-type {
  border-bottom: 1px solid #eee;
}
.Section button {
  width: 100%;
  padding: 10px 5px;
  border: none;
  background: none;
  cursor: pointer;
}
.conditions {
  margin-bottom: 30px;
}

.conditions h3 {
  text-align: center;
}
.imageIcon {
  width: 100%;
  height: auto;
}

.block-conditions {
  display: flex;
  padding-bottom: 20px;
}

.description-block {
  padding-left: 10px;
}

.description-block p {
  font-size: 14px;
  font-weight: 300;
}
.description-block h4 {
  font-size: 16px;
  font-weight: 600;
}

.block-2 {
  background-color: #e5f0ff;
  padding: 10px 0;
}

.block-1,
.block-2,
.block-3,
.block-4 {
  margin-bottom: 30px;
}

.block-5 {
  background-color: #eee;
  padding: 50px 0;
}

.block-2__text {
  font-size: 14px;
  font-weight: 400;
}

.cond-text {
  display: flex;
}

.cond-text p {
  font-size: 10px;
  font-weight: 700;
}
</style>
