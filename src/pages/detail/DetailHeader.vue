<template>
    <header>
        <span class="back" @click="handleClickBack"></span>
    <h2>
        {{title}}
    </h2>
        </header>
</template>

<script>
export default {
  name: 'DetailHeader',
  props: {
    title: String
  },
  methods: {
      handleClickBack() {
      this.$router.go(-1)
    }, 
  },
}
</script>
<style lang="stylus" scoped>
@import '~@/assets/styles/border'
@import '~@/assets/styles/ellipsis'
header
    width 100%
    height .44rem
    text-align center
    line-height .44rem
    font-size .18rem
    box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.05);
    position relative
    z-index 1000
    h2
        font-weight 400
    .back
        position: absolute;
        left: 0;
        top: 0;
        width: .5rem;
        height: .44rem;
        background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAoCAMAAADT08pnAAAAP1BMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzJYIvAAAAFHRSTlMA+Tzd9Oq/ZlEtE6x+HwuU0N+X0TF2eHEAAACQSURBVCjPlZNbDoUgDAWv4gvfeLv/tZryY8LUVM7nNAGmpT87bbD52IjJDxGrMA9iFmJQ3oBPnfJuKvkqmhQLvC+ZD3PBtzPzC1Z9vnaklfK+pZXm3EwrWXbTStY6q/DZ6p/54Vg9CbBCwTnKuRzP9QTZEiQmNBFtRy4MCqP1Xfl96l1ThSvWAK7eqtH1dZ1vgBEQsMaM/J8AAAAASUVORK5CYII=") no-repeat 50%;
        background-size: .12rem;
</style>



