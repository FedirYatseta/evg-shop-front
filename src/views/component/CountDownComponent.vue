<template>
  <section class="w-full bg-black-400">
    <div class="container mx-auto">
      <div class="flex w-full">
        <count-down :textColor="true" :time="time" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'count-down-component',
  props: {
    textColor: Boolean,
    time: Number
  }
}
</script>

<style></style>
