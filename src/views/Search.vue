<template>
<div class="index-container">
    <main>
   <header id="header" class="header"><label class="form">
       <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe63c;</span>
        <div  class="ahs-ued-input small">
            <div  class="input-box nolabel"><input  type="text"
            v-model="question"
                    placeholder="苹果 iPhone X">
            </div>
        </div>
    </label>
    <div class="btn-cancel">取消</div>
</header>
<div class="search-container">
    <div class="search-content" v-show="flag">
        <div class="search-hot">
            <div class="title">
                热门搜索
            </div>
            <ul>
                <li v-for="item in recommendList" :id="item.id" :key="item.id">
                    {{item.name}}
                </li>

                <li class="hot-split"></li>
                <li v-for="item in hot" :id="item.id" :key="item.id" class="hot">
                    {{item.name}}
                </li>

            </ul>
        </div>

    </div>
    <div class="searchList">
        <ul><li v-for="item in product" :id="item.id" :key="item.id"><div class="product-name">
        {{item.name}}
      </div> <div class="amount"><div class="amount-label">
          最高回收价
        </div> <div class="amount-value">
          ￥{{item.avgPrice}}
        </div></div></li></ul>
    </div>
</div>
   
   </main>
  </div>
</template>
<script>
import Swiper from 'swiper'
import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
import _ from 'lodash'
export default {
    name:"search",
    data() {
        return {
            question: '',
            recommendList:[],
            hot:[],
            flag:true,
            product:[]

        }
    },
    watch: {
        question: function () {
        if(this.question=="") this.flag=true
        else  this.flag=false
        this.debouncedGetAnswer()
        }
    },
    created: function () {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
    },
    methods:{
    getAnswer: async function () {
      var vm = this
        let result=await http.post({
        url:"api/product/search",
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        data:{"keyWord":this.question,"pageIndex":1,"pageSize":20,"categoryId":"","brandId":""}
        })
        this.product=result.data
        console.log(this.product)
    }
    },
    // 推荐的接口
    // https://m.aihuishou.com/portal-api/product/hot/productlist?count=8
    // 推荐的小标签
    // https://m.aihuishou.com/portal-api/product/hot/brands?count=6
    async mounted() {
    // 
    Indicator.open({
    text: 'Loading...',
    spinnerType: 'snake'
    });
    let result =await  http.get({
        url:"api/product/hot/productlist?count=8"
    }) 
    this.recommendList=result.data
    let result2 =await  http.get({
        url:"api/product/hot/brands?count=6"
    }) 
    this.hot=result2.data
    Indicator.close()
   
   
    console.log(result.data)
    },
}
</script>
<style lang="stylus" scoped>
header 
    height .44rem
    padding 0 .15rem
    display flex
    justify-content center
    align-items center
    span 
        padding 0 .1rem
        color rgb(153, 153, 153) !important
    label
        border-radius: 0.02rem;
        box-sizing: border-box;
        width: 3rem;
        height: 0.28rem !important;
        background-color: #f5f5f5;
        flex 1
        display flex
        justify-content center
        align-items center
        .ahs-ued-input
            flex 1
            input 
                background none
                border  0
                width 100%
                color #333
    .btn-cancel
            padding-left .15rem    

.search-container
    width 100%
    height 100%
    overflow scroll
    .search-content
        width 100%
        height 100%
        .search-hot
            padding 0 .15rem
            .title
                width 100%
                height .51rem
                font-size .15rem
                padding  0.2rem 0.12rem 0.12rem 0;
                color: #999;
            ul
                li
                  display inline-block
                  padding 0 .1rem
                  background-color #f8f8f8 
                  height .3rem
                  line-height .3rem 
                  margin  0 .12rem .12rem 0
                  font-size .13rem
                  color #333
                  font-weight 300
                .hot-split
                    display block
                    height 0
                    margin  0
                .hot
                    background-color #F0F7FF
                    color #4A90E2
                    padding 0 .08rem
    .searchList
        width 100%
        ul
            width 100%
            padding  0 .15rem
            li
                width 100%
                height .56rem
                font-size .14rem
                color #333
                display flex
                justify-content center
                align-items center
                .product-name
                    flex 1
                    font-weight 400
                .amount
                    display flex
                    flex-direction column
                    justify-content center
                    align-items flex-end
                    width .6rem
                    .amount-label
                        font-size .12rem
                        color #999
                    .amount-value    
                        text-align right
                        color #FF6D1A
                        font-size .14rem
                        line-height .18rem    
        
</style>
