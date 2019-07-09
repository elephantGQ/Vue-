<template>
    <div class="main">
        <header >
            <span  class="back" @click="handleClickBack"></span>
            <router-link tag="div" to="/search">
                <span class="iconfont" >&#xe63c;</span>
                <span>苹果 iPhone X</span>
                </router-link>
            </header>
    <div class="headerNav">
      <ul>
        <li   
        @click="handleClickTop(1,0)"
        :class="topflag === 0 ? 'active' : '' "
        class="first">
          <b>卖手机
              <span></span>
          </b>
          
        </li>
        <li
        @click="handleClickTop(5,1)"
        :class="topflag === 1 ? 'active' : '' "
        >
          <b>
              卖笔记本
              <span></span>
          </b>
          
        </li>
        <li
        @click="handleClickTop(6,2)"
        :class="topflag === 2 ? 'active' : '' "
        >
          <b>卖平板
              <span></span>
          </b>
          
        </li>
        <li
        @click="handleClickTop(22,3)"
        :class="topflag === 3 ? 'active' : '' "
        >
         <b>摄影摄像
              <span></span>
          </b>
          
        </li>
        <li
        @click="handleClickTop(3,4)"
        :class="topflag === 4 ? 'active' : '' "
        >
         <b>智能数码
              <span></span>
          </b>
          
        </li>
      </ul>
    </div>
    <div class="container">
        <div class="left">
            <ul><li 
            :class="leftflag === 0 ? 'chosen' : '' "
            v-show="leftlist.length"
            ><p>推荐</p></li>
            <li class=""
            v-for="(item,index) in leftlist" :key="item.id" :id="item.id"
            :class="leftflag === index+1 ? 'chosen' : '' "
            @click="handleClickLeft(item.id,index+1)"
            ><p>{{item.name}}</p></li>
            </ul>
        </div>
        <div class="right">
        <div>
            <div class="common-item" 
            v-for="(item,index) in rightlist" :key="item.id" :id="item.id"
            ><p><span>{{index+1}}</span><span>{{item.name}}</span></p></div>
        </div>
        </div>
    </div>
    </div>
</template>
<script>
import Swiper from 'swiper'
import http from '../utils/http'
import BScroll from 'better-scroll'
import { Indicator, Toast } from 'mint-ui'
export default {
    data() {
        return {
            leftlist:[],
            rightlist:[],
            topflag:0,
            leftflag:0
        }
    },
    async mounted() {
    let urlList=[1,5,6,22,3]
    this.topflag=Number(this.$route.params.pid)
    Indicator.open({
    text: 'Loading...',
    spinnerType: 'snake'
    });
      let resultL= await http.get({
          url:`/api/product/category-brands/${urlList[this.$route.params.pid]}`
      })  
     this.leftlist=resultL.data
    let resultR=await http.post({
        url:"api/product/search",
        headers:{
            "Content-Type":"application/json;charset=UTF-8"
        },
        data:{"categoryId":urlList[this.$route.params.pid],"brandId":"","pageIndex":0,"pageSize":20,"isRecommend":true,"refresh":true}
        })
     this.rightlist=resultR.data
     console.log(resultR.data)
     Indicator.close()
    },
    methods: {
    handleClickBack() {
      this.$router.go(-1)
    },
    async handleClickLeft(id,index){
        this.leftflag=index
       Indicator.open({
        text: 'Loading...',
        spinnerType: 'snake'
        });
        
         let resultR=await http.post({
            url:"api/product/search",
            headers:{
                "Content-Type":"application/json;charset=UTF-8"
            },
            data:{"brandId":id,"pageIndex":0,"pageSize":20,"isRecommend":false,"refresh":true}
            })
            console.log(resultR)
            this.rightlist=resultR.data  
            Indicator.close()
        },
        async handleClickTop(id,index){
            this.topflag=index
            this.leftflag=0
            Indicator.open({
            text: 'Loading...',
            spinnerType: 'snake'
            });
            let resultL= await http.get({
            url:`/api/product/category-brands/${id}`
         })  
            this.leftlist=resultL.data
            console.log(resultL)
            let resultR=await http.post({
                url:"api/product/search",
                headers:{
                    "Content-Type":"application/json;charset=UTF-8"
                },
                data:{"categoryId":id,"brandId":"","pageIndex":0,"pageSize":20,"isRecommend":true,"refresh":true}
                })
                console.log(resultR)
            this.rightlist=resultR.data  
            Indicator.close()
        },
       
    
    
    
    },
}
</script>
<style lang="stylus" scoped>
.main
    display flex
    flex-direction column
header
    width 100%
    height .44rem
    text-align center
    line-height .44rem
    font-size .18rem
    box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
    position relative
    padding-right  .25rem
    z-index 1000
    display flex
    >div 
        flex 1
        height: .3rem;
        background-color: #f9faff;
        border-radius: .18rem;
        text-align left 
        line-height .3rem
        padding-left .16rem
        span
            font-size  .12rem
            color #777
            line-height .3rem
        .iconfont 
            display inline-block
            font-size .2rem
            color black
            padding-right .08rem
    .back
        width: .5rem;
        height: .44rem;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMA+Tzd9Oq/ZlEtE6x+HwuU0N+X0TF2eHEAAACQSURBVCjPlZNbDoUgDAWv4gvfeLv/tZryY8LUVM7nNAGmpT87bbD52IjJDxGrMA9iFmJQ3oBPnfJuKvkqmhQLvC+ZD3PBtzPzC1Z9vnaklfK+pZXm3EwrWXbTStY6q/DZ6p/54Vg9CbBCwTnKuRzP9QTZEiQmNBFtRy4MCqP1Xfl96l1ThSvWAK7eqtH1dZ1vgBEQsMaM/J8AAAAASUVORK5CYII=") no-repeat 50%;
        background-size: .12rem;
.headerNav
    background #fff
    ul
        padding-right  0
        li
            padding-left .2rem
        .first 
            padding-left .1rem
.container
    flex 1
    display flex
    .left
        width .8rem
        overflow scroll
        li 
            height .56rem
            line-height .56rem
            text-align center
            border-right 1px solid #e1e1e1
            border-bottom 1px solid #e1e1e1
            position relative
        .chosen
            background-color #f9faff
            border none
        .chosen:before
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: .06rem;
            height: .56rem;
            background-color: #f9e72c;    

    .right 
        flex 1
        overflow scroll
        .common-item
            height .56rem
            line-height .56rem
            border-bottom: 1px solid #eee
            background-color #f9faff
            overflow hidden
            span 
                padding-left .13rem
        .load-over 
            font-size: .12rem;
            color: #999;
            position: relative;
            bottom: 0;
            height: .8rem;
            width: 100%;
            max-width: 2.95rem;
            line-height: .8rem;
            text-align: center;
            &:before,&:after
                content: "";
                position: absolute;
                width: .33rem;
                height: .02rem;
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAECAYAAAA6VemZAAAAW0lEQVQ4T2NkGAXgEGD8//+//b9//xz+/fvHAMIgAGNj4+NSR6xecs0nRh+6GlzuR1f358+fmRgBQYyHQAb9+fMHJdBwiSEHKrGBTa6HiHE7NjXggBjNGZAQAADJdjfCcoW1ZgAAAABJRU5ErkJggg==") no-repeat;
                background-size: 100%;
                top: 50%;
                transform: translateY(-50%);
                left: .78rem;
</style>
