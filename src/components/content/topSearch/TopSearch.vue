<template>
  <div class="top-search">
    <div class="search">
      <el-input
        placeholder="请输入关键字搜索"
        v-model="input">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="right-part">
      <i class="el-icon-chat-line-round" @click.stop="commentClick"></i>
      <top-comment :is-show="commentShow"/>
      <i class="el-icon-user" @click.stop="loginClick"></i>
      <top-login :is-show="loginShow"/>
    </div>
  </div>
</template>

<script>
  import TopComment from "./TopComment";
  import TopLogin from "./TopLogin";
  export default {
    name: "TopSearch",
    components:{
      TopComment,
      TopLogin
    },
    data() {
      return {
        input: '',
        commentShow:false,
        loginShow:false
      }
    },
    mounted() {
      this.globalClick(this.mouseClick);
    },
    methods: {
      //注意在click 后面加上 .stop阻止全局点击事件触发
      commentClick() {
        this.commentShow = !this.commentShow
        if (this.loginShow === true){
          this.loginShow = false
        }
      },
      mouseClick() {
        //监听全局点击事件
        if (this.commentShow === true){
          this.commentShow = false
        }
        if (this.loginShow === true){
          this.loginShow = false
        }
      },
      loginClick() {
        this.loginShow = !this.loginShow
        if (this.commentShow === true){
          this.commentShow = false
        }
      }
    }
  }
</script>

<style scoped>
  .top-search {
    position: absolute;
    top: 0;
    background-color: #f9f9f9;
    width: 100%;
    height: 50px;
    display: flex;
    box-shadow:0px 0px 3px #f2f2f2;
  }

  .search {
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 180px;
    height: 50px;
    margin-left: 20px;
  }

  .right-part {
    position: absolute;
    right: 0;
    width: 220px;
    height: 50px;
    padding: 5px 10px;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;
  }

</style>
