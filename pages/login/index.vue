<template>
  <div id="list">
    <keep-alive>
      <Headers></Headers>
    </keep-alive>
    <div class="register-view">
      <div class="register-title">登陆</div>
      <div class="register-username">
        <input type="text" placeholder="请输入用户名" v-model="username"/>
      </div>
      <div class="register-password">
        <input type="password" placeholder="请填入密码" v-model="password"/>
      </div>
      <a class="register-btn" @click="login">
        登陆
      </a>
      <div class="register-ed">
        <span>
          <a>没有账号? </a>
          <a href="###" class="blue">注册</a>
        </span>

        <span>
          <a href="###" class="blue">忘记密码?</a>
        </span>
      </div>


      <div class="alert-show">
        <ul>
         
          <!--<li>请输入密码</li>-->
          <!--<li>请输入密码</li>-->
          <!--<li>请输入密码</li>-->
        </ul>
      </div>

      <div class="clear"></div>
    </div>


  </div>
</template>

<script>
  import Headers from '~/components/header.vue'
  import API from '~/plugins/axios'
 
  let Cookies = require('js-cookie')
  export default {
    data () {
      return {
        info: [],
        username: '',
        password: '',
        alertNow: []
      }
    },
    computed: {},
    methods: {
      login () {
        let username = this.username
        let password = this.password

        let _this = this

        API.GET("admin/login",{username: username, password: password, user_type: 'company_admin'}).then(function(res){
          console.log(res.data);
          if(res.data){
            let token = res.data['token']
            Cookies.set('token-' + process.env.port, token)
            _this.$router.push({ path: '/info' })

            let message = "登录成功！"
            let obj = {
              message: message
            }
            _this.alertNow.push(obj)
          }else{
            let message = "登录失败！"
            let obj = {
              message: message
            }
            _this.alertNow.push(obj)
          }
        })
      },
      resetToken () {
        Cookies.set('token-' + process.env.port, '')
      }
    },
    components: {
      Headers
    },
    mounted () {
      let _this = this
      _this.resetToken()
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .alert-show
    position absolute
    height 100%
    width 100%
    top 80%
    left 50%
    transform translate(-50%, 0)
    z-index 1
    ul
      margin-top 3/rem
      width 100%
      li.active
        background-color #e6f3ff
        color #007fff
        padding 1.5rem
        display flex
        align-items center
        justify-content center
        box-shadow 0 1px 1px 0 hsla(0, 0%, 80%, .5)
        margin-bottom 10px
      li:after,
      li:before
        content ' '
        display table
      li:after
        clear both

  .blue
    color #007fff

  input
    padding 17px
    font-size 14px
    width 100%
    border 1px solid #e9e9e9
    border-radius 2px
    outline none
    box-sizing border-box
    margin-bottom 1rem

  .register-view
    position relative
    background-color #fff
    margin 0 auto
    margin-top 3rem
    padding 1rem
    max-width 20rem

  .register-title
    color #000
    font-size 1.5rem
    margin-bottom 1rem
    text-align center

  .register-btn
    cursor pointer
    display flex
    align-items center
    justify-content center
    color #fff
    background-color #007fff
    padding 17px
    font-size 14px

  .register-ed
    margin 1rem 0
    color #007fff
    text-align center
    font-weight 800
    font-size .8rem
    display flex
    justify-content space-between

</style>
