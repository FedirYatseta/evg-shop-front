<template>
  <div class="w-full md:mt-2 py-10">
    <div class="container mx-auto pt-12 pb-24 lg:pb-32 lg:pt-0 relative">
      <div class="absolute top-5 w-full h-[51px] flex items-center justify-end px-3">
        <icon-close @click="router.go(-1)" :color="'#000'" class="cursor-pointer" />
      </div>
      <div v-if="!successOrder" class="p-4 md:p-12 bg-white w-full flex flex-col z-50">
        <div class="text-xl font-bold border-brown-50 py-5">Кошик замовлень</div>
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
                  <!-- <div class="grid grid-cols-3 gap-2 items-center justify-items-center">
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
                  </div> -->
                  <div class="flex flex-wrap items-center">
                    <span
                      class="before:content:'' before:left-0 before:right-0 before:h-[1px] before:top-[50%] before:absolute before:-rotate-6 before:bg-main relative inline-block mr-1"
                    >
                      <p class="text-black-200 text-base md:text-lg">{{ item.oldPrice }} UAH</p>
                    </span>

                    <p class="text-lg md:text-lg text-red">{{ item.price }} UAH</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form @submit.prevent @submit="onSubmit">
            <div class="my-2">
              <label for="name" class="text-sm font-light text-brown">Ім’я </label>
              <my-input
                placeholder="Ваше І'мя"
                v-bind="name"
                name="name"
                id="name"
                class="border border-solid border-brown h-8 md:h-10 px-2"
              />
              <p class="text-red">{{ errors.name }}</p>
            </div>
            <div class="my-2">
              <label for="phone" class="text-sm font-light text-brown">Телефон*</label>
              <my-input
                placeholder="+380 (99) 999 99 99"
                v-bind="phone"
                name="phone"
                id="phone"
                type="tel"
                v-mask="'+380 (##) ### ## ##'"
                class="border border-solid border-brown-50 h-8 md:h-10 px-2"
              />
              <p class="text-red">{{ errors.phone }}</p>
            </div>
            <div class="my-2 flex items-center relative">
              <Field
                name="policy"
                type="checkbox"
                id="policy"
                :value="true"
                class="border border-solid border-brown-50 h-10 w-10 lg:h-6 lg:w-6 mr-4"
              />

              <label
                for="policy"
                class="text-xs md:text-sm font-light"
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
      <div
        class="p-4 md:p-12 flex w-full flex-col items-center justify-center z-50 bg-white h-full"
        v-if="successOrder"
      >
        <div class="m-auto flex flex-col items-center justify-center">
          <div>
            <icon-bags />
          </div>
          <p class="p-2 md:p-12 text-3xl text-center uppercase">Дякуємо, що обрали саме нас!</p>
          <p class="text-xl text-black-300 text-center max-w-[652px]">
            Ваше замовлення було прийнято. В скорому часі наш менеджер зв’яжеться з вами для
            уточнень.
          </p>
        </div>
        <div class="border-t w-full border-brown-50 pb-5"></div>
        <div
          class="w-full max-w-[520px] h-[33px] bg-brown-50 flex items-center justify-center px-3"
          @click="closeModal"
        >
          <router-link to="/" class="text-sm text-white uppercase">На головгу</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useForm, Field } from 'vee-validate'
import * as yup from 'yup'
import { useRoute, useRouter } from 'vue-router'
import { event } from 'vue-gtag'

interface IOrder {
  name: String
  phone: String
  idShop: String
  order: [
    {
      count: Number
      id: String
      image: String
      oldPrice: Number
      price: Number
      size: String
      title: String
    }
  ]
}
export default defineComponent({
  name: 'order-form',
  components: {
    Field
  },

  setup() {
    const store = useStore()
    const successOrder = ref(false)
    const router = useRouter()
    const route = useRoute()
    const track = (id: IOrder) => {
      event('conversion', {
        event_category: 'order',
        event_label: 'Success',
        value: id
      })
    }
    onMounted(async () => {
      await store.commit('product/setProductToOrder', route.params.id)
    })
    const total = computed(() => {
      // Збираємо загальну суму на основі count та price
      return store.state.product.buyProduct.reduce((acc, item) => {
        return acc + item.price
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
        idShop: '',
        policy: false
      },
      validationSchema: schema
    })

    const onSubmit = handleSubmit((values) => {
      const newObj = {
        name: values.name,
        phone: values.phone,
        idShop: store.state.product.shop,
        order: [...store.state.product.buyProduct]
      }

      store.dispatch('product/createOrder', newObj)
      track(newObj.order[0].id)

      successOrder.value = true
    })

    const name = defineInputBinds('name')
    const phone = defineInputBinds('phone')
    const policy = defineInputBinds('policy')
    return {
      items: computed(() => store.state.product.buyProduct),
      minusCount: (id) => store.commit('product/setDecrease', id),
      plusCount: (id) => store.commit('product/setIncrease', id),
      deleteProduct: (id) => store.commit('product/deleteProduct', id),
      router,
      total,
      closeModal: () => store.commit('product/setShowBuyModal', false),
      onSubmit,
      name,
      phone,
      policy,
      errors,
      values,
      successOrder
    }
  }
})
</script>
<style scoped></style>
