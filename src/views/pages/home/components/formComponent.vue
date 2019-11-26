<!--  -->
<template>
  <div class="from">
    <el-input
      @input="handleChange"
      placeholder="请输入关键字"
      suffix-icon="el-icon-search"
      v-model="Keyword">
    </el-input>
  </div>
</template>

<script>
export default {
  name:'fromComponent',
  data () {
    return {
      Keyword:'',
    };
  },
  methods: {
    // handleSearch(){
    //   this.$emit('searchKey',this.Keyword)
    // },
    handleChange(){
      console.log(this.Keyword)
    }
  }
}

</script>
<style lang='less' scoped>
.from{
  padding: 25px ;
}
</style>