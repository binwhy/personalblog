<template>
  <main-layout>
    <div slot="main-header-content" class="photo-header">
      <h1>美好回忆</h1>
      <small>所有图片均为博主原创，转载请保留版权。</small>
    </div>
    <div slot="main-body-content" class="photo-hbody">
      <photo-card/>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from "components/content/mainLayout/MainLayout";

  import PhotoCard from "./childComps/PhotoCard";

  export default {
    name: "Photo",
    components: {
      MainLayout,
      PhotoCard
    }
  }
</script>

<style scoped>
  .photo-header h1{
    font-size: 24px;
    height: 34px;
    margin: 0;
  }

  .photo-header small{
    font-size: 13px;
    height: 17px;
    margin: 0;
    color: #98A6AD;
  }
</style>

