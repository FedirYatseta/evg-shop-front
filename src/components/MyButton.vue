<template>
  <button @click="actionBtn">
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

<style scoped>
button {
  width: 100%;
  height: 100%;
  text-transform: uppercase;
  padding: 10px 5px;
  border: 1px solid transparent;
  font-weight: 700;
  font-size: 14px;
  max-height: 45px;
}

button:hover {
  cursor: pointer;
}
</style>
