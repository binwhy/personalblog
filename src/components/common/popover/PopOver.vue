<template>
  <div class="pop-over" v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "PopOver",
    props:{
      isShow:Boolean,
      default:false
    }
  }
</script>

<style scoped>
  .pop-over {
    position: fixed;
    top: 50px;
    right: 6%;
    color: #58666E;
    background-color: #f9f9f9;
    border-radius: 4px;
    z-index: 9;
  }
</style>
