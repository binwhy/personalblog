<template>
  <div id="home">
    <h2>Home {{message}}</h2>
  </div>
</template>

<script>
  import MainTabBar from "components/content/mainTabBar/MainTabBar";
  export default {
    name: "Home",
    components: {
      MainTabBar
    },
    data() {
      return {
        message: "hi 我的博客-day1"
      }
    }
  }
</script>

<style scoped>
  #home {
    background-color: deeppink;
    position: absolute;
    left: 24%;
    right: 6%;
    height: 900px;
  }
</style>
