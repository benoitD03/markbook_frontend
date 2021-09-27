import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    baseUrlUsers : "http://localhost:3000/api/users",
    token : localStorage.getItem("token")
  },
  mutations: {
    
  },
  actions: {
    
  },
});
