<template>
  <div class="about">
    <h1>换新机</h1>
  </div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
export default {
     name:"new",
     mounted() {

    console.log(Indicator.open)
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'triple-bounce'
    // })
   
     }
}
</script>
<style lang="stylus">
.about{
    height 100%
    width 100%
}
</style>
