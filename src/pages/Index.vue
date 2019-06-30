<template>
  <div class="index-container">
       <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/About">About</router-link>
    </div> -->
      <top></top>
   <main>

    <router-view/>
   </main>
   <nav>
      <ul>
        <li >
         <router-link to="/" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369180565501400401974165397.png?x-oss-process=image/quality,q_80&amp;size=250x98&quot;);"></router-link>
        </li>
        <li>
        <router-link to="/new" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369310931278711901015172743.png?x-oss-process=image/quality,q_80&amp;size=250x98&quot;);"></router-link>
    
        </li>
        <li>
          <router-link to="/server" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369368866843090802043264357.png?x-oss-process=image/quality,q_80&amp;size=72x98&quot;);"></router-link>
        </li>
        <li>
         <router-link to="/account" style="background-image: url(&quot;https://sr.aihuishou.com/sos/image/6369180567810294601410527364.png?x-oss-process=image/quality,q_80&amp;size=250x98&quot;);"></router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>

import Top from './home/top'
export default {
    data() {
    return {
      currentIndex: 0
    }
  },

  components: {
    Top
  }
}
</script>
<style lang="stylus">
@import '~@/assets/styles/reset.styl'

html 
    background #fff    
.index-container
  height 100%
  display flex
  flex-direction column
  main
    flex 1
    overflow scroll
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
</style>