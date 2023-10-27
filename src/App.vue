<script lang="ts">
import { defineComponent, ref } from 'vue'
import BurgerButton from '@/components/BurgerButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import MyFooter from '@/components/MyFooter.vue'
import DescTopMenu from '@/components/DescTopMenu.vue'

export default defineComponent({
  components: {
    MyFooter,
    BurgerButton,
    MobileMenu,
    DescTopMenu
  },
  setup() {
    const menuVisible = ref(false)

    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }

    return { menuVisible, toggleMenu }
  }
})
</script>

<template>
  <header>
    <div class="container">
      <div class="header__block">
        <h2 class="logo">Men`s bugs</h2>
        <BurgerButton @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <MobileMenu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
      </div>
      <div class="header__block-desc">
        <DescTopMenu />
      </div>
    </div>
  </header>
  <div class="pages">
    <router-view> </router-view>
  </div>
  <footer>
    <MyFooter />
  </footer>
</template>

<style scoped>
.pages {
  padding-top: 45px;
}

.logo {
  color: #fff;
}
</style>
