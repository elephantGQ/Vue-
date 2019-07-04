<template>
  <div class="index-container">
       <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link>
    </div> -->
   
   <main>
       <transition name="fade">   
    <router-view/>
    </transition>
   </main>
   <nav>
      <ul>
          <!-- 
              url("https://sr.aihuishou.com/sos/image/6369180565501400401974165397.png?x-oss-process=image/quality,q_80&size=250x98")
              url("https://sr.aihuishou.com/sos/image/6369310931537062801946906544.png?x-oss-process=image/quality,q_80&size=250x98")
              url("https://sr.aihuishou.com/sos/image/6369368867170919001601808662.png?x-oss-process=image/quality,q_80&size=72x98")
              url("https://sr.aihuishou.com/sos/image/6369187504134054301791478796.png?x-oss-process=image/quality,q_80&size=250x98")
           -->
        <li >

         <router-link to="/home" style="background-image:url(&quot;https://sr.aihuishou.com/sos/image/636919176581567780486725169.png?x-oss-process=image/quality,q_80&size=250x98)" active-class="active1"></router-link>
        </li>
        <li>
        <router-link to="/new" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369310931278711901015172743.png?x-oss-process=image/quality,q_80&amp;size=250x98&quot;);" active-class="active2"></router-link>
        </li>
        <li>
          <router-link to="/server" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369368866843090802043264357.png?x-oss-process=image/quality,q_80&amp;size=72x98&quot;);" active-class="active3"></router-link>
        </li>
        <li>
         <router-link to="/account" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369180567810294601410527364.png?x-oss-process=image/quality,q_80&amp;size=250x98&quot;);" active-class="active4"></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>


export default {
    data() {
    return {
      currentIndex: 0
    }
  },

  
}
</script>
<style lang="stylus">
@import '~@/assets/styles/reset.styl'

html,body 
    height 100%
    width 100%    
.index-container
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    width 100%
    overflow hidden
  nav 
    height 50px
    ul
      display flex
      height 100%
      li
        flex 1
        display flex
        justify-content center
        align-items center
        a
           flex 1
           height 50px
           text-align center
           text-decoration none
           background-position 50%
           background-size auto 100%
           background-color #fff
           background-repeat no-repeat
        .active1
            background-image url("https://sr.aihuishou.com/sos/image/6369180565501400401974165397.png?x-oss-process=image/quality,q_80&size=250x98") !important
        .active2
            background-image url("https://sr.aihuishou.com/sos/image/6369310931537062801946906544.png?x-oss-process=image/quality,q_80&size=250x98") !important
        .active3
            background-image url("https://sr.aihuishou.com/sos/image/6369368867170919001601808662.png?x-oss-process=image/quality,q_80&size=72x98") !important
        .active4
            background-image url("https://sr.aihuishou.com/sos/image/6369187504134054301791478796.png?x-oss-process=image/quality,q_80&size=250x98") !important
      
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>