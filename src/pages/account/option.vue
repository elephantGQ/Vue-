<template>
    <div class="out">
        <p>{{opt}}<a>查看更多</a></p>
    </div>
</template>
<script>
export default {
    name:"option",
    props: {
    opt: String
  }
}
</script>
<style lang="stylus" scoped>
.out
    
    width 100%
    padding 0rem .14rem .1rem
    display flex
    justify-content center
    align-items center
    box-shadow: 0 0.01rem 0.2rem hsla(195,9%,83%,.3);
    p
        background #fff
        width 100%
        height .62rem
        padding 0 .12rem
        line-height .62rem
        font-size .16rem
        font-weight 700
        flex 1
        position relative
        a
            font-size .12rem
            font-weight  normal
            color #333
            position absolute
            right .1rem
            &:after
                content: "";
                display: inline-block;
                width: .06rem;
                height: .1rem;
                margin-left: .04rem;
                transform: translateY(.01rem);
                background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAQCAYAAAAvf+5AAAAAAXNSR0IArs4c6QAAALtJREFUKBWFjqsOwkAURBdEIUFgMFUoJA6JxtZjCbofgIavQGMJAoPiA3BIVBUGAaKBhPA4ExCQm92d5LTJnUl7nHNuCylE82BxhH5sOWRQwh3y2LjL4AAvWEADvGnSrEDjPXTAmwrNBOR9hgyCGdCe4AlTqII3bZodSGUZWiYMaqBcPy/7lNsF5Cpnuf9Ff5iB3OQoV5MWlw3ISW5yNOlxKUCjOdTBZMTl9mVs2p+DfPQ1fTWYNa38gnkDV+wkpd7RRpQAAAAASUVORK5CYII=") no-repeat 50%/cover

</style>
