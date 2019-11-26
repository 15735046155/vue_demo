<!-- 左侧导航 -->
<template>
  <div>
    <el-menu
      default-active="1-1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#D3DCE6"
      text-color="#666"
      active-text-color="#000">
      <el-submenu index='1' style="text-align:left;overflow:hidden">
        <template slot="title" >
          <i class="el-icon-s-home"></i>
          <span slot="title">首页</span>
        </template>
        <router-link to='home1'>
          <el-menu-item index="1-1">Vue</el-menu-item>
        </router-link>
        <router-link to='home2'>
          <el-menu-item index="1-2">React</el-menu-item>
        </router-link>
      </el-submenu>
      <router-link to='about'>
        <el-menu-item index="2" style="text-align:left">
            <i class="el-icon-s-custom"></i>
            <span slot="title">我的资料</span>
        </el-menu-item>
      </router-link>
      <router-link to='setting'>
        <el-menu-item index="3" style="text-align:left">
          <i class="el-icon-s-tools"></i>
          <span slot="title">设置信息</span>
        </el-menu-item></router-link>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },

  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>
<style lang='less' scoped>
</style>