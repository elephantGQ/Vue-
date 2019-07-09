import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loc:{
        name:"北京",
        id:31
    }
  },
  mutations: {
    setLoc(state,payload){
        state.loc.name=payload.name
        state.loc.id=payload.id
        
    }
  },
  actions: {

  }
})
