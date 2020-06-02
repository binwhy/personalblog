<template>
  <div class="main-nav-bar-item" @click="itemClick" @mouseover="mouseOver" @mouseout="mouseOut" :class="{active:isActive}" >
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "MainNavBarItem",
    props: {
      link:String
    },
    data() {
      return {
        isActive:false
      }
    },
    methods: {
      mouseOver() {
        this.isActive = !this.isActive
      },
      mouseOut() {
        this.isActive = !this.isActive
      },
      itemClick() {
        if (this.$route.path !== this.link && this.link){
          this.$router.push(this.link)
        }
      }
    }
  }
</script>

<style scoped>
  .main-nav-bar-item {
    position: relative;
    height: 40px;
    padding: 10px 20px;
  }
  .active {
    background-color:#2E3241;
  }
</style>
