<template>
  <div class="grid">
    <div class="block-product" v-for="prod in product" :key="prod">
      <div>
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
        <MyButton style="background-color: #f7f7f7; color: #000; margin-bottom: 10px"
          >Детальніше</MyButton
        >
        <MyButton style="background-color: #000; color: #fff">Купити</MyButton>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import * as axiosServices from '@/services/api.ts'
import MyButton from '@/UI/MyButton.vue'
export default defineComponent({
  components: {
    MyButton
  },
  setup() {
    const product = ref<any>([])
    const SHOP_ID = import.meta.env.VITE_SHOP_ID
    const fetchProd = async () => {
      const response = await axiosServices.instance.get(`product/getall/${SHOP_ID}`)
      product.value = response.data.data
    }
    fetchProd()
    return {
      product
    }
  }
})
</script>

<style scoped>
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
