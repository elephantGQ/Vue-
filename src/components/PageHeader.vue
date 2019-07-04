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
</style>



