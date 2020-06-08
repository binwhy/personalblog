<template>
  <div class="top-comment" v-show="isShow">
    <div class="top-comment-title">
      <strong>
        随心所语
      </strong>
    </div>
    <top-comment-item v-for="(item,index) in comments" :key="index" :content="item.content" :date="item.date"/>
  </div>
</template>

<script>
  import TopCommentItem from "./TopCommentItem";
  export default {
    name: "TopComment",
    components:{
      TopCommentItem
    },
    props:{
      comments: {
        type: Array,
        default() {
          return [
            {
              content: '青春不留白，回望你的过去，有没有值得怀恋的瞬间！',
              date: '2020-6-1 11:37:52'
            },
            {
              content: '青春不留白，回望你的过去，有没有值得怀恋的瞬间！',
              date: '2020-6-1 11:37:52'
            },
            {
              content: '青春不留白，回望你的过去，有没有值得怀恋的瞬间！',
              date: '2020-6-1 11:37:52'
            }
          ]
        }
      },
      isShow:{
        type:Boolean,
        default:false
      }
    }
  }
</script>

<style scoped>
  .top-comment{
    position: fixed;
    top: 59px;
    right: 6%;
    color: #58666E;
    font-size: 14px;
    background-color: #f9f9f9;
    border-radius: 4px;
    z-index: 9;
    width: 320px;

    /*  加动画特效*/
    animation:mymove .5s;
    -webkit-animation:mymove .5s; /*Safari and Chrome*/
    animation-fill-mode: forwards;
  }

  @keyframes mymove
  {
    from {top:100px;}
    to {top:50px;}
  }

  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    from {left:100px;}
    to {left:50px;}
  }

  .top-comment-title {
    height: 41px;
    padding: 10px 15px;
    background-color: #EDF1F2;
  }
</style>
