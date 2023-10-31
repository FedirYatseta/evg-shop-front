<template>
  <div class="p-2">
    <div class="text-xl font-bold border-b py-5">Ваше замовлення:</div>
    <div v-for="item in items" :key="item.id" class="flex py-10 border-b">
      <img :src="item.image" alt="product" class="w-16 h-16 rounded-md" />
      <div class="px-2 relative w-full flex flex-col">
        <p class="text-xl font-bold">{{ item.title }}</p>
        <icon-base class="absolute top-0 right-0 cursor-pointer">
          <icon-del></icon-del>
        </icon-base>
        <div class="flex">
          <icon-base class="cursor-pointer" @click="minusCount(item.id)">
            <icon-minus></icon-minus>
          </icon-base>
          <p class="px-2">{{ item.count }}</p>
          <icon-base class="cursor-pointer" @click="plusCount(item.id)">
            <icon-plus-circle></icon-plus-circle>
          </icon-base>
          <p>{{ item.price }} грн</p>
        </div>
      </div>
    </div>
    <p class="text-right p-2 font-bold">Загальна сума: {{ total }} грн</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconBase from '@/assets/IconBase.vue'
import IconPlusCircle from '@/assets/IconPlusCircle.vue'
import IconMinus from '@/assets/IconMinus.vue'
import IconDel from '@/assets/IconDel.vue'
export default defineComponent({
  components: {
    IconBase,
    IconDel,
    IconPlusCircle,
    IconMinus
  },
  name: 'BuyForm',
  setup() {
    const store = useStore()
    const total = ref(0)
    return {
      items: computed(() => store.state.product.buyProduct),
      minusCount: (id) => store.commit('product/decrease', id),
      plusCount: (id) => store.commit('product/increase', id),
      total
    }
  }
})
</script>

<style scoped></style>
