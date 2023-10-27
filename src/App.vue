<script lang="ts">
import { defineComponent, ref, watch, onBeforeMount } from 'vue'
import BurgerButton from '@/components/BurgerButton.vue'
import MobileMenu from '@/components/MobileMenu.vue'
import MyFooter from '@/components/MyFooter.vue'
import DescTopMenu from '@/components/DescTopMenu.vue'
import { useRouter } from 'vue-router'
import MyDialog from './UI/MyDialog.vue'
import { useStore, mapState } from 'vuex'
import DescribeProduct from './components/DescribeProduct.vue'
export default defineComponent({
  components: {
    MyFooter,
    BurgerButton,
    MobileMenu,
    DescTopMenu,
    MyDialog,
    DescribeProduct
  },

  setup() {
    const menuVisible = ref(false)
    const router = useRouter()
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    const store = useStore()

    onBeforeMount(async () => {
      await store.dispatch('product/fetchProduct') // 'product' - це ім'я вашого модулю Vuex
    })

    watch(
      () => router.currentRoute.value,
      () => {
        // Закрити меню при зміні маршруту
        menuVisible.value = false
      }
    )
    return { menuVisible, toggleMenu }
  },
  computed: {
    ...mapState({
      showModal: (state) => state.product.showModal
    })
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
    <my-dialog v-model:show="showModal"> <describe-product /></my-dialog>
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
