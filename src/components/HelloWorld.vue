<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      <a href="tel:+4733378901">+4733378901</a>
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
}

h3 {
  font-size: 1.2rem;
}

.greetings {
  display: flex;
}
.greetings h3 {
  display: none;
}

.green {
  display: none;
}
@media only screen and (min-width: 768px) {
  .green {
    display: flex;
  }
}
</style>
