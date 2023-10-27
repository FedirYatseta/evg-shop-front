<template>
  <input :value="modelValue" @input="updateInput" />
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

<style scoped>
input {
  border: 1px solid rgb(58, 58, 58);
  padding: 10px;
}
</style>
