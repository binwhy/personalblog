<template>
  <div id="main-layout" class="all-main-content">
    <top-search/>
    <scroll
      ref="scroll"
      class="content"
      :probeType="3"
      :pullUpLoad=true
    >
      <div class="main">
        <div class="main-left">
          <div class="main-header">
            <slot name="main-header-content"></slot>
          </div>
          <div class="main-body">
           <slot name="main-body-content"></slot>
          </div>
        </div>

        <div class="main-right">

        </div>
      </div>
      <div class="bottom">
        <span>© 2020 Copyright</span>
      </div>

    </scroll>
  </div>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll';//滚动
  import TopSearch from "components/content/topSearch/TopSearch";

  export default {
    name: "mainLayout",
    components: {
      Scroll,
      TopSearch
    },
  }
</script>

<style scoped>
  .content {
    position: absolute;
    top: 50px;
    bottom: 0;
    width: 100%;
    height: calc(100% -50px);
    display: flex;
    flex-direction:column;
    overflow: hidden;
    background-color: #f1f3f4;
  }

  .main{
    position: relative;
    top: 3px;
    display: flex;
    flex-direction:row;
  }

  .bottom {
    position: relative;
    bottom: 0;
    height: 50px;
    background-color: #222222;
    padding: 15px;
    font-size: 14px;
    text-align: center;
  }

  .main-left {
    position: relative;
    flex: 1;
  }

  .main-right {
    position: relative;
    width: 220px;
    padding: 0 20px;
    background-color: #f9f9f9;
    min-height: 100vh;
  }

  .main-header {
    padding: 20px;
    background-color: #f9f9f9;
  }

  /*.main-header h1{*/
  /*  font-size: 36px;*/
  /*  height: 51px;*/
  /*  margin: 0;*/
  /*}*/

  /*.main-header small{*/
  /*  font-size: 13px;*/
  /*  height: 17px;*/
  /*  margin: 0;*/
  /*  color: #98A6AD;*/
  /*}*/

  .main-body {
    padding: 20px;
    /*height: 1000px;*/
    background-color: #f1f3f4;
  }
</style>
