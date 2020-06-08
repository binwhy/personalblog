<template>
  <main-layout>
    <div slot="main-header-content" class="home-header">
      <h1>Baymax2dm's Blog</h1>
      <small>赠人玫瑰，手有余香。</small>
    </div>
    <home-article slot="main-body-content"></home-article>
  </main-layout>
</template>

<script>
  import MainLayout from "components/content/mainLayout/MainLayout";
  import HomeArticle from "./childComps/HomeArticle";
  export default {
    name: "Home",
    components: {
      MainLayout,
      HomeArticle
    },
    data() {
      return {
        message: "hi 我的博客-day6"
      }
    },
    methods: {

    }
  }
</script>

<style scoped>

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
</style>
