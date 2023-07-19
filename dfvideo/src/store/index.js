import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const store = new Vuex.Store({
  namespaced: true,
  state: {
    theme: 'white'    //deepcolour
  },
  mutations: {},
  actions: {},
  getters: {
    userinfo: state => state.login.userinfo,
    initData: state => state.login.initData
  },
  modules: {
    
  },
});

export default store;
