<template>
  <div class="headerTop">
    <header>
      
        <a class="location" href="" style="color: rgb(0, 0, 0);">
          北京市
          <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe65a;
</span>
        </a>
        
        <a class="search" href="">
          <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe63c;</span>搜索您要卖的品牌、机器型号
        </a>
        <a class="cart" href="">
          <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe63b;</span>
        </a>
    </header>
    <div class="headerNav">
      <ul>
        <li class="first active">
          <b>推荐</b>
          <span></span>
        </li>
        <li>
          <b>卖手机</b>
          <span></span>
        </li>
        <li>
          <b>卖笔记本</b>
          <span></span>
        </li>
        <li>
          <b>卖平板</b>
          <span></span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="stylus">
@import '~@/assets/styles/iconfont'
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
      position relative

      b 
        font-weight normal
      
    

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