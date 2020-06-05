<template>
  <div class="top-login" v-show="isShow" @click.stop="">
    <div class="from-group">
      <label for="login-name">用户名</label>
      <input type="text"  v-model="loginInfo.name" id="login-name" placeholder="用户名或邮箱号">
      </input>
    </div>
    <div class="from-group" >
      <label for="login-password" >密码</label>
      <input type="password" v-model="loginInfo.password" id="login-password"  placeholder="密码">
      </input>
    </div>
    <button
      @click="buttonClick"
      :class="{'is-active':isActive}"
      @mouseover="mouseOverOrLeave"
      @mouseleave="mouseOverOrLeave"
    >
      登陆
    </button>
  </div>
</template>

<script>
  export default {
    name: "TopLogin",
    props:{
      isShow:{
        type:Boolean,
        default:false
      }
    },
    data() {
      return {
        isActive:false,
        loginInfo:{
          name:null,
          password:null
        }
      }
    },
    methods:{
      buttonClick() {
        console.log(this.loginInfo);
      },
      mouseOverOrLeave() {
        this.isActive = !this.isActive
      }
    }
  }
</script>

<style scoped>
  .top-login {
    position: fixed;
    top: 51px;
    right: 6%;
    color: #58666E;
    font-size: 14px;
    background-color: #f9f9f9;
    border-radius: 4px;
    z-index: 9;
    width: 280px;
    padding: 15px;
    box-shadow:-1px  1px rgba(0,0,0,.05);
  }

  .from-group {
    height: 59px;
    margin: 0 0 15px;
  }

  label {
    height: 20px;
    margin: 0 0 5px;
  }

  input {
    padding: 6px 12px;
    height: 34px;
    width: 100%;
    border:1px solid #f2f2f2;
    border-radius:5px;
    cursor: pointer;
  }

  button {
    color: #fff;
    height: 32px;
    width: 100%;
    border:1px solid #fff;
    border-radius:15px;
    /*添加渐变背景色*/
    background: linear-gradient(to right, #448BFF,#00FFFF);
    /*  定义鼠标样式*/
    cursor: pointer;
    /*去除外部边线*/
    outline: none;
  }

  .is-active{
    outline:none;
    background:#448BFF;
    /*执行动画*/
    -webkit-animation:showBtn 0.5s 1;
    animation:showBtn 0.5s 1;
    /*停止在最后一帧*/
    -webkit-animation-fill-mode:forwards;
    animation-fill-mode:forwards;
  }
</style>
