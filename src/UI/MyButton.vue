<template>
  <button @click="actionBtn" class="w-full uppercase text-sm">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'my-button',
  emits: ['toggle-menu'],
  setup() {
    return {}
  },
  methods: {
    actionBtn() {
      this.$emit('toggle-menu')
    }
  }
})
</script>

<style scoped></style>
