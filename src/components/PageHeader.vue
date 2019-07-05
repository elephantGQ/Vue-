<template>
    <header>{{title}}</header>
</template>

<script>
export default {
  name: 'PageHeader',
  props: {
    title: String
  }
}
</script>
<style lang="stylus" scoped>
header
    width 100%
    height .44rem
    text-align center
    line-height .44rem
    font-size .18rem
    box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
    position relative
    z-index 1000
</style>



