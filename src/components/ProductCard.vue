<template>
  <div class="grid">
    <div class="block-product" v-for="prod in products" :key="prod.title">
      <div class="product-content">
        <div class="image-element">
          <img :src="prod.imageSrc[0]" />
        </div>
        <p class="title">
          {{ prod.title }}
        </p>
        <p class="size">
          Розмір <span> {{ prod.size + ' см' }}</span>
        </p>
        <p class="old-price">{{ prod.oldPrice }}</p>
        <p class="price">{{ prod.price }} грн</p>
      </div>
      <div>
        <MyButton
          @click="passId(prod._id)"
          style="background-color: #f7f7f7; color: #000; margin-bottom: 10px"
          >Детальніше</MyButton
        >
        <MyButton style="background-color: #000; color: #fff">Купити</MyButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '@/UI/MyButton.vue'

interface Product {
  _id: string
  id: string
  title: string
  size: number
  oldPrice: number
  price: number
  imageSrc: string[]
}
import { useStore } from 'vuex'
export default defineComponent({
  components: {
    MyButton
  },
  props: {
    products: {
      type: Array as () => Product[],
      required: true
    }
  },
  setup() {
    const store = useStore()

    return {
      passId: (id: string) => store.dispatch('product/getProductId', id)
    }
  }
})
</script>

<style scoped>
.product-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.block-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.image-element img {
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 100px;
}

.title {
  font-weight: 600;
  font-size: 20px;
  color: #000;
}

.size {
  font-weight: 500;
  font-size: 15px;
}

.size span {
  font-weight: 300;
  font-size: 15px;
}

.old-price {
  color: red;
  font-size: 16px;
  text-decoration: line-through;
}

.price {
  font-weight: 400;
  font-size: 26px;
}
</style>
