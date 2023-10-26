<template>
  <div class="footer">
    <div class="container">
      <ul class="list-footer">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">Про нас</RouterLink></li>
        <li><RouterLink to="/catalog">Каталог</RouterLink></li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped>
.footer {
  margin-top: 20px;
  background-color: #000;
}
.list-footer {
  display: flex;
  justify-content: center;
  padding: 20px;
  list-style-type: none;
}

.list-footer li {
  padding: 0 10px;
}

.list-footer li a {
  color: #fff;
  text-decoration: none;
}
</style>
