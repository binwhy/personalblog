<template>
  <div class="top-comment-item">
    <span>{{content}}</span>
    <small>{{date}}</small>
  </div>
</template>

<script>
  export default {
    name: "TopCommentItem",
    props:{
      content:{
        type:String,
        default:null
      },
      date:{
        type:String,
        default:null
      }
    }
  }
</script>

<style scoped>
  .top-comment-item {
    width: 320px;
    padding: 10px 15px;
    margin: 0 0 -1px;
    box-shadow:0 1px 1px rgba(0,0,0,.05);
    display: flex;
    flex-direction: column;
  }

  .top-comment-item span {

  }

  .top-comment-item small {
    width: 100%;
    font-size: 13px;
  }
</style>
