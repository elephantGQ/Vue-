<template>
  <div class="headerTop">
    <header>
      
        <router-link to="/location" class="location" href="" style="color: rgb(0, 0, 0);">
          北京市
          <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe65a;
</span>
        </router-link>
        
        <router-link  class="search"  to="/search">
          <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe63c;</span>搜索您要卖的品牌、机器型号
        </router-link>
        <a class="cart" href="">
          <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe63b;</span>
        </a>
    </header>
    <div class="headerNav">
      <ul>
        <router-link tag="li" to="/home/recommend" active-class="active" class="first">
          <b>推荐
              <span></span>
          </b>
          
        </router-link>
        <router-link tag="li" to="/home/phone" active-class="active">
          <b>
              卖手机
              <span></span>
          </b>
          
        </router-link>
        <router-link tag="li" to="/home/notebook" active-class="active">
          <b>卖笔记本
              <span></span>
          </b>
          
        </router-link>
        <router-link tag="li" to="/home/pad" active-class="active">
          <b>卖平板
              <span></span>
          </b>
          
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="stylus">
@import '~@/assets/styles/iconfont'
@import '~@/assets/styles/ellipsis'
.headerTop
    position relative
    z-index 1000000
header 
  display flex !important
  justify-content center
  align-items center
  height 44px
  width 100%
  line-height 44px
  background #fff
  .location
      padding 0 15px
  .search
      flex 1
      color #999
      box-shadow 0 0.01rem 0.2rem hsla(195,9%,83%,.3)
      padding 0 10px
      height 32px 
      border-radius 18px
      line-height 32px
      ellipsis(100%)
  .cart
      width 40px
      height 44px
      padding-right 14px
      padding-left 10px

.headerNav 
  height 44px
  width 100%
  background #fff
  ul 
    height 44px
    padding 0 14px

    li 
      height 44px
      float left
      padding-left 30px
      line-height 44px

      b 
        font-weight normal
        display inline-block
        position relative
      
    

    .first 
      padding-left 0px
    

    .active 
      b 
        font-weight 900
        font-size 15px
        
        span 
            background-image linear-gradient(90deg, #fffa8f, #ffd33f)
            height 4px
            width 100%
            position absolute
            top 35px
            left 0
     
</style>