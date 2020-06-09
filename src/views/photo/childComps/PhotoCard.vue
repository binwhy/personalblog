<template>
  <div class="photo-card">
    <photo-card-item v-for="(item,index) in photoList" :photo-item="item" :key="index"/>
  </div>
</template>

<script>
  import PhotoCardItem from "./PhotoCardItem";
  export default {
    name: "PhotoCard",
    components: {
      PhotoCardItem
    },
    data() {
      return {
        photoList:[
          {
            img:require('../../../assets/img/photo/1.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/2.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/3.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/4.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/5.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/6.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/7.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/8.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/9.jpg'),
            title: '美好生活'
          },
          {
            img:require('../../../assets/img/photo/10.jpg'),
            title: '美好生活'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .photo-card {
    display: flex;
    justify-content:space-between;
    flex-wrap:wrap;
  }
</style>
