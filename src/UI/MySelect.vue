<template>
  <select
    v-model="localSelected"
    @change="changeOption"
    class="h-10 px-2 minimal"
    aria-label="Фільтр"
  >
    <option selected value="">Сортування за замовчуванням</option>
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
select.minimal {
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 20px) calc(1em + 2px),
    calc(100% - 15px) calc(1em + 2px),
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  background-color: #fff;
}

select.minimal:focus {
  background-image: linear-gradient(45deg, rgb(0, 0, 0) 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, rgb(30, 30, 30) 50%),
    linear-gradient(to right, #ccc, #ccc);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    calc(100% - 2.5em) 0.5em;
  background-size:
    5px 5px,
    5px 5px,
    1px 1.5em;
  background-repeat: no-repeat;
  outline: 0;
}

select:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #000;
}

select.minimal {
  padding-right: 3rem; /* Змініть це значення на ваш розмір */
}
</style>
