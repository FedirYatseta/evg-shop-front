<template>
  <div class="w-full bg-gray-950 p-5">
    <div class="container mx-auto">
      <div class="grid grid-col gap-4 my-10">
        <div class="flex w-full items-center justify-center">
          <icon-base iconColor="white" class="mx-2">
            <icon-viber />
          </icon-base>
          <icon-base iconColor="white" class="mx-2">
            <icon-telegram />
          </icon-base>
          <icon-base iconColor="white" class="mx-2">
            <icon-whats-app />
          </icon-base>
        </div>
        <ul class="grid grid-col md:grid-flow-col gap-1 text-center justify-center">
          <li v-for="item in pathFooter" :key="item.path" class="px-2">
            <RouterLink :to="item.path" class="text-white text-xs">{{ item.name }}</RouterLink>
          </li>
        </ul>
        <div class="text-white text-center my-5 text-xs">
          <span>
            <strong
              >© NOSKAR, 2023. Всі дизайни захищені стародавнім мольфарським закляттям на
              слабкістьпрутня.</strong
            >
          </span>
        </div>
        <picture class="block mx-auto">
          <img src="../image/payment-methods0.png" alt="pay-method" class="img-method" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathFooter } from '@/config/path'
import IconBase from '@/assets/IconBase.vue'
import IconViber from '@/assets/IconViber.vue'
import IconTelegram from '@/assets/IconTelegram.vue'
import IconWhatsApp from '@/assets/IconWhatsApp.vue'
export default defineComponent({
  components: {
    IconBase,
    IconViber,
    IconTelegram,
    IconWhatsApp
  },
  setup() {
    return {
      pathFooter
    }
  }
})
</script>

<style scoped></style>
