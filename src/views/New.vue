<template>
  <div class="main">
      <page-header :title="title"></page-header>
<div class="container" v-if="datalist.length">
    <div class="swiper">
  

   
    <div class="swiper-container">
              <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in datalist[0].items" :key=item.id><a href="" ><img :src=item.imageUrl></a>
                </div>
                </div>
                 <div class="swiper-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
                </div>
                
   </div>
   <div class="single-image"><a href="javascript:;"><img :src=datalist[1].items[0].imageUrl></a></div>
 
   <div class="new-product" v-for="item in [2,3,4,5,6,7]" :key=item>
 <div class="page-new-product left" @click="handleClick(datalist[item].items[0].items[0].productId)" :id="datalist[item].items[0].items[0].productId">
    <div class="img-part"><img
            :src=datalist[item].items[0].items[0].imgUrl>
        <div class="tip"><span class="text">{{datalist[item].items[0].items[0].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[0].subsidies}}</span></div>
    </div>
    <div class="text-part one-price">
        <div class="text"><span class="title">{{datalist[item].items[0].items[0].name}}</span><span class="sale">{{datalist[item].items[0].items[0].promotionText}}</span></div>
        <p class="price"><span class="old">官方指导价<i>￥</i><i class="num">{{datalist[item].items[0].items[0].price}}</i></span></p>
        <div class="btns">
            <div class="buy-now">立即换新</div>
        </div>
    </div>
</div>
   </div>
 
 
  
     <div class="single-image"><a href="javascript:;"><img :src=datalist[8].items[0].imageUrl></a></div>
<div class="new-product-two" v-for="item in [9,10]" :key="item">
 <div class="page-new-product two-product">
    <div class="product" @click="handleClick(datalist[item].items[0].items[0].productId)" :id="datalist[item].items[0].items[0].productId">
        <div class="top-part"><img
                :src=datalist[item].items[0].items[0].imgUrl>
            <div class="tip"><span class="text">{{datalist[item].items[0].items[0].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[0].subsidies}}</span></div>
        </div>
        <div class="bottom-part">
            <p class="text"><span class="title">{{datalist[item].items[0].items[0].name}}</span><span class="sale">{{datalist[item].items[0].items[0].promotionText}}</span>
            </p>
            <p class="price"><span class="new">换新到手价￥<i class="num">{{datalist[item].items[0].items[0].price-datalist[item].items[0].items[0].subsidies}}</i></span><del class="old">官方指导价：￥<i
                        class="num">{{datalist[item].items[0].items[0].price}}</i></del></p>
            <div class="btns">
                <div class="buy-now">立即换新</div>
                
            </div>
            <img class="gift-tag-img" v-if="datalist[item].items[0].items[0].isShowGiftTag"
                :src=datalist[item].items[0].items[0].giftTagImage>
        </div>
    </div>
    <div class="jx"></div>
    <div class="product" @click="handleClick(datalist[item].items[0].items[1].productId)" :id="datalist[item].items[0].items[1].productId">
        <div class="top-part"><img
                :src=datalist[item].items[0].items[1].imgUrl>
            <div class="tip"><span class="text">{{datalist[item].items[0].items[1].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[1].subsidies}}</span></div>
        </div>
        <div class="bottom-part">
            <p class="text"><span class="title">{{datalist[item].items[0].items[1].name}}</span><span class="sale">{{datalist[item].items[0].items[1].promotionText}}</span>
            </p>
            <p class="price"><span class="new">换新到手价￥<i class="num">{{datalist[item].items[0].items[1].price-datalist[item].items[0].items[1].subsidies}}</i></span><del class="old">官方指导价：￥<i
                        class="num">{{datalist[item].items[0].items[1].price}}</i></del></p>
            <div class="btns">
                <div class="buy-now">立即换新</div>
                
            </div>
            <img class="gift-tag-img" v-if="datalist[item].items[0].items[1].isShowGiftTag"
                :src=datalist[item].items[0].items[1].giftTagImage>
        </div>
    </div>
    </div>

</div>

  <div class="single-image"><a href="javascript:;"><img :src=datalist[11].items[0].imageUrl></a></div>
  
<div class="new-product-two" v-for="item in [12,13,14,15,16,17]" :key="item">
 <div class="page-new-product two-product">
    <div class="product" @click="handleClick(datalist[item].items[0].items[0].productId)" :id="datalist[item].items[0].items[0].productId">
        <div class="top-part"><img
                :src=datalist[item].items[0].items[0].imgUrl>
            <div class="tip"><span class="text">{{datalist[item].items[0].items[0].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[0].subsidies}}</span></div>
        </div>
        <div class="bottom-part">
            <p class="text"><span class="title">{{datalist[item].items[0].items[0].name}}</span><span class="sale">{{datalist[item].items[0].items[0].promotionText}}</span>
            </p>
            <p class="price"><span class="new">换新到手价￥<i class="num">{{datalist[item].items[0].items[0].price-datalist[item].items[0].items[0].subsidies}}</i></span><del class="old">官方指导价：￥<i
                        class="num">{{datalist[item].items[0].items[0].price}}</i></del></p>
            <div class="btns">
                <div class="buy-now">立即换新</div>
                
            </div>
            <img class="gift-tag-img" v-if="datalist[item].items[0].items[0].isShowGiftTag"
                :src=datalist[item].items[0].items[0].giftTagImage>
        </div>
    </div>
    <div class="jx"></div>
    <div class="product" @click="handleClick(datalist[item].items[0].items[1].productId)" :id="datalist[item].items[0].items[1].productId">
        <div class="top-part"><img
                :src=datalist[item].items[0].items[1].imgUrl>
            <div class="tip"><span class="text">{{datalist[item].items[0].items[1].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[1].subsidies}}</span></div>
        </div>
        <div class="bottom-part">
            <p class="text"><span class="title">{{datalist[item].items[0].items[1].name}}</span><span class="sale">{{datalist[item].items[0].items[1].promotionText}}</span>
            </p>
            <p class="price"><span class="new">换新到手价￥<i class="num">{{datalist[item].items[0].items[1].price-datalist[item].items[0].items[1].subsidies}}</i></span><del class="old">官方指导价：￥<i
                        class="num">{{datalist[item].items[0].items[1].price}}</i></del></p>
            <div class="btns">
                <div class="buy-now">立即换新</div>
                
            </div>
            <img class="gift-tag-img" v-if="datalist[item].items[0].items[1].isShowGiftTag"
                :src=datalist[item].items[0].items[1].giftTagImage>
        </div>
    </div>
    </div>

</div>


  <div class="single-image"><a href="javascript:;"><img :src=datalist[18].items[0].imageUrl></a></div>
<div class="new-product-two" v-for="item in [19]" :key="item">
 <div class="page-new-product two-product">
    <div class="product" @click="handleClick(datalist[item].items[0].items[0].productId)" :id="datalist[item].items[0].items[0].productId">
        <div class="top-part"><img
                :src=datalist[item].items[0].items[0].imgUrl>
            <div class="tip"><span class="text">{{datalist[item].items[0].items[0].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[0].subsidies}}</span></div>
        </div>
        <div class="bottom-part">
            <p class="text"><span class="title">{{datalist[item].items[0].items[0].name}}</span><span class="sale">{{datalist[item].items[0].items[0].promotionText}}</span>
            </p>
            <p class="price"><span class="new">换新到手价￥<i class="num">{{datalist[item].items[0].items[0].price-datalist[item].items[0].items[0].subsidies}}</i></span><del class="old">官方指导价：￥<i
                        class="num">{{datalist[item].items[0].items[0].price}}</i></del></p>
            <div class="btns">
                <div class="buy-now">立即换新</div>
                
            </div>
            <img class="gift-tag-img" v-if="datalist[item].items[0].items[0].isShowGiftTag"
                :src=datalist[item].items[0].items[0].giftTagImage>
        </div>
    </div>
    <div class="jx"></div>
    <div class="product" @click="handleClick(datalist[item].items[0].items[1].productId)" :id="datalist[item].items[0].items[1].productId">
        <div class="top-part"><img
                :src=datalist[item].items[0].items[1].imgUrl>
            <div class="tip"><span class="text">{{datalist[item].items[0].items[1].subsidyText}}</span><span class="price"><i>￥</i>{{datalist[item].items[0].items[1].subsidies}}</span></div>
        </div>
        <div class="bottom-part">
            <p class="text"><span class="title">{{datalist[item].items[0].items[1].name}}</span><span class="sale">{{datalist[item].items[0].items[1].promotionText}}</span>
            </p>
            <p class="price"><span class="new">换新到手价￥<i class="num">{{datalist[item].items[0].items[1].price-datalist[item].items[0].items[1].subsidies}}</i></span><del class="old">官方指导价：￥<i
                        class="num">{{datalist[item].items[0].items[1].price}}</i></del></p>
            <div class="btns">
                <div class="buy-now">立即换新</div>
                
            </div>
            <img class="gift-tag-img" v-if="datalist[item].items[0].items[1].isShowGiftTag"
                :src=datalist[item].items[0].items[1].giftTagImage>
        </div>
    </div>
    </div>

</div>
  <div class="single-image"><a href="javascript:;"><img src="https://sr.aihuishou.com/sos/image/6368308736179278501250759584.png?x-oss-process=image/quality,q_80&amp;size=750x656" alt=""></a></div>
  <div class="single-image"><a href="javascript:;"><img src="https://sr.aihuishou.com/sos/image/636783346407056120344016565.png?x-oss-process=image/quality,q_80&amp;size=750x210" alt=""></a></div>
</div>
  
  </div>
</template>
<script>
import { Indicator, Toast } from 'mint-ui'
import Swiper from 'swiper'
import http from '../utils/http'
import PageHeader from '@/components/PageHeader.vue'
export default {
     name:"new",
     data() {
         return {
             title:"爱回收 0元换新机",
             datalist:[]
         }
     },
    async mounted() {
        
        Indicator.open({
        text: 'Loading...',
        spinnerType: 'snake'
        });    
         let result = await http.get({
            url: `/api/ofnew/home?cityId=31`,
            headers:{
                "Ahs-Guid":"caa630a4-df46-10cc-950b-7fef5cae5ad3",
                "Ahs-App-Id":"10002"
            }
            })
            this.datalist=result.data
            console.log(this.datalist)
            Indicator.close()
             this.$nextTick( async() => {
                var mySwiper = new Swiper('.swiper-container', {
                autoplay: true,//可选选项，自动滑动
                pagination: {
                    el: '.swiper-pagination',
                },
                })
             })
    // Indicator.open({
    //   text: '加载中...',
    //   spinnerType: 'triple-bounce'
    // })
   
     },
  methods: {
    handleClick(pid) {
        this.$router.push({
        name: 'detail',
        params: {
            pid
            }
            })
        },
  },
     components:{
         PageHeader
     }
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border'
@import '~@/assets/styles/ellipsis'
html,body 
    height 100%
    width 100%  
.swiper-pagination-bullet 
    width .05rem !important
    height .05rem !important
    display inline-block
    border-radius 100%
    background #fff
    opacity 0.2
.swiper-pagination-bullet-active
    opacity: 1;
    background: #fff;   
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
    .swiper-container
        margin 0 .14rem
        .swiper-wrapper
            .swiper-slide
                width 3.47rem
                height 2.08rem
                float left
                a 
                    display inline-block
                    img 
                        width 3.47rem
                        height 2.08rem
            
    .swiper
        padding-bottom .1rem
        background #fff
       
    .swiper-pagination
        background none
        
        
          
    .new-product
        padding  0 0 .1rem
        .page-new-product
            height 1.5rem
            width 100%
            background #fff
            display flex
            justify-content center
            align-items center
            padding  0 .2rem
            
            .img-part
                height 1.2rem
                width 1.2rem
                position relative
                img 
                    height 1.2rem
                .tip
                    font-size: .1rem;
                    color: #fff;
                    text-align: center;
                    width: .5rem;
                    height: .46rem;
                    padding: .09rem 0;
                    background: linear-gradient(90deg,#ff4949,#ff6830);
                    border-radius: 0 .16rem;
                    position: absolute;
                    left: -.04rem;
                    top: -.02rem;
                    span.price
                        font-size .14rem
                        font-weight: 700;
                        line-height 1em
                        i
                            font-size: .12rem;
                            font-weight: 400;

            .text-part
                flex 1
                width 100%
                height 100%
                display flex
                flex-direction column
                align-items center 
                justify-content center
                overflow hidden
                .text
                    width 100%
                    
                    .title
                        display block
                        width 100%
                        font-size .16rem
                        font-weight 700
                        height .22rem
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                       
                    .sale
                        padding-top .04rem
                        display block
                        white-space nowrap
                        overflow hidden
                        text-overflow ellipsis
                .price
                    width 100%
                    padding .1rem 0
                    .old 
                        color #777
                        font-size .12rem
                        .num
                            font-size: .16rem;
                            font-weight: 700;
                            color #000
                .buy-now 
                    font-size: .12rem;
                    color: #000;
                    width: 1rem;
                    height: .3rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    background-color: #ffcd09;
                    border-radius: .15rem;

    .new-product-two
        padding  0 0 .1rem
        .page-new-product
            display flex
            height 2.9rem
            .jx 
                width .11rem
            .num
                font-size: .16rem;
                font-weight: 700;          
            .product
                    flex 1
                    display flex
                    flex-direction column
                    justify-content flex-start
                    align-items center
                    background #fff
                    width 1.82rem
                    position relative
                    .top-part 
                        height 1.4rem
                        position relative
                        padding .2rem 0
                        img 
                            height 1.2rem
                         .tip
                            font-size: .1rem;
                            color: #fff;
                            text-align: center;
                            width: .5rem;
                            height: .46rem;
                            padding: .09rem 0;
                            background: linear-gradient(90deg,#ff4949,#ff6830);
                            border-radius: 0 .16rem;
                            position: absolute;
                            left: -.04rem;
                            top: -.02rem;
                            span.price
                                
                                font-size .14rem
                                font-weight: 700;
                                line-height 1em
                                i
                                    font-size: .12rem;
                                    font-weight: 400;
                    .bottom-part
                        padding-top .1rem
                        padding-left .14rem
                        width 100%
                        overflow hidden
                        img 
                            width: .56rem;
                            height: .4rem;
                            position: absolute;
                            right: .08rem;
                            bottom: .14rem;
                        .text
                            width 100%
                            overflow hidden
                            .title
                                display block
                                width 100%
                                font-size .14rem
                                font-weight 700
                                height .22rem
                                white-space nowrap
                                overflow hidden
                                text-overflow ellipsis
                            
                            .sale
                                padding-top .03rem
                                display block
                                font-size: .12rem;
                                color #111
                                white-space nowrap
                                overflow hidden
                                text-overflow ellipsis
                                
                        .price
                            .new
                                font-size: .12rem;
                                display: block;
                                color #ff2400
                            .old
                                color: #999;
                                font-size: .1rem;
                                display: block;
                                text-decoration line-through
                        .btns 
                            position: absolute;
                            left: .14rem;
                            bottom: .14rem;
                            .buy-now 
                                font-size: .12rem;
                                color: #000;
                                width: 1rem;
                                height: .3rem;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                text-align: center;
                                background-color: #ffcd09;
                                border-radius: .15rem;


</style>
