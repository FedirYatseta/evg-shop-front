<template>
  <div class="mobile-menu" :class="{ visible: menuVisible }">
    <!-- <div class="btn-block">
      <IconClose @click="closeMenu" class="closeIcon"> </IconClose>
    </div> -->
    <div class="mobile-menu__image">
      <img src="../image/logo_2.png" alt="logo" />
    </div>
    <nav class="navigation">
      <ul>
        <li v-for="item in pathConfig" :key="item.path">
          <router-link :to="item.path" class="nav-link">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
    <div class="block-social">
      <router-link to="#" class="social-icon">
        <icon-base>
          <icon-face-book />
        </icon-base>
      </router-link>
      <router-link to="#" class="social-icon">
        <icon-base>
          <icon-inst />
        </icon-base>
      </router-link>
      <router-link to="#" class="social-icon">
        <icon-base>
          <icon-teleg />
        </icon-base>
      </router-link>
    </div>
    <p class="delivered">Доставка без передоплати</p>
    <a class="tel" href="tel:+380632563677">+380 63 256 3677</a>
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

<style scoped>
.social-icon {
  padding: 0 10px;
}
.block-social {
  padding-top: 20px;
}
.mobile-menu__image img {
  width: 100%;
  height: auto;
  object-fit: cover;
  padding-top: 20px;
}
.mobile-menu {
  display: none;
}

.mobile-menu.visible {
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 187, 153);
  position: fixed;
  top: 45px;
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
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.navigation li {
  padding: 5px 0;
}

.nav-link {
  font-size: 26px;
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.navigation ul {
  list-style-type: none;
  text-align: center;
  width: 100%;
}

.link {
  color: white;
}

.tel {
  font-weight: 700;
  font-size: 22px;
  color: #fff;
  text-decoration: none;
}

.delivered {
  font-size: 13px;
  font-weight: 300;
  padding: 20px 0;
  color: white;
}
</style>
