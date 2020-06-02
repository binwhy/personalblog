<template>
  <div class="main-nav">
    <div class="nav-name">
      导航
    </div>
    <main-nav-bar-item link="/home">
      <i class="el-icon-s-home"></i>
      <span>首页</span>
    </main-nav-bar-item>
    <main-nav-bar-item link="/photo">
      <i class="el-icon-picture"></i>
      <span>照片墙</span>
    </main-nav-bar-item>
    <main-nav-bar-item link="/messageBoard">
      <i class="el-icon-chat-dot-round"></i>
      <span>留言板</span>
    </main-nav-bar-item>
    <main-nav-bar-item link="/about">
      <i class="el-icon-s-custom"></i>
      <span>关于我</span>
    </main-nav-bar-item>
  </div>
</template>

<script>
  import MainNavBarItem from "./MainNavBarItem";
  export default {
    name: "MainNavBar",
    components: {
      MainNavBarItem
    }
  }
</script>

<style scoped>
  .main-nav {
    width: 100%;
    display: flex;
    flex-direction:column;
    justify-content:space-around;
    /*align-items:center;*/

    font-size: 14px;
    color: #B4B6BD;
    box-shadow: 0px 0px 3px #2e3344;
  }

  span {
    margin-left: 15px;
  }
  i{
    font-size: 18px;
  }
  .nav-name {
    height: 40px;
    padding: 10px 15px;
  }
</style>
