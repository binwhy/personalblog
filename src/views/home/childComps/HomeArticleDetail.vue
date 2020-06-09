<template>
  <main-layout>
    <div slot="main-header-content" class="header">
      <h1>文章详情</h1>
      <small>赠人玫瑰，手有余香。</small>
    </div>
    <div slot="main-body-content" class="article-edit">
      <mavon-editor v-model="articleContent"/>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from "components/content/mainLayout/MainLayout";
  export default {
    name: "HomeArticleDetail",
    components: {
      MainLayout
    },
    data() {
      return {
        articleContent:''
      }
    }
  }
</script>

<style scoped>
  .header h1{
    font-size: 36px;
    height: 51px;
    margin: 0;
  }

  .header small{
    font-size: 13px;
    height: 17px;
    margin: 0;
    color: #98A6AD;
  }
</style>
