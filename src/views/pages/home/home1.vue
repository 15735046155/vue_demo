<template>
  <div class="home">
    <formComponent @searchKey='searchKey'/>
    <tableComponent />
    <p>使用xuex:{{this.count}}</p>
    <p>count的值:{{this.$store.getters.count}}</p>
    <el-button @click="add">+1</el-button>
    <el-button @click="reduction">-1</el-button>
  </div>
</template>

<script>
import formComponent from './components/formComponent'
import tableComponent from './components/tableComponent'
import { mapActions,mapGetters  } from 'vuex'
export default {
  name: 'home1',
  data () {
    return {
      num:2,
    };
  },
  components:{formComponent,tableComponent},
  computed: {
    ...mapGetters(['count']),
  },
  methods:{
    ...mapActions(['addfun','reductionfun']),
    searchKey(val){
      console.log(val)
    },
    add(){
      this.addfun(this.num)
      // this.$store.commit('add')
      // this.$store.dispatch('addfun',this.num)
    },
    reduction(){
      this.reductionfun()
      // this.$store.commit('reduction')
      // this.$store.dispatch('reductionfun')
    }
  }
}
</script>
