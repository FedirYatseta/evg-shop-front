<template>
  <div class="text-center flex flex-col items-center justify-center bg-brown-50 rounded p-3">
    <p
      :class="textColor ? 'text-brown-50' : 'text-white'"
      class="uppercase font-bold lg:text-xl xl:text-2xl"
    >
      До кінця Акції
    </p>
    <div class="grid grid-cols-3 gap-2 xl:gap-3 text-white">
      <div class="bg-brown-100 rounded-md p-2 md:py-1">
        <div class="text-md font-bold xl:text-xl leading-6">{{ countdown.days }}</div>
        <div class="text-xs md:text-md xl:text-xl leading-4">дн.</div>
      </div>
      <div class="bg-brown-100 rounded-md p-2 md:py-1">
        <div class="text-md font-bold xl:text-xl leading-6">{{ countdown.hours }}</div>
        <div class="text-xs md:text-md xl:text-xl leading-4">год.</div>
      </div>
      <div class="bg-brown-100 rounded-md p-2 md:py-1">
        <div class="text-md font-bold xl:text-xl leading-6">{{ countdown.minutes }}</div>
        <div class="text-xs md:text-md xl:text-xl leading-4">хв.</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'

interface Countdown {
  days: number
  hours: number
  minutes: number
}
export default defineComponent({
  name: 'count-down',
  props: {
    textColor: {
      type: Boolean
    },
    saleTime: {
      type: String
    }
  },
  setup(props) {
    const date = ref(props.saleTime)

    const currentTime = ref(new Date())
    const countdown = ref<Countdown>({ days: 0, hours: 0, minutes: 0 })

    const startTimer = () => {
      if (!date.value) return // Перевірка наявності значення date перед запуском таймера

      const targetDate = new Date(date.value)
      //clearInterval(timerInterval) // Очищення попереднього інтервалу, якщо він вже існує

      setInterval(() => {
        const timeDiff = targetDate.getTime() - new Date().getTime()
        if (timeDiff <= 0) {
          // Якщо час вже минув, зупиняємо таймер
          //clearInterval(timerInterval)
          countdown.value = { days: 0, hours: 0, minutes: 0 }
          return
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

        countdown.value = {
          days: addLeadingZero(days),
          hours: addLeadingZero(hours),
          minutes: addLeadingZero(minutes)
        }
      }, 1000)
    }

    watch(
      () => props.saleTime,
      (val) => {
        date.value = val

        startTimer() // Почати таймер при зміні значення дати
      }
    )
    const addLeadingZero = (number) => {
      return number < 10 ? '0' + number : number.toString()
    }

    const updateCurrentTime = () => {
      currentTime.value = new Date()
    }
    startTimer()
    onMounted(() => {
      setInterval(updateCurrentTime, 1000)
    })

    return { countdown }
  }
})
</script>
