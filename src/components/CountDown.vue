<template>
  <div
    class="text-center flex items-center justify-between sm:justify-center sm:gap-3 rounded py-1 w-full"
  >
    <p
      :class="textColor ? 'text-brown-50' : 'text-white'"
      class="uppercase font-bold text-xs xl:text-2xl max-w-[180px] sm:max-w-fit"
    >
      Зимовий розпродаж до -43% До кінця акції:
    </p>
    <div class="grid grid-cols-4 gap-1 xl:gap-3 text-white">
      <div class="rounded-md p-1 md:py-0">
        <div class="bg-brown-50 text-sm font-bold xl:text-xl leading-6 px-1">
          {{ countdown.days }}
        </div>
        <div class="text-[6px] xl:text-xl text-brown-50 uppercase">days</div>
      </div>
      <div class="rounded-md p-1 md:py-0">
        <div class="bg-brown-50 text-sm font-bold xl:text-xl leading-6 px-1">
          {{ countdown.hours }}
        </div>
        <div class="text-[6px] xl:text-xl text-brown-50 uppercase">hrs</div>
      </div>
      <div class="rounded-md p-1 md:py-0">
        <div class="bg-brown-50 text-sm font-bold xl:text-xl leading-6 px-1">
          {{ countdown.minutes }}
        </div>
        <div class="text-[6px] xl:text-xl text-brown-50 uppercase">mins</div>
      </div>
      <div class="rounded-md p-1 md:py-0">
        <div class="bg-brown-50 text-sm font-bold xl:text-xl leading-6 px-1">
          {{ countdown.seconds }}
        </div>
        <div class="text-[6px] xl:text-xl text-brown-50 uppercase">secs</div>
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
  seconds: number
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
    const countdown = ref<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 })

    const startTimer = () => {
      if (!date.value) return // Перевірка наявності значення date перед запуском таймера

      const targetDate = new Date(date.value)
      //clearInterval(timerInterval) // Очищення попереднього інтервалу, якщо він вже існує

      setInterval(() => {
        const timeDiff = targetDate.getTime() - new Date().getTime()
        if (timeDiff <= 0) {
          // Якщо час вже минув, зупиняємо таймер
          //clearInterval(timerInterval)
          countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 }
          return
        }

        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24))
        const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000)

        countdown.value = {
          days: addLeadingZero(days),
          hours: addLeadingZero(hours),
          minutes: addLeadingZero(minutes),
          seconds: addLeadingZero(seconds)
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
