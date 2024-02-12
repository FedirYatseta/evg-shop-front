<template>
  <div
    class="text-center flex items-center justify-between sm:justify-center sm:gap-3 rounded py-1 lg:py-2 w-full"
  >
    <p
      :class="textColor ? 'text-black-50' : 'text-white'"
      class="uppercase font-bold text-xs10 text-start sm:text-center xl:text-lg w-3/4 sm:w-full"
    >
      Зимовий розпродаж до -43% знижки! <br />
      До кінця акції:
    </p>
    <div class="w-1/4">
      <vue3-flip-countdown
        v-if="time"
        countdownSize="0.9rem"
        labelSize=".4rem"
        mainColor="white"
        secondFlipColor="white"
        mainFlipBackgroundColor="#000"
        secondFlipBackgroundColor="#000"
        :labels="{ days: 'Дні', hours: 'Години', minutes: 'Хвилини', seconds: 'Секунди' }"
        :deadlineISO="time"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'count-down',
  props: {
    textColor: {
      type: Boolean
    },
    time: {
      type: String
    }
  }
})
</script>
