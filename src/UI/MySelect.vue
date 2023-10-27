<template>
  <select v-model="localSelected">
    <option disabled value="">Вибрати варіант</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
type Option = {
  value: string
  name: string
}
export default defineComponent({
  name: 'MySelect', // Перейменовано на "MySelect"
  emits: ['update:selected'], // Перейменовано на "update:selected"
  props: {
    selected: {
      type: String
    },
    options: {
      type: Array as () => Option[],
      default: () => []
    }
  },
  setup(props, { emit }) {
    // Використано props і emit
    const localSelected = ref(props.selected)

    const changeOption = (event: any) => {
      localSelected.value = event.target.value
      emit('update:selected', localSelected.value)
    }

    return {
      localSelected,
      changeOption
    }
  }
})
</script>

<style scoped>
select {
  width: 100%;
  border: 1px solid teal;
  padding: 10px;
}
</style>
