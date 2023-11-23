<template>
  <div
    class="fixed inset-0 flex items-center justify-center backdrop-blur z-50"
    v-if="show"
    @click.stop="hideDialog"
  >
    <div class="absolute inset-0 w-full h-full"></div>
    <div
      @click.stop
      class="relative h-full overflow-auto flex items-center justify-center w-full md:w-3/4 md:h-3/4 md:rounded-2xl"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixinBuy from '@/mixins/toggleMixinBuy'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-modal',
  mixins: [toggleMixinBuy]
})
</script>

<style scoped></style>
