export default {
  namespaced: true,
  state: {
    token: "",
    userinfo: {} || JSON.parse(localStorage.getItem('userInfo')),
    initData: {} || JSON.parse(localStorage.getItem('initData')),
  },
  mutations: {
    //进行同步操作
    setToken(state, token) {
      state.token = token;
    },
    setUserinfo(state, userinfo) {
      state.userinfo = userinfo;
    },
    setinitData(state, userinfo) {
      state.initData = userinfo;
    },
  },
  actions: {},
};
