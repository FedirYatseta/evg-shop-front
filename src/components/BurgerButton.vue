<template>
  <div class="burger-button" @click="toggleMenu" :class="{ active: menuVisible }">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'burger-btn',
  props: {
    menuVisible: Boolean // Приймаємо проп "menuVisible"
  },
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

.burger-button.active .bar:first-child {
  transform: rotate(45deg) translate(5px, 5px);
}

.burger-button.active .bar:nth-child(2) {
  opacity: 0;
}

.burger-button.active .bar:last-child {
  transform: rotate(-45deg) translate(5px, -5px);
}
</style>
