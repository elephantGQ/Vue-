<template>
<div class="main">
      <page-header :title="title"></page-header>
     <div class="region-list">

         <div class="region-item active" v-if="regionsList.length" _id="all" @click="handleClick($event,'all')">附近</div>

         <div class="region-item" v-for="item in regionsList" :key="item.id" :_id="item.id" @click="handleClick($event,item.id)">{{item.name}}</div>
      </div>
         
     <div class="container">
      <div class="g-nbs-item" v-for="(loc,index) in addressList" v-if="filt==='all'||loc.idRegion===filt"  :idRegion="loc.idRegion" :key="index">
          <a class="si-content" href="">
        <div class="si-title">
            <div class="si-title-block">
                <h3 class="si-title-text">{{loc.name}}</h3>
            </div>
        </div>
        <div class="si-desc">{{loc.address}}</div>
        <div class="si-service-tags">
            <span class="tag-item" v-for="(tag,index) in loc.shopServiceConfigs" :key="index">{{tag.subTitle}}</span>
            
            </div>
    </a>
    <div class="si-actions"><a class="si-action-contact" href="tel:02180111030,1014"><span>联系服务站</span></a><a
            class="si-action-map" href="#/shop/map/28"><span>查看地图</span></a></div>
</div>
      
      </div>
  </div>
</template>
<script>
import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
import PageHeader from '@/components/PageHeader.vue'
export default {
     name:"server",
     data() {
         return {
             title:"服务站",
             addressList:[],
             regionsList:[],
             filt:"all",
             locId:31
         }
     },
    async mounted() {
    this.locId=this.$store.state.loc.id
    console.log(Indicator.open)
    Indicator.open({
      text: '加载中...',
      spinnerType: 'triple-bounce'
    })
    let regions = await http.get({
      url: `/api/city/regions/${this.locId}`
    })
    let result = await http.get({
      url: `/api/city/${this.locId}/shop`
    })
    this.regionsList=regions.data
    this.addressList=result.data
    console.log(this.addressList)
    Indicator.close()
    // https://m.aihuishou.com/portal-api/city/31/shop
   this.$nextTick( async() => {
   })
     },
     components:{
         PageHeader
     },
     methods: {
         handleClick(e,id){
             document.querySelector('.active').classList.remove('active')
             e.target.classList.add('active')
             this.filt=id
         }
     },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border'
html,body 
    height 100%
    width 100%
    .main
        height 100%
        width 100%
        background #fff !important
        display flex
        flex-direction column
        .container
            flex 1
            width 100%
            overflow scroll
.region-list 
    position: relative;
    z-index: 10;
    overflow: hidden;
    background: #fff;
    border-bottom: 1px solid #e9e9e9;
    white-space: nowrap;
    overflow-x: auto;
    padding-right: .5rem;
    .region-item 
        color: #666;
        display: inline-block;
        margin-left: .16rem;
        height: .4rem;
        line-height: .32rem;
        border-top: .03rem solid #fff;
        border-bottom: .03rem solid #fff;
    .active 
        color: #333;
        border-bottom: .03rem solid #fcdb00;
.g-nbs-item
    border-top: .08rem solid #f9faff;
    width 100%
    a
        color #333
    .si-content
        display block
        padding .14rem .16rem 
        width 100%
        height 1.08rem
        border_1px(0 0 1px 0)
        .si-title
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAMAAACOLiwjAAAAUVBMVEUAAAB3d3d4eHh5eXl3d3d2dnZ3d3d3d3d3d3d2dnZ3d3d3d3d3d3d3d3d3d3d4eHh4eHh2dnZ2dnZ3d3d3d3d3d3d2dnZ4eHh5eXlgYGB3d3desmzgAAAAGnRSTlMA28AxFg359vPv5M3Dtq2ilYp/dGdbUkgmCByXds4AAABRSURBVBjTbY/HDYBADAS5RM6Z6b9Qfl6hw7+R7Q1FHwsNbRB0VIdBGmHRboUhGZ017jYKjuYyih42Pc4wPUZ7ic9BZxLIpWWqOAqqCr/lPrVfszgFTVGZpgQAAAAASUVORK5CYII=") no-repeat 100%
            background-size: .06rem .1rem;
        .si-desc
            font-size .12rem
            color #666
            padding-right .6rem
        .si-service-tags
            .tag-item
                display inline-block
                height .16rem
                font-size .12rem
                color #ffffff
                padding 0 .06rem
                background linear-gradient(270deg,#ff6830,#ff4949)
                border-radius .08rem
                margin-right .1rem
    .si-actions
        height .4rem
        width 100%
        padding 0.16rem 
        display flex
        justify-content center
        align-items center
        a
            flex 1
            text-align center
            color #666
        .si-action-contact
            span
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAD2ElEQVRIS7WWX2gcVRTGv3NnsrakgW4VXCiIBZtIafsYkYCYYq0FrVgxiIiwwZ07EIrkRUH8M1qKSDARNJmZ3SGBiKCItX8ECxpSse8VlSYiCCrsruBDiGJsdmaOnGV22V2zSbNZz8PCsHPO75473/3OJbTEzMxM2jCMA6VS6VvHceLW/3f6TI0FgiAYiqLoEoB9ABbDMDw1Njb2104hjfl1YAL7AkAfgH8A7AJwLQzDk92EVoFBEAxGUfSVwJh5Poqis6ZpLgC4q9tQmp+f711bW/sRwH6BlcvlrHy7QqFwII7jq92Gkud5NhG5AK739/cPDg8Ph7U9/z+glM/nzzPzEwDOaK3fbxVIt6Hk+/7XAB4gIsuyrMJGimyEMvPntm0/1qlyBfghgGcALGitH2pXyHXdE0qpKwCidDp928jISNQJVIDnALwsycz8pm3br7cW8jzvIBEtirAAnNdaP9kJTHJENM8S0QcNBRyt9Ru15xaYQB/VWv/dMdD3fTlrv8hWMTMTkcnMbw0MDLy2vLx8RCl1Oelsx7Bqh/Lj+/73AA4zs4gmK1AiWmfmVNJJV2CNwBcBvA3gAjPPENE7AI4A+BPAXCqVeimbzYrd7TiqHRYKhTvjOP5Z/FMpdTiXyy1NTk7uXl1dvbmdiTE1NbV3fHx8ZbNV1c07n8+/y8wvENEly7Ie304rvu/fAUCmzP0AroRh+FQ7w68Dp6enMz09PUvMvJeZT9m2LWLZMgRGRAvMfLTh5bZTpmke+r4/BkDsrQTgqNb6j82ILbAbzPw8EX20meE3AR3HUZlM5ksiOibOk06nT7RzlCAI9sVxvJh0dkMpdSyXy/2+lfc2AaUb2VrDMK4TUUZOjNba3qhLz/M+JqIRAHXYrUyZ/wAlaXZ29r5KpSIDuBfAhNZajk09JiYmevv6+laIiAHco7X+tXVR7TrdECjJQRA8ktxveojIKxaLZxzHqc7K5BiVAayUSqXb2x2dFuiCZVnH2wKlcD6fP8nMn0inRHTVNM3nRkdHf0vc6SfpDsA5rfUr7cTled4hIvoOgGEYxsFNgVLEdd1BpZRAxXNXxZFM03yvUqkMAbgsNgigyfBr8Lm5uV3r6+sXATwsfp1Kpe7dEijJclc1TXOamZ9O/Feujp8x824Ap4lIATirtZbRJt9VxLfHNM1PBcbMZcMwRMVLtwSsrdh13SHDMF5l5uMABNIUzPyNUuoCgD3MnAVwdyNMXt4WsFH24kbM/KBMmWS7a5OlcRE/MPNp27ble1ejI+BGAnFdd79SSi5jhwDcJKJrxWLxYk3ZtZx/ATHa/wehhoiWAAAAAElFTkSuQmCC") no-repeat 0
                    background-size: .14rem .14rem;    
                    padding-left .2rem   
        .si-action-map
            span
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAECElEQVRIS62WW2hcZRDH/7PnJK6xrRZ8MGutiqJBUB8UUVoQrYK1YE2VCt4gm+w3Z0nEPqhUpXCE1jtEo0n2O7sxD1ahAS9VtFXEC1Io2CdB0YJorXYfVIK22rjZc0amnA3Z071kg/N45vL7vpk58w1hCVIsFtdEUbQZwCYAVwE4N3b7HcDXAD5IpVJ7c7ncL+3CUSuDqampTBiGvogMAHDbBKsS0bTjOP7g4OCxZrZNgUEQ3CEiuwGsBFAhondFZC8RHZqfnz8VsKurKyMi1xLRZhG5E0A3gONEdL8x5r1G0IbAIAgeEpGXAKQAvA3gMWb+odUNrbWXAHgewBYAERFtM8a8kvQ5DRjf7B0AQkTbjTEvtqvLYn0QBI+IyLMAiIj6kzetA2rNqtXqd5pGInq0U1gNHENf0PS6rtu3uKZ1wCAIAhHJaRqZ+a5Obpa0tda+pekloqIxxtT0C8C49X/U/AO4ol3N2h0mrum32gepVOri2i+zALTWDgN4lYhmjDH3NAoYBMFlIvIMgFti/SdE9Lgx5nAT+z0ishXACDOPq81i4D4AtwG4j5nfTAaIYQcBrE7oZono+kZQa+29AN4AsI+Zb08CdUqcT0SXN3E+VZMmqWxY8/iQ3wP4lZnXJIFzAM6oVqsrh4eHTzRogj8BrGoC/IuZz07qxsfHV7iuexzAv8ycTgL/BtDT3d195sDAgMLrxFrbMXB6ejpdqVROAviHmc9KAn8GcIHjOBcNDQ0dadbmnaS0VCpdGIbhTwCOMvPaJPBDABuJaIsxRidNnSyzaXS+aqz9zLwxCXwCwC4ArzHz4P/xW1hriwCGRGSH53k764ClUunSMAwPi4hO+7XMrDVbtoyNja1Kp9NaGm2mvlrn1422QqHwMRHdCuApZvaXTQNgrX0SwE4i+tQYs6EWKwm8gYgOiMgcEV253PEWN8s3RNRDRDfmcrkvGwL1YxAEUyKSBfBVuVxe7/t+pZOb+r7vZjKZz0VkHYDdzPzAYv/T3sPR0dFzenp6DgHQB/V1Zn6wE2DtxSGiI5VK5ZqRkZE/WgJVWSgUriaiL+KCjzHzw0uBWmuf0+0AwAkRucnzPD14nTTdaUql0rowDPcDWKG/CgCPmecbgTWNvb29YwDyInKSiDYx82eNbFtubcVi8eYoit7XkQdAb3w3M+tquCATExOrHceZiZ+sORHp9zxPD9pQWgLVY3Jy8joi0m3tPADHoijK5vP5j+LUb9DVUEcigN+iKOrP5/MHWqW/LVCd411nD4D1ulwB0AkSAmB90YnooOu6W7PZ7NF2tV4SUIPMzMw4s7Oz2wHs0GcsDqy/zNPlcnmX7/vVdjDVLxlYC2at7QPwsoio7zbP83RvWbL8B1qNzixRKm9qAAAAAElFTkSuQmCC") no-repeat 0
                background-size: .14rem .14rem;    
                padding-left .2rem   

</style>
