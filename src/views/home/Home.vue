<template>
  <div id="home" class="all-main-content">
    <top-search/>
    <scroll
      ref="scroll"
      class="content"
      :probeType="3"
      :pullUpLoad=true
    >
      <div class="main">
        <div class="main-left">
          <div class="home-header">
            <h1>Baymax2dm's Blog</h1>
            <small>赠人玫瑰，手有余香。</small>
          </div>
          <div class="home-body">
            <home-article/>
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

  import HomeArticle from "./childComps/HomeArticle";
  export default {
    name: "Home",
    components: {
      Scroll,
      TopSearch,
      HomeArticle
    },
    data() {
      return {
        message: "hi 我的博客-day5"
      }
    },
    activated() {
      // let header = document.querySelector('.home-header');
      // let body = document.querySelector('.home-header');
      // let content = document.querySelector('.content');
      // content.height = header.offsetHeight + body.offsetHeight;
    },
    methods: {

    }
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
    /*display: flex;*/
    /*flex-direction:column;*/
  }

  .main-right {
    position: relative;
    width: 220px;
    padding: 0 20px;
    background-color: #f9f9f9;
  }

  .home-header {
    height: 111px;
    padding: 20px;
    background-color: #f9f9f9;
  }

  .home-header h1{
    font-size: 36px;
    height: 51px;
    margin: 0;
  }

  .home-header small{
    font-size: 13px;
    height: 17px;
    margin: 0;
    color: #98A6AD;
  }

  .home-body {
    padding: 20px;
    /*height: 1000px;*/
    background-color: #f1f3f4;
  }

</style>
