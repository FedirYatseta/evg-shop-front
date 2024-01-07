<template>
  <textarea
    :value="modelValue"
    @input="updateInput"
    class="px-15 w-full"
    :class="shadow ? 'shadow-4xl rounded-xl' : 'shadow-none'"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-textarea',
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
