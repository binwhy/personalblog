<template>
  <div class="left-nav-bar">
    <div class="nav-name">
      组成
    </div>
    <el-col :span="12">
      <el-menu
        :collapse-transition="false"
        :unique-opened="true"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#3a3f51"
        text-color="#B4B6BD"
        active-text-color="#B4B6BD">
        <el-submenu index="1" >
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>分类</span>
          </template>
          <el-menu-item :index="item.index" v-for="(item,index) in categories">
            <span class="right">{{item.name}}</span>
            <span class="left">{{item.count}}</span>
          </el-menu-item>

        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>其他</span>
          </template>
          <el-menu-item :index="item.index" v-for="(item,index) in others">
            <span class="right">{{item.name}}</span>
          </el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-set-up"></i>
            <span>友链</span>
          </template>
          <el-menu-item :index="item.index" v-for="(item,index) in friendsChain">
            <span class="right">{{item.name}}</span>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
  </div>
</template>

<script>
  export default {
    name: "MainLeftNavBar",
    data() {
      return {
        categories:[
          {
            index:'1-1',
            name: '生活随笔',
            count: 12
          },
          {
            index:'1-2',
            name: '技术经验',
            count: 12
          },
          {
            index:'1-3',
            name: '信息安全',
            count: 12
          },
          {
            index:'1-4',
            name: '建站知识',
            count: 12
          },
          {
            index:'1-5',
            name: '干货资源',
            count: 12
          },
          {
            index:'1-6',
            name: '软件相关',
            count: 12
          },
          {
            index:'1-7',
            name: '行踪轨迹',
            count: 12
          }
        ],
        others:[
          {
            index:'2-1',
            name: '归档栏',
            count: 12
          },
          {
            index:'2-2',
            name: '时光机',
            count: 12
          },
          {
            index:'2-3',
            name: '友谊库',
            count: 12
          },
          {
            index:'2-4',
            name: '百宝箱',
            count: 12
          },
          {
            index:'2-5',
            name: '实验室',
            count: 12
          }
        ],
        friendsChain:[
          {
            index:'3-1',
            name: '小伙伴你在哪呢',
            count: 12
          },
          {
            index:'3-2',
            name: '小伙伴你在哪呢',
            count: 12
          },
          {
            index:'3-3',
            name: '小伙伴你在哪呢',
            count: 12
          },
          {
            index:'3-4',
            name: '小伙伴你在哪呢',
            count: 12
          }
        ],
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .left-nav-bar {
    margin-top: 3px;
    display: flex;
    flex-direction:column;

    font-size: 14px;
    color: #B4B6BD;
    width: 220px;
    background-color: #3a3f51;
  }

  /deep/.el-col{
    width: 220px;
    font-size: 14px;
  }

  /deep/.el-submenu__title{
    width: 220px;
    height: 40px;
    display: flex;
    flex-direction:row;
    align-items:center;
  }

  /deep/.el-submenu /deep/.el-menu-item{
    height: 40px;
    padding: 0 20px !important;
  }
  .nav-name {
    height: 40px;
    padding: 10px 15px;
  }
  /deep/.el-menu{
    border-right: unset;
  }

  /deep/.el-menu-item{
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
  }

  .right {
    display: flex;
    align-items:center;
    height: 40px;
    position: absolute;
    left: 48px;

    /*  加动画特效*/
    animation:mymove .5s;
    -webkit-animation:mymove .5s; /*Safari and Chrome*/
    animation-fill-mode: forwards;
  }
  @keyframes mymove
  {
    from {left:0px;}
    to {left:48px;}
  }

  @-webkit-keyframes mymove /*Safari and Chrome*/
  {
    from {left:0px;}
    to {left:48px;}
  }

  .left {
    position: absolute;
    right: 20px;
    display: flex;
    align-items:center;
    height: 40px;
  }
</style>
