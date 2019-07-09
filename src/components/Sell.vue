<template>
 <div class="home">
     <div class="navgator">
         <ul>
             <li v-for="item in li1" :key="item.id">
                 <img :src=item.imageUrl alt=""><span>{{item.title}}</span>
             </li>
             
         </ul>
     </div>
     <div class="navgator">
         <ul>
             <li v-for="item in li2" :key="item.id">
                 <img :src=item.imageUrl alt=""><span>{{item.title}}</span>
             </li>
         </ul>
     </div>
      <div class="single-image"><router-link to="/category/0"><img src="https://sr.aihuishou.com/sos/image/6367657649175868001951108153.png?x-oss-process=image/quality,q_80&amp;size=750x152" alt=""></router-link ></div>
     <div class="multi-image"><a href=""><img src="https://sr.aihuishou.com/sos/image/636777053433809460465574684.png?x-oss-process=image/quality,q_80&amp;size=722x61"></a></div>
    <div class="single-image"><a href=""><img :src=msg1[0].imageUrl alt=""></a></div>
 <div class="single-image"><a href=""><img :src=msg2[0].imageUrl alt=""></a></div>
 <div class="single-image"><a href=""><img :src=msg3[0].imageUrl alt=""></a></div>
 </div>
</template>
<script>
export default {
  props:{
    li1:Array,
    li2:Array,
    msg1:Array,
    msg2:Array,
    msg3:Array,
  },
  name: "recommend",
  data() {
      return {
          
      }
  },
  computed: {
      
  },
 
}
</script>
<style lang="stylus" scoped>
.navgator
      padding 0 14px 10px
      width 100%
      height 1rem
      ul
        display flex
        align-items center
        justify-content center
        height 100%
        li
            flex 1
            text-align center
            img 
                width 100%

.container
    height max-content !important 
    background red
</style>
