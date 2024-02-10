<template>
  <section class="w-full py-5 mb-4 sm:mb-16">
    <div class="container mx-auto">
      <div class="grid grid-col md:grid-cols-2 gap-4 px-3">
        <div class="max-h-[550px]">
          <img src="../../image/6.jpg" alt="bug" class="w-full h-full object-contain" />
        </div>
        <div>
          <h1
            class="text-center text-xs sm:text-xs uppercase xl:text-2xl font-bold text-brown-50 pt-4 sm:pt-12"
          >
            Зворотній звязок
          </h1>
          <p class="text-center text-brown-50 text-xs10 sm:text-xs8 font-bold uppercase">
            Тут ви можете лишити свої коментарі, пропозиції та побажання
          </p>
          <div class="my-5 w-full">
            <form
              @submit.prevent
              @submit="onSubmit"
              class="flex flex-col items-center w-full mx-auto max-w-[500px]"
            >
              <div class="my-2 w-full">
                <my-input
                  placeholder="Ваше І'мя"
                  v-bind="name"
                  name="name"
                  id="name"
                  class="bg-black-400 h-8 md:h-10 px-2 text-xs"
                />
                <p class="text-red">{{ errors.name }}</p>
              </div>
              <div class="my-2 w-full">
                <my-input
                  placeholder="+380 (99) 999 99 99"
                  v-bind="phone"
                  name="phone"
                  id="phone"
                  type="tel"
                  v-mask="'+380 (##) ### ## ##'"
                  class="bg-black-400 h-8 md:h-10 px-2 text-xs"
                />
                <p class="text-red">{{ errors.phone }}</p>
              </div>
              <div class="my-2 w-full">
                <my-textarea
                  placeholder="Введіть питання або повідомлення..."
                  v-bind="describe"
                  name="describe"
                  id="describe"
                  rows="4"
                  class="bg-black-400 px-2 text-xs p-2"
                />
                <p class="text-red">{{ errors.describe }}</p>
              </div>
              <my-button class="bg-main hover:bg-brown-100 uppercase text-white p-3 w-64"
                >Відправити</my-button
              >
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import * as yup from 'yup'
import { useForm } from 'vee-validate'
import { notify } from 'notiwind'

export default defineComponent({
  name: 'email-section',
  setup() {
    const store = useStore()
    const phoneNumberRegex = /^\+380 \(\d{2}\) \d{3} \d{2} \d{2}$/
    const schema = yup.object({
      name: yup.string().required("Вкажіть ваше І'мя"),
      phone: yup
        .string()
        .required('Вкажіть мобільний номер телефону')
        .matches(phoneNumberRegex, 'Не вірний формат мобільного номеру телефона'),
      describe: yup.string().required('Напишіть мінімум 3 слова')
    })
    const { handleSubmit, defineInputBinds, errors, values, resetForm } = useForm({
      initialValues: {
        name: '',
        phone: '',
        idShop: '',
        describe: ''
      },
      validationSchema: schema
    })
    const onSubmit = handleSubmit(async (values) => {
      const newObj = {
        name: values.name,
        phone: values.phone,
        idShop: store.state.product.shop,
        describe: values.describe
      }

      await store.dispatch('product/createMessage', newObj)
      resetForm()
      notify(
        {
          group: 'foo',
          title: 'Ваше повідомлення відправлено',
          text: 'Ми обовяхково його розглянумо'
        },
        4000
      )
    })

    const name = defineInputBinds('name')
    const phone = defineInputBinds('phone')
    const describe = defineInputBinds('describe')

    return {
      onSubmit,
      errors,
      name,
      phone,
      describe,
      values
    }
  }
})
</script>

<style scoped></style>
