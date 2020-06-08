<template>
  <div class="home-article-item" @click="articleClick">
    <img class="article-top" :src="article.img" alt="">
    <div class="article-bottom">
      <span class="article-title">{{article.title}}</span>
      <span class="article-summary">{{article.summary}}</span>
      <div class="article-info">
        <i class="el-icon-s-custom">{{article.author}}</i>
        <i class="el-icon-time">{{article.date}}</i>
        <i class="el-icon-chat-square">{{article.totalComment}}</i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeArticleItem",
    props:{
      article:{
        type:Object,
        default() {
          return {
            img:require('../../../assets/img/homeArticle/article-1.jpg'),
            title:'文章标题',
            summary:'文章摘要！！！文章摘要！！！文章摘要！！！',
            author:'作者',
            date:'2020 年 06 月 06 日',
            totalComment:16
          }
        }
      }
    },
    methods: {
      articleClick() {
        if (this.$route.path !== '/article'){
          this.$router.push('/article')
        }
      }
    }
  }
</script>

<style scoped>
  .home-article-item {
    margin-bottom: 20px;
    background-color: #ffffff;
    border-radius: 10px;
  }

  .article-top {
    height: 185px;
    width: 100%;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
  }

  .article-bottom {
    padding: 30px;

    display: flex;
    flex-direction:column;
    align-items: flex-start;
    color: #98A6AD;
  }

  .article-title {
    height: 25px;
    margin: 0 0 10px;
    font-size: 20px;
    color: #555555;
  }

  .article-summary {
    width: 100%;
    min-height: 100px;
    margin: 0 0 10px;
    font-size: 14px;
    word-break:normal;
    /*给底边加阴影*/
    box-shadow: 0 2px 0  rgba(222,229,231,.45);;
  }

  .article-line {
    /*border-bottom: 1px solid rgba(222,229,231,.45);*/
    border-color: rgba(237,241,242,.6);
    margin-top: 15px;
    margin-bottom: 15px;
  }

  .article-info {
    position: relative;
    font-size: 13px;
    bottom: 0;
  }

  .el-icon-s-custom ,.el-icon-time {
    margin-right: 10px;
  }
</style>
