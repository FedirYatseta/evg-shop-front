<template>
  <div class="w-full relative">
    <input :value="modelValue" @input="updateInput" class="w-full" />
    <div class="absolute top-[25%] right-[8px]"><slot /></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-input',
  emits: ['update:modelValue'],
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(event: any) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style scoped></style>
