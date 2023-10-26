<template>
  <div class="burger-button" @click="toggleMenu">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  emits: ['toggle-menu'],
  methods: {
    toggleMenu() {
      this.$emit('toggle-menu')
    }
  }
})
</script>

<style scoped>
.burger-button {
  cursor: pointer;
  padding: 10px;
}

.bar {
  width: 25px;
  height: 3px;
  background-color: #e2e2e2;
  margin: 4px 0;
  transition: 0.4s;
}
</style>
