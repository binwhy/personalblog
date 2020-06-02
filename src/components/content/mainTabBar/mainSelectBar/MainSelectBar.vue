<template>
  <div class="main-select-bar">
    <div class="nav-name">
      组成
    </div>
    <main-nav-bar-item>
      <i class="el-icon-menu">
        <span>分类</span>
      </i>
      <i class="el-icon-arrow-right"></i>
    </main-nav-bar-item>
    <main-nav-bar-item>
      <i class="el-icon-document">
        <span>其他</span>
      </i>
      <i class="el-icon-arrow-right"></i>
    </main-nav-bar-item>
    <main-nav-bar-item>
      <i class="el-icon-set-up">
        <span>友链</span>
      </i>
      <i class="el-icon-arrow-right"></i>
    </main-nav-bar-item>
  </div>
</template>

<script>
  import MainNavBarItem from "../mainNavBar/MainNavBarItem";
  export default {
    name: "MainSelectBar",
    components: {MainNavBarItem}
  }
</script>

<style scoped>
  .main-select-bar {
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

  .nav-name {
    height: 40px;
    padding: 10px 15px;
  }
  .el-icon-arrow-right {
    position: absolute;
    right: 20px;
  }
</style>
