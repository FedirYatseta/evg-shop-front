<template>
  <div
    :class="{ block: menuVisible, hidden: !menuVisible }"
    class="fixed bg-[rgb(255,187,153)] w-full h-full inset-x-0 bottom-0 top-11 px-2 z-30"
  >
    <div class="p-2 mt-5">
      <img src="../image/logo_2.png" alt="logo" />
    </div>
    <nav class="flex items-center justify-center mt-5">
      <ul class="flex flex-col items-center">
        <li v-for="item in pathConfig" :key="item.path" class="my-1">
          <router-link :to="item.path" class="text-white">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex w-full items-center justify-center mt-8">
      <router-link to="#" class="mx-2">
        <icon-base>
          <icon-face-book />
        </icon-base>
      </router-link>
      <router-link to="#" class="mx-2">
        <icon-base>
          <icon-inst />
        </icon-base>
      </router-link>
      <router-link to="#" class="mx-2">
        <icon-base>
          <icon-teleg />
        </icon-base>
      </router-link>
    </div>
    <p class="text-white text-center mt-auto">Доставка без передоплати</p>
    <div class="text-center w-full">
      <a class="text-white" href="tel:+380632563677">+380 63 256 3677</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconBase from '@/assets/IconBase.vue'
import IconFaceBook from '@/assets/IconFaceBook.vue'
import IconInst from '@/assets/IconInst.vue'
import IconTeleg from '@/assets/IconTeleg.vue'
import { pathConfig } from '@/config/path'
export default defineComponent({
  components: {
    IconBase,
    IconFaceBook,
    IconInst,
    IconTeleg
  },
  props: {
    menuVisible: Boolean // Приймаємо проп "menuVisible"
  },
  setup() {
    return {
      pathConfig
    }
  },
  emits: ['toggle-menu'],
  methods: {
    closeMenu() {
      this.$emit('toggle-menu')
    }
  }
})
</script>

<style scoped></style>
