<!--  -->
<template>
  <div class="root">
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        align='center'
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        align='center'
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        align='center'
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column label="操作" align='center'>
        <template slot-scope="scope">
          <span @click="editor(scope.row)" class="handleTags">编辑</span>
          <span @click="lookup(scope.row)" class="handleTags">查看</span>
          <span @click="del(scope.row)" class="handleTags">删除</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name:'tableComponent',
  data () {
    return {
      tableData:[
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    };
  },
  methods: {
    editor(row){
      console.log(row)
    },
    lookup(row){
      console.log(row)
    },
    del(row){
      console.log(row)
    }
  }
}

</script>
<style lang='less' scoped>
  .root{
    padding: 25px;
    .handleTags{
      margin:0 10px;
      color:#B3C0D1
    }
  }
</style>