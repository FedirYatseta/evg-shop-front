<template>
  <div class="nav-block">
    <div>Доставка без предоплати</div>
    <img src="../image/logo_new.jpg" alt="logo-desc" />
    <a href="tel:+380632563677">+380632563677</a>
  </div>
  <nav class="navigation-desc">
    <ul>
      <li v-for="item in pathConfig" :key="item.path">
        <router-link :to="item.path" class="nav-link-desc">{{ item.name }}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathConfig } from '@/config/path'
export default defineComponent({
  setup() {
    return { pathConfig }
  }
})
</script>

<style scoped>
.nav-block {
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-block a {
  font-weight: 700;
  text-decoration: none;
  color: #000;
  font-size: 22px;
}
.nav-block img {
  max-width: 400px;
  width: 100%;
  height: auto;
  object-fit: contain;
}
.navigation-desc ul {
  display: flex;
  list-style-type: none;
  align-items: center;
  justify-content: center;
}

.navigation-desc li {
  padding: 0 10px;
}

.navigation-desc a {
  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.5;
  text-transform: uppercase;
  color: #000;
}
</style>
