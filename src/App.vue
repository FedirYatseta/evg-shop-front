<script lang="ts">
import { defineComponent, ref } from 'vue'
//import HelloWorld from './components/HelloWorld.vue'
import BurgerButton from './components/BurgerButton.vue'
import MobileMenu from './components/MobileMenu.vue'
import MyFooter from './components/MyFooter.vue'

export default defineComponent({
  components: {
    MyFooter,
    BurgerButton,
    MobileMenu
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
        <!-- <HelloWorld msg="доставка без предоплати" /> -->
        <h2 class="logo">Men`s bugs</h2>
        <BurgerButton @toggle-menu="toggleMenu" :menuVisible="menuVisible" />
        <MobileMenu :menuVisible="menuVisible" @toggle-menu="toggleMenu" />
      </div>
    </div>
  </header>
  <div class="pages">
    <RouterView />
  </div>
  <footer>
    <MyFooter />
  </footer>
</template>

<style scoped>
.pages {
  padding-top: 45px;
}
header {
  line-height: 1.5;
  background-color: #000;
  position: fixed;
  width: 100%;
  z-index: 10;
}

.logo {
  color: #fff;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}
.header__block {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
