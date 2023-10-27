<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import toggleMixin from '@/mixins/toggleMixin'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'my-dialog',
  mixins: [toggleMixin]
})
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: white;
  position: fixed;
  display: flex;
  padding: 10px;
  z-index: 999;
}

.dialog__content {
  display: flex;
  margin: auto;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  padding: 10px;
}
</style>
