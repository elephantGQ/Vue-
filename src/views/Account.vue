<template>
<div class="main">
 <div class="container">
      <page-header :title="title"></page-header>
    <div class="top">
        <div class="topContainer">
            <img class="avatar" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAMAAADVRocKAAAAilBMVEUAAADv7+/v7+/v7+/w8PD5+fnv7+/v7+/u7u7v7+/w8PDu7u7x8fH////u7u7u7u7v7+/v7+/v7+/w8PDw8PDy8vLv7+/y8vL////u7u6ysrLq6urc3NzR0dG1tbW6urrj4+PW1tbs7OzOzs69vb3g4ODBwcHHx8fDw8Pn5+fKysrZ2dm3t7fl5eUuCLLGAAAAGXRSTlMA0vrsTA7dw6mOY1o0A/fzyZ2CWkY6IBQFpdXemAAAA15JREFUaN7Nmut24iAUhSEx97ReWtseEmM0mmpr3//1Zo2dFbKEjbmxxu+nR9lmAydwgHXDS5NVGHDfdRzX50G4SlKPTYU3izhp4NFsAhEvDhyCOEE8TmMWPtMdnsMZG8hTwqkTPHka0nzsU2f8uLfEmlMv+Jr14X1JvVm+9+hblwbgdu3tj4gGEn2wDrwtaDCLN3aX1KURuCm7w+ucRjF/ZUZeHBqJ82JsnybAoPDq0AQ40KV0TpMwT8H4dGki3Dft/FrQZCx0My6iCYk0+YcmZabkT5cmxb3NrTg/Z9l+SGx5834hwPEghKj0zZR/Y19IYs1aPHHSsxNXDmddrPiN/ZAW/sQkMXDgJP5R5Erss4l9k5a49QC+3p6tkNxYUaKYxJePkJCOjZBIK6Q97VhJGpJGgBvtkVao9hht4nKOmexRrSi1sQzPttBkj2rTDsZuCdkVT11/5kKyrYu2FdkJxQ5KVz97aIweZBM50b79PO0Wj0RZJRpKMFIDUmhaqTPcI5+/sbz5ck63BFeHHFJoes4wpnZySkABx5NjSCdQ427ftvwooQDNwItG94vj5cYeSQ0FIjnLdAIZtcnqtj1tKijAGfOoi4C0Sdoj2UAB8lhqElDnt7Snm0DKkj4CtP/elUQ9BBK2MgoAugusWGhXIGSBXYGAcbsCnPl2BXzm2hVwmWNXwLEuYN0i6508yTCtsACfZKKdDBNtilRxLrBAOEGyyw7ClOySMQLynY/TdTpSYKdbF0lS/Svz0FUg+9Su7CQeWFrXLYG90Z6G7ZlUONwfb6RAdcqQPQVYyDREeIN8vDQC4nIE9kh2eLvsOWB0142AEJs79sh/oC4dWQAHSCsR1GeDPdDDQFm+40xzyaE9G0LEygYECFypFHtulcEGhIUdBKRN0h75ISDsVmipWn9Wsafadym58DvJQPJ1LL9b9hQ5GeBgIw7mE9pYYhJQSjAPeVhBwKUEPFLxtl9u7jExKueg3AQ3aaicgwpSODdpNmmYNS6pwdyk5jbMckBRsAK5DRQFB5Q180LJbYjZsMLsTy1EsaH7RL1Ky7iQiUvLtovjtsv7tg8obB+x2D4ksn3MZfug7v8fNY47LH2M497BB9aPdOQ+4NLA41176HFx45Gvnti/PDP++s8fvj7KvhhTDroAAAAASUVORK5CYII=" alt="">
            <div class="left-content-container had-red-pocket"><p class="login-now">立即登录</p><div class="new-user-coupon-tips" style="background-image: url(&quot;https://sr.aihuishou.com/appgateway/images/register_new_user_coupon.png&quot;);"></div></div>
            <a href="javascript:void(0)" class="setting-container">设置</a>
            </div>
    </div> 
     <div class="my-account">
         <ul>
             <li>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAP1BMVEUAAABHR0dERERERERFRUVERERGRkZERERLS0tFRUVFRUVGRkZFRUVFRUVGRkZERERFRUVERERHR0dOTk5EREQRZHrNAAAAFHRSTlMAJC1ptsNtsQz2yovu1JqHd0tIF7Cy4+QAAACASURBVEjH7ZRbCoAgEEV7TGnZO/e/1sQ+JAKdiwgZni9BDuMM16kKPDSX9m/CXnsZX0JTeemyFs52EUSTNsxEQUGq4THZkCDNOCFBaEw4NCC4ArT1hpUj2IbVfW4YgrQ3dQoBfxLeND5WVyIuGnD44Hh/4sdFCNgiy2EZJxIKTC5lMD8DThjSkgAAAABJRU5ErkJggg==" alt="">
                <span class="desc">我的钱包</span>
                <span class="count">0.00</span>
             </li>
             <span class="jx"></span>
             <li>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAWlBMVEUAAABFRUVFRUVFRUVFRUVERERFRUVFRUVKSkpOTk5ERERFRUVFRUVERERERERERERGRkZLS0tFRUVERERFRUVGRkZGRkZQUFBERERERERGRkZERERNTU1ERES9Lu8yAAAAHXRSTlMAqska4/eJsiIP/HiCOdnRXxXBtVRMQgjolXxpCrpLWFIAAAC+SURBVEjH7ZTbDoMgDEBRBw4UBOfmbv3/3xyYIBuOgZkPJnoeCCE55dIWtLMdIJ18zQLOYpSfwgHFKJYVzsPIaaLQZ0CMhRuVJNBWL9xQxwBEERIYQZZnA4aWmVFQG6X081CPxgMcd7t4Al/A7oZSB/ei8C+ZvqCRjvm7Vj8ESQjJwXDVs9oK4SOV8A4OHqlGIcFdevqsYYFOii8kxDOtjhoBGm5midU6ZFvNKG9Zafr/+mF2i67+m0kWdjbDC21eTLYxE/ExAAAAAElFTkSuQmCC" alt="">
                <span class="desc">券包</span>
                <span class="count">0张可用</span>
             </li>
             <span class="jx"></span>
             <li>
                 <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwBAMAAAClLOS0AAAAElBMVEUAAABFRUVFRUVERERGRkZERES3tHhCAAAABXRSTlMAquP2cS79lrgAAAA3SURBVDjLYxjBIBQroLaEoSAaEIZKKKC7h4mgBCPQUAEaS7AAneiA01U0ksATVrSPqKHo3JEKAGhhd1bTVbxgAAAAAElFTkSuQmCC" alt="">
                 <span class="desc">银行卡</span>
                <span class="count">未绑定</span>
             </li>
         </ul>
    </div>
    <acc-option :opt="opt1"></acc-option>
    <acc-option :opt="opt2"></acc-option>
    <div class="single-image"><a href="https://page.aihuishou.com/renderer/?activityId=132&amp;utm_source=m_legao_banner&amp;utm_medium=picture&amp;utm_campaign=xinrenzhuanxiang"><img src="https://sr.aihuishou.com/sos/image/6369666941816428501648187958.png?x-oss-process=image/quality,q_80&amp;size=750x200" alt=""></a></div>
    <div class="single-image"><a href="javascript:;"><img src="https://sr.aihuishou.com/sos/image/63675281584472367092474438.png?x-oss-process=image/quality,q_80" alt=""></a></div>
    <div class="navgator">
    <div class="navgator-four"><img
            src="https://sr.aihuishou.com/sos/image/6367531157664817602114108197.png?x-oss-process=image/quality,q_80"
            alt=""><span>回收指南</span></div>
    <div class="navgator-four"><img
            src="https://sr.aihuishou.com/sos/image/636874828441982300519058732.png?x-oss-process=image/quality,q_80&amp;size=174x110"
            alt=""><span>特权专区</span></div>
    <div class="navgator-four"><img
            src="https://sr.aihuishou.com/sos/image/636882696222504540870181993.png?x-oss-process=image/quality,q_80&amp;size=174x110"
            alt=""><span>新人福利</span></div>
</div>
    <div class="single-image"><a href="javascript:;"><img src="https://sr.aihuishou.com/sos/image/63681421350663044055023686.png?x-oss-process=image/quality,q_80&amp;size=742x76" alt=""></a></div>
    <div class="navgator"><div class="navgator-four"><img src="https://sr.aihuishou.com/sos/image/636753114564194110368733657.png?x-oss-process=image/quality,q_80" alt=""><span>兑换中心</span></div></div>
  </div>
  </div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
import PageHeader from '@/components/PageHeader.vue'
import AccOption from '@/pages/account/option.vue'
export default {
     name:"account",
     data() {
         return {
             title:"我的",
             opt1:"我的预定",
             opt2:"我的订单",
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
         PageHeader,
         AccOption
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
  background #fff !important
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
.top
    padding .15rem 0 .2rem .14rem
    width 100%
    background #fff
    box-shadow: 0 0.01rem 0.2rem hsla(195,9%,83%,.3);
    .topContainer
        width 100%
        height .48rem
        display flex
        justify-content flex-start
        align-items center
        img
            height .48rem
        .left-content-container
            flex 1
            font-size .18rem
            font-weight 700
            line-height .2rem
            padding-left .1rem
            p
                padding-bottom .05rem
            .new-user-coupon-tips
                width 100%
                height .16rem
                background-repeat  no-repeat 
                background-size contain
        .setting-container
            color #111
            height .2rem
            font-size .12rem
            width .58rem
            height .24rem
            background-image linear-gradient(-90deg,#fff03b,#ffd629)
            border-radius .12rem 0 0 .12rem
            text-align center
            line-height .24rem
.my-account
    padding 0 .14rem .1rem
    width 100%
    ul 
        width 100%
        height .87rem
        display flex
        justify-content center
        align-items center
        .jx
            display block
            width .01rem
            height .35rem
            background-color #e1e1e1
            
        li
            display flex
            flex 1
            flex-direction column
            justify-content center
            align-items center
            img
                height .24rem
                width .24rem
            .desc
                padding-top .05rem
            .count
                padding-top .02rem
                font-size .12rem
                color #999
.navgator
    padding 0 .14rem .1rem
    width 100%
    background #fff
    .navgator-four
        width 25%
        display flex
        flex-direction column
        display inline-block
        img 
            width 100%
            display block
        span 
            width 100%
            display block
            text-align center
            color #666
</style>
