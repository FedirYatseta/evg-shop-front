<template>
  <div
    class="fixed w-full h-full inset-0 z-50 flex items-center justify-center backdrop-blur"
    v-if="show"
    @click.stop="hideDialog"
  >
    <div class="absolute inset-0 w-full h-full"></div>
    <div
      @click.stop
      class="relative h-full overflow-auto md:w-3/4 md:h-3/4 bg-white md:rounded-2xl"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/toggleMixin'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-dialog',
  mixins: [toggleMixin]
})
</script>

<style scoped></style>
