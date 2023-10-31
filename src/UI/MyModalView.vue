<template>
  <div class="fixed w-full h-full inset-0 bg-white" v-if="show" @click.stop="hideDialog">
    <div class="absolute inset-0 w-full h-full"></div>
    <div @click.stop class="relative h-full overflow-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/toggleMixin'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-modal',
  mixins: [toggleMixin]
})
</script>

<style scoped></style>
