<template>
  <div id="tab-bar">
    <div class="top"><slot name="top"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="bottom"><slot name="bottom"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    position: fixed;
    left: 6%;
    bottom: 0;

    background-color: #3a3f51;
    width: 18%;
    height: 100vh;
  }
</style>
