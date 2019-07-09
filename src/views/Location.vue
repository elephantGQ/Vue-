<template>
   <div class="main">
       <detail-header :title="title"></detail-header>
<div class="searchbar-container">
    <div class="searchbar-input">
       <span class="iconfont " style="color: rgb(0, 0, 0);">&#xe63c;</span><input type="text" placeholder="请输入城市名称查询" value="">
    </div>
</div>
<div class="hotcity-container"><span>热门城市</span>
    <ul class="cityList">
       
        <li class="" 
        v-for="(e,index) in hot" 
        :key="index" 
        :id="e.id"
        @click="selectLoc({name:e.name,id:e.id})"
        >{{e.name}}</li>
    </ul>
</div>
<div class="citylist-container">
    <ul>
        <li v-for="(value,key,index) in loc" :key="index"><span id="key">{{key}}</span>
            <dl>
                <dt 
                v-for="(e,index) in value" 
                :key="index" 
                :id="e.id"
                @click="selectLoc({name:e.name,id:e.id})"
                >{{e.name}}</dt>
               
            </dl>
        </li>

        
    </ul>
</div>
<div class="touchBar-container">
    <ul>
        <li>#</li>
        <li>A</li>
        <li>B</li>
        <li>C</li>
        <li>D</li>
        <li>E</li>
        <li>F</li>
        <li>G</li>
        <li>H</li>
        <li>J</li>
        <li>K</li>
        <li>L</li>
        <li>M</li>
        <li>N</li>
        <li>P</li>
        <li>Q</li>
        <li>R</li>
        <li>S</li>
        <li>T</li>
        <li>W</li>
        <li>X</li>
        <li>Y</li>
        <li>Z</li>
    </ul>
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
            title:"选择城市",
            loc:{},
            hot:[]
        }
    },
    methods: {
        selectLoc(obj){
             this.$store.commit('setLoc',obj)
             this.$router.go(-1)
        }

    },
    components:{
        DetailHeader
    },
    async mounted() {
    Indicator.open({
    text: 'Loading...',
    spinnerType: 'snake'
    });
      let result= await http.get({
          url:"/api/city/all"
      })  
    //   过滤出热门城市
       this.hot=_.filter(result.data, function(o) { return o.isHot; });
        //  先按字母排序
      result.data=_.sortBy(result.data, function(o) { return o.character })
        //   按字母分组
       
      
      this.loc=_.groupBy(result.data, function(item){
        return item['character'] 
      })
      Indicator.close()
    //   console.log(_.sortBy(this.loc, function(o) { console.log(o) }))
    },
}
</script>
<style lang="stylus" scoped>
.main
    height 100%
    width 100%
    overflow scroll
.searchbar-container
    width 100%
    height .46rem
    background #d8d8d8
    padding .08rem .15rem

    .searchbar-input
        position relative
        height .3rem
        background #fff
        border-radius: .04rem;
        span 
            position absolute
            width .13rem
            height .13rem
            left .1rem
            top .03rem
        input
            border 0
            background none 
            width 100%
            padding-left .32rem 
            height .3rem
.hotcity-container
    width 100%
    padding .15rem
    background-color: #f2f2f2
    span
        color #ccc
    .cityList
        li 
            display inline-block
            height  .35rem
            width .75rem
            border 1px solid #e6e6e6
            background-color #fff
            margin-top .1rem
            margin-right .1rem
            line-height .35rem
            text-align center
.citylist-container
    width 100%
    ul
        li
            span
                height .3rem
                width 100%
                display block
                background-color #f2f2f2
                padding 0 .15rem
                line-height .3rem
            dt 
                color #333
                font-size .14rem
                width 100%
                height .46rem
                line-height .46rem
                border-bottom 1px solid #f2f2f2
                padding 0 .15rem
.touchBar-container
    position fixed
    top 0
    right 0
    margin 1rem 0 .15rem
    width .16rem
    background-color #fff
    height 100%
    li 
        display block
        width .16rem
        height .22rem
        text-align center
        line-height .21rem
        color #333

</style>
