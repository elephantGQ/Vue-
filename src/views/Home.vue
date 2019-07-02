<template>
<div class="homeMain">
    <top></top>
    <div class="container">

    <router-view></router-view>
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
<style lang="stylus">
.homeMain
    height 100%
    width 100%
    .container
        height 100%
        width 100%
        overflow scroll
</style>


