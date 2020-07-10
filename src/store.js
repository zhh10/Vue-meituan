import Vue from 'vue' 
import Vuex from 'vuex'

Vue.use(Vuex) 

const state = {
    position:{},
    userName:'',
}

const mutations = {
    setPosition(state,val){
        state.position = val 
    },
    setUserName(state,val){
        state.userName = val
    }
}

const actions = {
    setPosition({ commit },val){
        commit('setPosition',val)
    },
    setUserName({ commit },val){
        commit('setUserName',val)
    }
} 

export default new Vuex.Store({
    state,
    mutations,
    actions 
})