<template>
<div class="main">
 <div class="container">
      <page-header :title="title"></page-header>
      <div class="single-image"><a href="https://page.aihuishou.com/renderer/?activityId=132&amp;utm_source=m_legao_banner&amp;utm_medium=picture&amp;utm_campaign=xinrenzhuanxiang"><img src="https://sr.aihuishou.com/sos/image/6369666941816428501648187958.png?x-oss-process=image/quality,q_80&amp;size=750x200" alt=""></a></div>
    <div class="single-image"><a href="javascript:;"><img src="https://sr.aihuishou.com/sos/image/63675281584472367092474438.png?x-oss-process=image/quality,q_80" alt=""></a></div>
<div class="single-image"><a href="javascript:;"><img src="https://sr.aihuishou.com/sos/image/63681421350663044055023686.png?x-oss-process=image/quality,q_80&amp;size=742x76" alt=""></a></div>
  </div>
  </div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
import PageHeader from '@/components/PageHeader.vue'
export default {
     name:"account",
     data() {
         return {
             title:"我的"
         }
     },
     mounted() {

    console.log(Indicator.open)
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'triple-bounce'
    // })
   
     },
     components:{
         PageHeader
     }
}
</script>
<style lang="stylus" scoped>
html,body 
    
    height 100%
    width 100%    
.main
  height 100%
  width 100%
  background #f5f5f5 !important
  display flex
  flex-direction column
  .container
    flex 1
    width 100%
    overflow scroll
    .single-image
        width 100%
        a
            display inline-block
            width 100%
            img 
                width 100%
        img 
            width 100%
</style>
