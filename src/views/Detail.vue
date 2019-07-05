<template>
  <div class="main" v-if="flag">
    <detail-header :title="title"></detail-header>
<div class="swiper-container">
  <div class="swiper-wrapper">
      
    <div class="swiper-slide" v-for="(item,index) in detail.headerMedias" :key="index">
        <!-- <img :scr=item.imageUrl> -->
        <img :src=item.imageUrl>
          
    </div>

  </div>
  <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
</div>
<div class="info">
    <div class="title"><img
            src="data:image/png;base64,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">
        <h1>【以旧换新补贴￥300】荣耀20</h1>
    </div>
    <div class="sub-title">4800万超广角AI四摄 | 3200万美颜自拍 | 麒麟980全网通</div>
</div>
<div class="meta">
    <div>
        <div class="new">
            <div class="box">
                <div class="title">新机机型</div>
                <div class="content">
                    <div class="item">
                        <div class="left"><span>8GB 256GB 幻夜黑 全网通</span></div>
                        <div class="right"><span class="right-price"><span class="right-price-sign">¥</span><span
                                    class="right-price-num">2999</span></span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="old">
        <div class="box">
            <div class="title">旧机抵扣</div>
            <div class="content">
                <div class="old-item old-item-arrow">
                    <div class="main">
                        <div class="left">
                            <div class="cover"><span class="empty"></span></div><span>添加想卖的旧机，可抵扣新机款</span>
                        </div>
                        <div class="right"></div>
                    </div>
                </div>
            </div>
            <div class="more">添加更多旧机</div>
        </div>
    </div>
    <div class="subsidy">
        <div class="box">
            <div class="title">优惠福利</div>
            <div class="content">
                <div class="item subsidy-item">
                    <div class="left"><span class="title">以旧换新补贴</span></div>
                    <div class="right"><span class="right-price"><span class="right-price-sign">-¥</span><span
                                class="right-price-num">300</span></span><span class="action"></span></div>
                </div>
                <div class="item recycle-coupon-item">
                    <div class="left"><span class="title">登录领优惠，旧机多抵2%（限首单）</span></div>
                    <div class="right"><span class="action action-right-arrow"></span></div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="ofn-banners">
    <div class="ofn-banner">
        <a class="ofn-banner-link" href="https://page.aihuishou.com/renderer/?activityId=552">
        <img class="ofn-banner-image" src="https://sr.aihuishou.com/cms/image/636978338149295350274797582.jpg" alt="">
        </a>
        </div>
        </div>
<div class="nav"><span class="item active">图文详情</span><span class="item">基本参数</span><span class="item">包装售后</span></div>
<div class="introduction">
    <img v-for="(item,index) in detail.introduction" :src=item.imageUrl :key="index">
</div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
import DetailHeader from '@/pages/detail/DetailHeader.vue'
export default {
    data() {
        return {
            title:"【以旧换新补贴￥300】荣耀20",
            detail:{},
            flag:false
        }
    },
    components:{
        DetailHeader
    },
      async mounted() {
    let result = await http.get({
      url: 'https://dubai.aihuishou.com/dubai-gateway/v2/products/27550?cityId=31',
      headers:{
          "Ahs-Guid":"caa630a4-df46-10cc-950b-7fef5cae5ad3",
          "Ahs-App-Id":"10002"
      }
    })
    this.detail=result.data
    this.flag=true
    console.log(this.detail);
     this.$nextTick( async() => {
        
      var mySwiper = new Swiper('.swiper-container', {
          pagination: {
            el: '.swiper-pagination',
            // type: 'bullets',
            type: 'fraction',
            //type : 'progressbar',
            //type : 'custom',
        },
        })
  })
}
}
</script>
<style lang="stylus">
.main
    height 100%
    width 100%
    overflow scroll
.swiper-slide img {
    height: 2.8rem;
    width:2.8rem;
    display: block;
    margin: 0 auto;
}
.swiper-pagination{
    font-size: .1rem;
    position: absolute;
    width: .4rem;
    line-height: .2rem;
    text-align: center;
    border-radius: .02rem;
    background-color: #666;
    color: #fff;
    right: .2rem;
    left: 3.25rem;
    bottom: .13rem;
    z-index: 2;
    }
.meta 
    padding: .08rem .14rem 0;
    .new
      margin .05rem 0
      background #fafafa
      border 1px solid #eee
      border-radius .05rem
      .title
          padding .08rem .1rem
          border-bottom 1px solid #eee
          font-weight 500
       .content
            padding .08rem .12rem
            color #666
            .item
                display flex
                .left
                    flex 1
                .right
                    padding-right: .24rem;
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAA1ElEQVQ4T63TO05CQRTG8d81xAZKNsAGKFyBOyBQSFwAmrgCK1dgozvwQWVDBy1SEnpjT2y1svKRY+YmhPC4k3iSySRz5j/nMd8pMMMJ3lSwAj9Yoov5PiaABY7wiTM87oICqOMevRTtGpf43gQGEBb7VVoHGOMUH+tQCZTnEeUODbygg9dVaB0IXxsjtPCeIk1KaBMQviaecIyvVFPU9pf7NqvhBhfpwkN0cRdQPnSOWxxi+q9AVkpZRWe1tfLHZUkjW3yr8h5guE/e2QP0jH7VEf0FqaQ3pe0rT/8AAAAASUVORK5CYII=") no-repeat 100%
                    background-size: .06rem .1rem;
                    .right-price 
                        color: #fc6232;
    .old
        margin .05rem 0
        background #fafafa
        border 1px solid #eee
        border-radius .05rem
        .title
          padding .08rem .1rem
          border-bottom 1px solid #eee
          font-weight 500
        .content
            padding .08rem .12rem
            color #666
            .main
                display flex
                .left
                    flex 1
                    display flex
                    span
                        line-height .34rem
                    .cover
                        .empty 
                            display: block;
                            width: .34rem;
                            height: .34rem;
                            background: url("data:image/png;base64,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") no-repeat 50%
                            background-size: auto .3rem;

                .right
                    padding-right: .24rem;
                    background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAA1ElEQVQ4T63TO05CQRTG8d81xAZKNsAGKFyBOyBQSFwAmrgCK1dgozvwQWVDBy1SEnpjT2y1svKRY+YmhPC4k3iSySRz5j/nMd8pMMMJ3lSwAj9Yoov5PiaABY7wiTM87oICqOMevRTtGpf43gQGEBb7VVoHGOMUH+tQCZTnEeUODbygg9dVaB0IXxsjtPCeIk1KaBMQviaecIyvVFPU9pf7NqvhBhfpwkN0cRdQPnSOWxxi+q9AVkpZRWe1tfLHZUkjW3yr8h5guE/e2QP0jH7VEf0FqaQ3pe0rT/8AAAAASUVORK5CYII=") no-repeat 100%
                    background-size: .06rem .1rem;
                    .right-price 
                        color: #fc6232;
        .more 
            font-size: .12rem;
            color: #666;
            height: .42rem;
            line-height: .42rem;
            text-align: center;
            border-top: 1px solid #eee;      

.info
    padding 0 .14rem .1rem
    .title
        display flex
        justify-content center
        align-items center
        h1 
            flex 1
            font-size .16rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            padding-left .1rem
        img 
            width .28rem
            height .28rem
    .sub-title       
        color: #666;
        padding-top: .06rem;
.subsidy
    margin .05rem 0
    background #fafafa
    border 1px solid #eee
    border-radius .05rem
    .title
        padding .08rem .1rem
        border-bottom 1px solid #eee
        font-weight 500
    .content
        .subsidy-item
            border-bottom 1px solid #eee
            display flex
            line-height .42rem
            .left
                flex 1
                .title
                    font-size .14rem
                    font-weight normal
                    border-bottom 0px solid #eee
            .right
                display inline-block
                .right-price
                    padding-right .24rem
                    color #3eb052
                    .right-price-sign
                        font-size .12rem
                    .right-price-num
                        font-size .16rem
        .recycle-coupon-item
            display flex
            line-height .42rem
            .left
                flex 1
                .title
                    font-size .14rem
                    font-weight normal
                    border-bottom 0px solid #eee
            .right
                padding-right: .26rem;
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAA1ElEQVQ4T63TO05CQRTG8d81xAZKNsAGKFyBOyBQSFwAmrgCK1dgozvwQWVDBy1SEnpjT2y1svKRY+YmhPC4k3iSySRz5j/nMd8pMMMJ3lSwAj9Yoov5PiaABY7wiTM87oICqOMevRTtGpf43gQGEBb7VVoHGOMUH+tQCZTnEeUODbygg9dVaB0IXxsjtPCeIk1KaBMQviaecIyvVFPU9pf7NqvhBhfpwkN0cRdQPnSOWxxi+q9AVkpZRWe1tfLHZUkjW3yr8h5guE/e2QP0jH7VEf0FqaQ3pe0rT/8AAAAASUVORK5CYII=") no-repeat center center
                background-size: .06rem .1rem;
                
.ofn-banner-image
    width 100%
.nav
    width 100%
    height .44rem
    display flex
    align-items: center;
    justify-content: center;
    .item
        flex 1
        color #999
        text-align center
    .active
        color: #c79c56;
        
    .item:nth-of-type(2)
        border-left 1px solid #d9d9d9
        border-right 1px solid #d9d9d9

.introduction
    width 100%
    img
        width 100%
</style>