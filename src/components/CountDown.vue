<template>
  <div class="text-center flex flex-col items-center justify-center bg-brown-50 rounded p-3">
    <p class="uppercase text-white">До кінця Акції</p>
    <div class="grid grid-cols-3 gap-1 text-white">
      <div class="bg-brown-100 rounded-md p-2">
        <div class="text-md font-bold leading-6">{{ countdown.days }}</div>
        <div class="text-xs md:text-sm leading-4">дн</div>
      </div>
      <div class="bg-brown-100 rounded-md p-2">
        <div class="text-md font-bold leading-6">{{ countdown.hours }}</div>
        <div class="text-xs md:text-sm leading-4">год.</div>
      </div>
      <div class="bg-brown-100 rounded-md p-2">
        <div class="text-md font-bold leading-6">{{ countdown.minutes }}</div>
        <div class="text-xs md:text-sm leading-4">хв.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
interface Countdown {
  days: number
  hours: number
  minutes: number
}
export default defineComponent({
  setup() {
    const targetDate = new Date('2023-12-15T23:59:59')
    const currentTime = ref(new Date())
    const countdown = ref<Countdown>({ days: 0, hours: 0, minutes: 0 })

    setInterval(() => {
      const timeDiff = targetDate.getTime() - currentTime.value.getTime()
      const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

      countdown.value = {
        days: addLeadingZero(days),
        hours: addLeadingZero(hours),
        minutes: addLeadingZero(minutes)
      }
    }, 1000)

    const addLeadingZero = (number) => {
      return number < 10 ? '0' + number : number.toString()
    }

    const updateCurrentTime = () => {
      currentTime.value = new Date()
    }

    onMounted(() => {
      setInterval(updateCurrentTime, 1000)
    })

    return { countdown }
  }
})
</script>

<style scoped></style>
