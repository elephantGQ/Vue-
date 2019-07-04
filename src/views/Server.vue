<template>
 <div class="index-container">
      <page-header :title="title"></page-header>
  </div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
import PageHeader from '@/components/PageHeader.vue'
export default {
     name:"server",
     data() {
         return {
             title:"服务站"
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