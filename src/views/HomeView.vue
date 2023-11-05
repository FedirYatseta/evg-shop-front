<template>
  <main>
    <div class="w-full">
      <div class="container mx-auto relative">
        <div>
          <img
            src="../image/photo_1.jpg"
            alt="Organization Logo"
            class="w-full h-[400px] object-cover md:h-auto max-w-[800px]"
          />
        </div>
        <div class="px-2 absolute top-20">
          <h3 class="text-slate-950 font-bold text-lg md:text-4xl">
            Шкіряні чоловічі сумки які підчеркнуть твій стиль
          </h3>
        </div>
        <div class="px-2 absolute top-40">
          <p class="font-light text-slate-950 md:text-2xl">До -35% на всі позиції до 01.01.24</p>
        </div>
        <div class="px-2 absolute bottom-10 md:right-10 grid grid-col md:grid-cols-2 gap-2">
          <router-link to="/category" class="p-3 bg-slate-200 uppercase w-max">
            Категорії</router-link
          >
          <router-link to="/product" class="p-3 bg-slate-950 text-white uppercase w-max">
            Весь каталог</router-link
          >
        </div>
      </div>
    </div>
    <div class="w-full py-5">
      <div class="container mx-auto px-5">
        <div
          class="w-full block relative text-center after:content-[''] after:absolute after:top-1/2 after:left-0 after:right-0 after:h-[1px] after:bg-slate-950"
        >
          <a class="inline-block relative z-20 px-4 py-2 bg-slate-950 text-white uppercase">
            Шкіряні сумки
          </a>
        </div>
        <p class="text-center text-3xl font-light py-5 my-5">
          Наші сумки, натуральна шкіра, якісна фурнітура, топ топскій купуй і не пожалкуєш
        </p>
        <div class="border-t border-slate-950"></div>
      </div>
    </div>
    <div class="w-full py-10">
      <div class="container mx-auto px-4">
        <p class="text-center font-bold uppercase text-3xl">Про якість наших сумок</p>
        <p class="text-center font-light text-xl">
          або "Чому найкраще купити кігурумі саме у нас?"
        </p>
        <div
          class="flex py-3 items-center justify-center"
          v-for="val in conf[0]?.quality"
          :key="val.title"
        >
          <div>
            <icon-base width="45" height="45">
              <icon-done />
            </icon-base>
          </div>
          <div class="pl-4">
            <p class="font-bold text-lg">{{ val.title }}</p>
            <p class="font-light text-xs">{{ val.description }}</p>
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
        <div class="inline-block w-full text-3xl text-center font-bold mb-10">
          Сумки з натуральної шкіри
        </div>
        <div>
          <div class="px-2 w-full text-center pb-3">
            <router-link
              class="px-2 inline-block md:text-xl"
              v-for="path in dataItems.pathConfigNew"
              :key="path.name"
              :to="path.path"
              >{{ path.name }}</router-link
            >
          </div>
        </div>

        <product-card :products="product" />
      </div>
    </div>

    <div class="w-full bg-stone-200 py-5">
      <div class="container mx-auto max-w-[760px]">
        <div v-for="(question, index) in questions" :key="index" class="w-full divide-y px-3">
          <div class="bg-stone-100 w-full">
            <button
              :class="['flex w-full  justify-between p-3  ', { Active: question.isExpanded }]"
              @click="() => handleAccordion(index)"
            >
              <p class="section-title">{{ question.title }}</p>
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
            <p class="p-3 bg-stone-100 w-full">
              {{ question.description }}
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
import { defineComponent, ref, watchEffect, reactive, computed } from 'vue'
import cond from '@/config/condition.json'
import quality from '@/config/quality.json'
import { Collapse } from 'vue-collapsed'
import IconPlus from '@/assets/IconPlus.vue'
import IconBase from '@/assets/IconBase.vue'
import BasicCarousel from '@/components/BasicCarousel.vue'
import ProductCard from '@/components/ProductCard.vue'
import { pathConfigNew } from '@/config/path'
import { useStore } from 'vuex'
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
    const store = useStore()
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
      conf: computed(() => store.state.product.confShop)
    }
  }
})
</script>

<style></style>
