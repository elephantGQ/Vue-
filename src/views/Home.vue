<template>
<div class="homeMain">
    <top></top>
    <div class="container">
<transition name="fade">
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
</style>


