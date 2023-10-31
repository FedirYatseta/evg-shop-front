<template>
  <button @click="actionBtn" class="w-full uppercase p-2 text-xs md:text-sm">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
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
