<template>
  <input :value="modelValue" @input="updateInput" class="px-15 h-10 w-full indent-2" />
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
