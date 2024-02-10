<template>
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
            <img src="../../image/image3.jpg" alt="bug" class="w-full h-auto object-contain" />
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
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watchEffect } from 'vue'
import { Collapse } from 'vue-collapsed'
import { useStore } from 'vuex'
export default defineComponent({
  name: 'question-section',
  components: {
    Collapse
  },
  setup() {
    const questions = reactive<any>([]) // Початково порожній масив для питань
    const rotation = ref(45)
    const store = useStore()
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
    return {
      questions,
      handleAccordion,
      processTextWithEmojis,
      rotation
    }
  }
  // ваші props, методи, обчислення та дані тут
})
</script>

<style></style>
