<template>
<div class="homeMain">
    <top></top>
    <div class="container">
<transition :name="transitionName">
    <router-view></router-view>
</transition>
    </div>
</div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Top from '@/pages/home/top.vue'
export default {
  name: "home",
  components: {
    HelloWorld,
    Top
  },
  watch: {
    '$route' (to, from) {
      // console.log(to.meta, from.meta)
      this.transitionName = to.meta > from.meta ? 'slide-left' : 'slide-right'
    }
  }
};
</script>
<style lang="stylus" scoped>
.homeMain
    height 100%
    width 100%
    display flex
    flex-direction column
    .container
        height 100%
        width 100%
        overflow scroll
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.slide-left-enter-active,
.slide-right-enter-active,
.slide-left-leave-active,
.slide-right-leave-active
  transition all .3s

.slide-left-enter,
.slide-right-leave-to
  transform translate3d(100%, 0, 0)
.slide-left-leave-to,
.slide-right-enter
  transform translate3d(-100%, 0, 0)
</style>


