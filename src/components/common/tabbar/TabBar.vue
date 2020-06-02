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
    top: 0;
    left: 6%;
    bottom: 0;

    display: flex;
    flex-direction: column;
    background-color: #3a3f51;
    width: 220px;
    height: 100vh;
  }
</style>
