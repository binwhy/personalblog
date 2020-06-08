<template>
  <div class="home-article">
    <home-article-item v-for="(item,index) in articles" :key="index" :article="item"/>

    <div class="home-next-nav">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="pageSize"
        :pager-count=5
        @current-change="pageChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import HomeArticleItem from "./HomeArticleItem";
  export default {
    name: "HomeArticle",
    components:{
      HomeArticleItem
    },
    data() {
      return {
        articles:[
          {
            img:require('../../../assets/img/homeArticle/article-2.jpg'),
            title:'文章标题',
            summary:'文章摘要！！！文章摘要！！！文章摘要！！！',
            author:'作者',
            date:'2020 年 06 月 06 日',
            totalComment:16
          },
          {
            img:require('../../../assets/img/homeArticle/article-3.jpg'),
            title:'文章标题',
            summary:'文章摘要！！！文章摘要！！！文章摘要！！！',
            author:'作者',
            date:'2020 年 06 月 06 日',
            totalComment:16
          },
          {
            img:require('../../../assets/img/homeArticle/article-4.jpg'),
            title:'文章标题',
            summary:'文章摘要！！！文章摘要！！！文章摘要！！！',
            author:'作者',
            date:'2020 年 06 月 06 日',
            totalComment:16
          },
          {
            img:require('../../../assets/img/homeArticle/article-1.jpg'),
            title:'文章标题',
            summary:'文章摘要！！！文章摘要！！！文章摘要！！！',
            author:'作者',
            date:'2020 年 06 月 06 日',
            totalComment:16
          },
          {
            img:require('../../../assets/img/homeArticle/article-7.jpg'),
            title:'文章标题',
            summary:'文章摘要！！！文章摘要！！！文章摘要！！！',
            author:'作者',
            date:'2020 年 06 月 06 日',
            totalComment:16
          },
        ],
        pageSize:100,
        currentPage:1
      }
    },
    methods: {
      pageChange(currentPage) {
        this.currentPage = currentPage;
      }
    }
  }
</script>

<style scoped>
  .home-next-nav {
    height: 74px;
    margin: 30px 0;
    display: flex;
    flex-direction:row;
    align-items: center;
  }
</style>
