<template>
  <div class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="social-icon">
          <icon-base iconColor="white" class="icon">
            <icon-viber />
          </icon-base>
          <icon-base iconColor="white" class="icon">
            <icon-telegram />
          </icon-base>
          <icon-base iconColor="white" class="icon">
            <icon-whats-app />
          </icon-base>
        </div>
        <ul class="list-footer">
          <li v-for="item in pathFooter" :key="item.path">
            <RouterLink :to="item.path">{{ item.name }}</RouterLink>
          </li>
        </ul>
        <div class="copyright_text">
          <span>
            <strong
              >© NOSKAR, 2023. Всі дизайни захищені стародавнім мольфарським закляттям на
              слабкістьпрутня.</strong
            >
          </span>
        </div>
        <picture>
          <img src="../image/payment-methods0.png" alt="pay-method" class="img-method" />
        </picture>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pathFooter } from '@/config/path'
import IconBase from '@/assets/IconBase.vue'
import IconViber from '@/assets/IconViber.vue'
import IconTelegram from '@/assets/IconTelegram.vue'
import IconWhatsApp from '@/assets/IconWhatsApp.vue'
export default defineComponent({
  components: {
    IconBase,
    IconViber,
    IconTelegram,
    IconWhatsApp
  },
  setup() {
    return {
      pathFooter
    }
  }
})
</script>

<style scoped>
.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.icon {
  margin: 0 10px;
}
.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.copyright_text {
  text-align: center;
  padding: 20px 0;
}
strong {
  font-weight: 700;
  font-size: 14px;
  color: #fff;
}
.img-method {
  display: inline-block;
  width: 100%;
  height: auto;
  object-fit: contain;
  max-width: 400px;
}

.footer {
  background-color: #000;
  padding: 50px 0;
}

.list-footer li {
  padding: 5px 10px;
  font-size: 15px;
  font-weight: 400;
}

.list-footer li a {
  color: #fff;
  text-decoration: none;
}
</style>
