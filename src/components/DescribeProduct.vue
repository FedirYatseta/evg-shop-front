<template>
  <div class="element-describe">
    <div class="block-button">
      <div class="back-arrow">
        <div @click="setShowModal">Назад до каталогу</div>
      </div>
      <IconClose @click="setShowModal" />
    </div>
    <div class="describe-block">
      <div>
        <img :src="selectedProduct.imageSrc[0]" alt="product" />
      </div>
      <div class="describe-content">
        <div>{{ selectedProduct.title }}</div>
        <div>{{ selectedProduct.oldPrice + ' грн' }}</div>
        <div>{{ selectedProduct.price + ' грн' }}</div>
        <MyButton>Швидке замовлення</MyButton>
        <div>Опис</div>
        <div>{{ selectedProduct.describe }}</div>
        <div>Характеристики</div>
        <ul>
          <li>Матеріал: натуральна овеча шкіра</li>
        </ul>
        <div>Структура</div>
        <ul>
          <li>одне основне відділення на молнії;</li>
        </ul>
        <div>Обмін та повернення протягом 14 календарних днів</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MyButton from '@/UI/MyButton.vue'

import IconClose from '@/assets/IconClose.vue'
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }
    return {
      goBack,
      selectedProduct: computed(() => store.state.product.selectedProduct),
      setShowModal: () => store.commit('product/setShowModal')
    }
  },
  components: { MyButton, IconClose }
})
</script>

<style scoped>
.back-arrow ::before {
  content: '←\a0';
}

.back-arrow div {
  font-size: 12px;
  font-weight: 400;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
}
.describe-block {
  display: flex;
}
.element-describe {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.block-button {
  display: flex;
  justify-content: space-between;
}
</style>
