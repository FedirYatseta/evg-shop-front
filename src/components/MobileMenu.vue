<template>
  <div
    :class="{ block: menuVisible, hidden: !menuVisible }"
    class="fixed w-full h-full inset-x-0 bottom-0 bg-white top-[94px] px-2 z-30"
  >
    <nav class="flex items-center justify-center mt-5">
      <ul class="flex flex-col items-center">
        <li v-for="item in pathConfig" :key="item.path" class="my-1">
          <router-link
            :to="item.path"
            @click="handleReviewsClick(item)"
            class="text-main text-xl"
            >{{ item.name }}</router-link
          >
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
    <p class="text-main text-center mt-auto">Доставка без передоплати</p>
    <div class="text-center w-full">
      <a class="text-main" href="tel:+380632563677">+380 63 256 3677</a>
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
import useScrollToElement from '@/hooks/useScrollToElement'
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
    const { handleReviewsClick } = useScrollToElement()

    return {
      pathConfig,
      handleReviewsClick
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
