<template>
  <div class="main-header-box">
    <div class="main-header 4hei" id="mainHeader" ref="mainHeader">
      <div class="container">
        <a href="/" class="logo">
          <img src="~assets/img/logo.png"/>
        </a>
        
      </div>
    </div>

  </div>
</template>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .4hei
  height 4rem
  .3hei
  height 3rem
  .avatar
    height 2rem
    width 2rem
    border-radius 50%
    background-size 100%
    background-position center
    margin-left 1rem

  .user-action
    height 100%
    display flex
    justify-content space-between
    align-items center
    .user-comment:after
      content "|"
      position absolute
      left 100%
      color hsla(0, 0%, 59%, .4)
    .user-login
      padding 0 .6rem 0 1rem
    .user-login:after
      content "\B7"
      position absolute
      left 100%
      color #007fff
      font-weight 800
    > a
      position relative
      color #007fff
      font-size 1rem
      padding 0 1.2rem
      cursor pointer
      display flex
      align-items center
      justify-content center
      height 4rem

  .bounce-enter-active {
    animation: bounce-in .5s;
  }

  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .container
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center
    align-items: center
    height: 100%
    width: 100%
    position: relative

  .visible
    transform: translateZ(0)

  .main-header
    position fixed
    transition all .5s

  .main-header-box
    position: relative;
    height: 4rem
    display flex
    .main-header
      width 100%
      background: #fff
      border-bottom: 1px solid #f1f1f1
      height: 4rem
      z-index: 250
      .container
        max-width: 960px
        margin: auto

  @media (max-width: 960px)
    .main-header
      padding 0 1rem

  .logo
    margin-right: 2rem
    display flex
    align-items center
    

  .main-nav
    height: 100%
    -webkit-box-flex: 1px
    flex: 1 0 auto
    .nav-list
      display flex
      -webkit-box-align: center
      height: 100%
      margin: 0
      -webkit-box-pack: flex-end
      position: relative
      > li
        width 100%
      .main-nav-list
        display: flex
        justify-content space-between
        .phone-show-menu
          cursor: pointer
          display: none
        .phone-hide
          display: flex
          .active
            a
              color: #007fff

      .nav-item
        flex: 1 1 auto
        -webkit-box-pack: end
        justify-content: flex-end
        cursor: pointer
        .active
          color: #007fff

  .link-item
    padding: 0 1.2rem
    height: 100%

  .nav-item
    color: #71777c
    font-size: 1rem
    -webkit-box-pack: center
    justify-content: center
    cursor: pointer
    display: flex
    -webkit-box-align: center
    align-items: center
    margin: 0
    a
      color: #71777c

  @media (max-width: 720px)
    .phone-hide
      display none !important

    .phone-show-menu
      display flex !important
      align-items center
      color #007fff
      position relative

    .phone-item
      /*display none*/
      position fixed
      top 4rem
      width 100%
      z-index 10086
      box-shadow 0 1px 2px 0 rgba(0, 0, 0, .1)
      margin 0 -1px
      padding-bottom 200%
      background-color rgba(0, 0, 0, .8)
      li:last-child
        border-bottom 0
      li
        background-color #fff
        width 100%
        color #007fff
        text-align center
        display flex
        align-items center
        justify-content center
        padding 1rem 0
        border-bottom 1px solid rgba(0, 0, 0, .1)
        a
          height 100%
          font-size .9rem
          text-align center
          width 100%
          display flex
          align-items center
          justify-content center

      i
        font-size 2rem

    .main-nav
      .nav-list
        justify-content flex-end

  .nuxt-link-exact-active
    color #007fff !important
</style>
