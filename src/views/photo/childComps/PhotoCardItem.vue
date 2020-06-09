<template>
  <div class="photo-card-item" @click="photoItemClick">
    <img :src="photoItem.img" alt="">
    <span>{{photoItem.title}}</span>
  </div>
</template>

<script>
  export default {
    name: "PhotoCardItem",
    props: {
      photoItem: {
        type:Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      photoItemClick() {

      }
    }
  }
</script>

<style scoped>
  .photo-card-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 6px 0  rgba(222,229,231,.45);
    text-align: center;
    margin: 15px 0;
  }

  img {
    height: 100px;
    width: 212px;
    /*width: auto;*/
    /*height: auto;*/
    /*max-width: 100%;*/
    /*max-height: 100%;*/
    transition:all .4s;
    -moz-transition:all .4s;
    -webkit-transition:all .4s;
    -o-transition:all .4s;
  }

  img:hover
  {
    transform: scale(1.1);
  }

  span {
    background-color: #ffffff;
    width: 100%;
    height: 32px;
    font-size: 14px;
    color: #333333;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
</style>
