<template>
  <input
    :value="modelValue"
    @input="updateInput"
    class="w-full h-full px-15"
    :class="shadow ? 'shadow-4xl rounded-xl' : 'shadow-none'"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-input',
  emits: ['update:modelValue'],
  props: {
    modelValue: [String, Number],
    shadow: Boolean
  },
  methods: {
    updateInput(event: any) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
})
</script>

<style scoped></style>
