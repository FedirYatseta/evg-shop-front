<template>
  <div class="p-2 md:p-12 bg-white w-full flex flex-col h-full overflow-auto">
    <div class="text-xl font-bold border-b py-5">Ваше замовлення:</div>
    <div v-for="item in items" :key="item.id" class="flex py-10 border-b">
      <img :src="item.image" alt="product" class="w-16 h-16 rounded-md" />
      <div class="px-2 relative w-full flex flex-col">
        <p class="text-xl font-bold">{{ item.title }}</p>
        <icon-base class="absolute top-0 right-0 cursor-pointer" @click="deleteProduct(item.id)">
          <icon-del></icon-del>
        </icon-base>
        <div class="flex items-center">
          <my-button
            class="cursor-pointer w-8 h-8"
            :disabled="item.count === 0"
            @click="minusCount(item.id)"
          >
            <icon-base>
              <icon-minus></icon-minus>
            </icon-base>
          </my-button>
          <p class="px-2">{{ item.count }}</p>
          <my-button class="cursor-pointer w-8 h-8" @click="plusCount(item.id)">
            <icon-base>
              <icon-plus-circle></icon-plus-circle>
            </icon-base>
          </my-button>

          <p>{{ item.price }} грн</p>
        </div>
      </div>
    </div>
    <p class="text-right p-2 font-bold">Загальна сума: {{ total }} грн</p>
    <form>
      <div class="my-2">
        <label for="name" class="text-sm font-light">Ваше І'мя</label>
        <my-input name="name" id="name" class="border border-solid border-slate-950 w-full h-12" />
      </div>
      <div class="my-2">
        <label for="phone" class="text-sm font-light">Ваш телефон</label>
        <my-input
          name="phone"
          id="phone"
          class="border border-solid border-slate-950 w-full h-12"
        />
      </div>
      <div class="my-2 flex">
        <my-input
          name="phone"
          id="phone"
          type="checkbox"
          class="border border-solid border-slate-950 w-full h-8 w-8 mr-4"
        />
        <label for="phone" class="text-sm font-light">
          Я згоден(а) з Політикою конфіденційності та обробкою моїх персональних даних
        </label>
      </div>
      <my-button class="bg-slate-950 hover:bg-slate-800 text-white p-3">Замовити</my-button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconBase from '@/assets/IconBase.vue'
import IconPlusCircle from '@/assets/IconPlusCircle.vue'
import IconMinus from '@/assets/IconMinus.vue'
import IconDel from '@/assets/IconDel.vue'
import MyButton from '@/UI/MyButton.vue'
import MyInput from '@/UI/MyInput.vue'
export default defineComponent({
  components: {
    IconBase,
    IconDel,
    IconPlusCircle,
    IconMinus,
    MyButton,
    MyInput
  },
  name: 'BuyForm',
  setup() {
    const store = useStore()
    const total = computed(() => {
      // Збираємо загальну суму на основі count та price
      return store.state.product.buyProduct.reduce((acc, item) => {
        return acc + item.count * item.price
      }, 0)
    })
    return {
      items: computed(() => store.state.product.buyProduct),
      minusCount: (id) => store.commit('product/setDecrease', id),
      plusCount: (id) => store.commit('product/setIncrease', id),
      deleteProduct: (id) => store.commit('product/deleteProduct', id),
      total
    }
  }
})
</script>

<style scoped></style>
