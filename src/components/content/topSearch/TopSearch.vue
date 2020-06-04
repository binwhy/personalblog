<template>
  <div class="top-search">
    <div class="search">
      <el-input
        placeholder="请输入关键字搜索"
        v-model="input">
        <i slot="suffix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <div class="right-part">
      <el-popover
        :visible-arrow="false"
        placement="bottom"
        title="随心所语"
        width="320"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <i class="el-icon-chat-line-round" slot="reference"></i>
      </el-popover>
      <el-popover
        :popper-options="{ boundariesElement: 'viewport', removeOnDestroy: true }"
        :visible-arrow="false"
        placement="bottom"
        title="标题"
        width="200"
        trigger="click"
        content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
        <i class="el-icon-user" slot="reference"></i>
      </el-popover>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TopSearch",
    data() {
      return {
        input: '',
      }
    }
  }
</script>

<style scoped>
  .top-search {
    position: absolute;
    top: 0;
    background-color: #f9f9f9;
    width: 100%;
    height: 50px;
    display: flex;
    box-shadow:0px 0px 3px #f2f2f2;
  }

  .search {
    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    width: 180px;
    height: 50px;
    margin-left: 20px;
  }

  .right-part {
    position: absolute;
    right: 0;
    width: 220px;
    height: 50px;
    padding: 5px 10px;
    display: flex;
    flex-direction:row;
    justify-content:space-around;
    align-items: center;
  }

</style>
