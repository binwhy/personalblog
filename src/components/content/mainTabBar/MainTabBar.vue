<template>
  <tab-bar class="tab-bar">
    <div slot="top" class="tab-bar-top">
      <img src="~assets/img/mainTabBar/logo.svg" alt="">
    </div>
    <div slot="center" class="tab-bar-center">dddd</div>
    <div slot="bottom" class="tab-bar-bottom">fff</div>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  export default {
    name: "MainTabBar",
    components: {
      TabBar
    }
  }
</script>

<style scoped>
  .tab-bar {
    display: flex;
    position: relative;
    width: 100%;
  }

  .tab-bar-top {
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8%;
    background-color: red;
  }

  .tab-bar-center {
    background-color: yellow;
    position: absolute;
    top: 8%;
    bottom: 8%;
    width: 100%;
  }

  .tab-bar-bottom {
    position: absolute;
    bottom: 0;
    height: 8%;
    background-color: green;
    width: 100%;
  }

  img {
    height: 50px;
    width: 200px;
  }
</style>
