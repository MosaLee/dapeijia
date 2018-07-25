<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        搭配家
      </h1>
      <h2 class="subtitle">
        一个全新的购物体验平台
      </h2>
      <div class="links">
        <router-link to="/login"
          class="button--green">登录</router-link>
        <a
          href="###"
          class="button--grey">注册</a>
      </div>
    </div>
  </section>
</template>

<script>
//import Headers from '~/components/header.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>

</style>

