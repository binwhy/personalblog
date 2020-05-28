<template>
  <tab-bar class="tab-bar">
    <div slot="top" class="tab-bar-top">
      <img src="~assets/img/mainTabBar/logo.jpg" alt="">
    </div>

    <div slot="center" class="tab-bar-center">
      <div class="profile-info">
        <img src="~assets/img/mainTabBar/my-love.jpg" alt="">
        <span class="name">binwhy2dm</span>
        <span class="sign">生活，就是求知</span>
      </div>
      <main-nav-bar/>
    </div>

    <div slot="bottom" class="tab-bar-bottom">
      <i class="el-icon-setting">管理</i>
      <i class="el-icon-notebook-1">文章</i>
      <i class="el-icon-chat-dot-round">评论</i>
    </div>
  </tab-bar>
</template>

<script>
  import TabBar from "../../common/tabbar/TabBar";
  import MainNavBar from "./mainNavBar/MainNavBar";
  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      MainNavBar
    }
  }
</script>

<style scoped>
  .tab-bar-top {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 8%;

    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
  }

  .tab-bar-top img {
    height: 29px;
    width:160px;
  }

  .tab-bar-center {
    position: absolute;
    top: 8%;
    bottom: 8%;
    width: 100%;
    height: 900px;
    display: flex;
    flex-direction:column;
  }

  .profile-info {
    width: 100%;
    height: 180px;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    box-shadow: 0px 0px 3px #2e3344;
  }
  .profile-info img {
    height: 96px;
    width: 96px;
    border-radius:50%;
  }
  .name {
    font-size: 14px;
    color: #EAEBED;
  }
  .sign {
    font-size: 12px;
    color: #8B8E99;
  }


  .tab-bar-bottom {
    position: absolute;
    bottom: 0;
    height: 8%;
    width: 100%;
    z-index: 9;
    background-color: #3a3f51;

    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    color: #8B8E99;
    font-size: 13px;
  }


</style>
