<template>
  <select v-model="localSelected" @change="changeOption" class="p-2 h-[40px] w-full">
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
  name: 'my-select',
  emits: ['update:selected'],
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
    const localSelected = ref(props.selected)

    const changeOption = (event: any) => {
      console.log('event', event)

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

<style scoped></style>
