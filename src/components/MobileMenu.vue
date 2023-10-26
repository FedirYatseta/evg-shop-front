<template>
  <div class="mobile-menu" :class="{ visible: menuVisible }">
    <div class="btn-block">
      <IconClose @click="closeMenu" class="closeIcon"> </IconClose>
    </div>
    <div class="mobile-menu__image">
      <img src="../image/logo_new.jpg" alt="logo" />
    </div>
    <nav class="navigation">
      <RouterLink to="/">Головна</RouterLink>
      <RouterLink to="/">Каталог сумок</RouterLink>
      <RouterLink to="/">Доставка та оплата</RouterLink>
      <RouterLink to="/">Гарантія</RouterLink>
      <RouterLink to="/about">Контакти</RouterLink>
    </nav>
    <p class="delivered">Доставка без передоплати</p>
    <a class="tel" href="tel:+380632563677">+380 63 256 3677</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IconClose from '@/assets/IconClose.vue'
export default defineComponent({
  components: {
    IconClose
  },
  props: {
    menuVisible: Boolean // Приймаємо проп "menuVisible"
  },
  emits: ['toggle-menu'],
  methods: {
    closeMenu() {
      this.$emit('toggle-menu')
    }
  }
})
</script>
<style scoped>
.mobile-menu__image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.mobile-menu {
  display: none;
}

.mobile-menu.visible {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease;
  padding: 10px;
  z-index: 99;
  align-items: center;
}

.btn-block {
  display: flex;
  justify-content: end;
  width: 100%;
  cursor: pointer;
}
.navigation {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.navigation a {
  font-size: 26px;
  text-decoration: none;
}
.link {
  color: white;
}

.tel {
  font-weight: 700;
  font-size: 22px;
  color: #000;
  text-decoration: none;
}

.delivered {
  font-size: 13px;
  font-weight: 300;
  padding: 20px 0;
}
</style>
