const test = {
  state: {
    count:1
  },
  mutations: {
    add(state,num){
      state.count = state.count + num
    },
    reduction(state){
      state.count = state.count - 1
    },
    
  },
  actions: {
    addfun(context,num){
      context.commit('add',num)
    },
    reductionfun(context){
      context.commit('reduction')
    }
  }
}

export default test