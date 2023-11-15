<template>
  <div class="p-4 md:p-12 bg-white w-full flex flex-col h-full overflow-auto z-50">
    <div class="text-xl font-bold border-brown-50 py-5">Корзина замовлень</div>
    <div class="absolute right-4 top-5">
      <IconClose @click="closeModal" />
    </div>
    <div class="grid grid-col md:grid-cols-2 gap-1 md:gap-8">
      <div class="border-t">
        <div v-for="item in items" :key="item.id" class="flex py-10 border-b border-brown-50">
          <img :src="item.image" alt="product" class="w-16 h-16 rounded-md" />
          <div class="px-2 relative w-full flex flex-col">
            <div>
              <p class="text-xl font-bold">{{ item.title }}</p>
              <p class="text-lg">Розмір {{ item.size }}</p>
            </div>
            <icon-base
              class="absolute top-0 right-0 cursor-pointer"
              @click="deleteProduct(item.id)"
            >
              <icon-del></icon-del>
            </icon-base>
            <div class="flex items-center">
              <div class="grid grid-cols-3 gap-2 items-center justify-items-center">
                <my-button
                  class="cursor-pointer w-6 h-6 md:w-7 md:h-7 p-0 bg-brown-100 text-white text-xl text-center rounded-full"
                  :disabled="item.count === 0"
                  @click="minusCount(item.id)"
                >
                  <div class="leading-none">-</div>
                </my-button>
                <p class="px-2">{{ item.count }}</p>
                <my-button
                  class="cursor-pointer w-6 h-6 md:w-7 md:h-7 p-0 bg-brown-100 text-white text-xl text-center rounded-full leading-4"
                  @click="plusCount(item.id)"
                >
                  <div class="leading-none">+</div>
                </my-button>
              </div>
              <div class="flex px-2 flex-wrap">
                <span
                  class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block mr-1"
                >
                  <p class="text-black-200 text-sm md:text-lg">{{ item.oldPrice }} UAH</p>
                </span>

                <p class="text-sm md:text-lg text-red">{{ item.price }} UAH</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <form @submit.prevent @submit="onSubmit">
        <div class="my-2">
          <label for="name" class="text-sm font-light text-brown">Ім’я та фамілія*</label>
          <my-input
            v-bind="name"
            name="name"
            id="name"
            class="border border-solid border-brown w-full h-10"
          />
          <p class="text-red">{{ errors.name }}</p>
        </div>
        <div class="my-2">
          <label for="phone" class="text-sm font-light text-brown">Телефон*</label>
          <my-input
            v-bind="phone"
            name="phone"
            id="phone"
            class="border border-solid border-brown-50 w-full h-10"
          />
          <p class="text-red">{{ errors.phone }}</p>
        </div>
        <div class="my-2 flex">
          <Field
            name="policy"
            type="checkbox"
            id="policy"
            :value="true"
            class="border border-solid border-brown-50 h-8 w-8 mr-4"
          />
          <p class="text-red">{{ errors.policy }}</p>
          <label
            for="phone"
            class="text-sm font-light"
            :class="errors.policy ? 'text-red' : 'text-brown-50'"
          >
            Я згоден(а) з Політикою конфіденційності та обробкою моїх персональних даних
          </label>
        </div>
        <p class="text-start text-lg py-2 border-t border-brown-50">Всього: {{ total }} UAH</p>
        <my-button class="bg-brown-50 hover:bg-brown-100 uppercase text-white p-3"
          >Замовити</my-button
        >
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import IconBase from '@/assets/IconBase.vue'

import IconDel from '@/assets/IconDel.vue'
import MyButton from '@/UI/MyButton.vue'
import MyInput from '@/UI/MyInput.vue'
import IconClose from '@/assets/IconClose.vue'
import { useForm, Field } from 'vee-validate'
import * as yup from 'yup'
export default defineComponent({
  components: {
    IconBase,
    IconDel,

    MyButton,
    MyInput,
    IconClose,
    Field
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
    const schema = yup.object({
      name: yup.string().required("Вкажіть ваше І'мя"),
      phone: yup.string().required('Вкажіть мобільний номер телефону'),
      policy: yup.boolean().required().isTrue(' ')
    })
    const { handleSubmit, defineInputBinds, errors, values } = useForm({
      initialValues: {
        name: '',
        phone: '',
        policy: false
      },
      validationSchema: schema
    })

    const onSubmit = handleSubmit((values) => {
      const newObj = {
        name: values.name,
        phone: values.phone,
        order: [...store.state.product.buyProduct]
      }
      console.log(newObj)
      store.dispatch('product/createOrder', newObj)
      store.commit('product/setShowBuyModal', false)
    })

    const name = defineInputBinds('name')
    const phone = defineInputBinds('phone')
    const policy = defineInputBinds('policy')
    return {
      items: computed(() => store.state.product.buyProduct),
      minusCount: (id) => store.commit('product/setDecrease', id),
      plusCount: (id) => store.commit('product/setIncrease', id),
      deleteProduct: (id) => store.commit('product/deleteProduct', id),
      total,
      closeModal: () => store.commit('product/setShowBuyModal', false),
      onSubmit,
      name,
      phone,
      policy,
      errors,
      values
    }
  }
})
</script>

<style scoped></style>
