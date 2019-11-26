<!-- 整体布局 -->
<template>
  <el-container style="height:100%">
    <el-header>一个奋斗的青年</el-header>
    <el-container style="height:calc(100% - 60px)">
      <el-aside width="200px" style="height:100%">
        <Aside></Aside>
      </el-aside>
      <el-main style="height:100%">
        <mainContent></mainContent>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from './aside'
import mainContent from './mainContent'
export default {
  name:'layout',
  data () {
    return {
    };
  },

  components: {Aside,mainContent},
}

</script>
<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    height: 100%;
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    height: 100%;
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
</style>