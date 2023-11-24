<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
    <circle cx="21.5" cy="21.5" r="21.5" :fill="color || '#DA5D5D'" fill-opacity="0.89" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    color: {
      type: String
    }
  }
})
</script>
