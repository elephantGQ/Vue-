<template>

  <sell v-if="flag" :type=5 :li1="dataList[0].items" :li2="dataList[1].items" :msg1="dataList[4].items" :msg2="dataList[5].items" :msg3="dataList[6].items" ></sell>
</template>
<script>
import Sell from '@/components/Sell.vue'
import http from '../../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
export default {
    name:"notebook",
    components: {
    Sell
  },
  data() {
    return {
      dataList: [],
      flag:false
    }
  },

  async mounted() {


    Indicator.open({
    text: 'Loading...',
    spinnerType: 'snake'
    });

    let result = await http.get({
      url: '/api/common/channel-info/21?cityid=31'
    })
    // console.log(result.data)
    this.flag=true
    this.dataList=result.data
    console.log(this.dataList)
    Indicator.close()
  }
}
</script>
