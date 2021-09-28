import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    myProfil: []
  },
  mutations: {
    GET_BOOKS(state, allBooks) {
      state.books = allBooks
    },
    GET_MY_PROFIL(state, profil) {
      state.myProfil = profil;
    }
  },
  actions: {
    
    getBooks({ commit }) {

      axios.get("http://localhost:3000/api/books", {
        headers: { Authorization: "Bearer " + localStorage.getItem("token")}
      })
      .then(response => { 
          commit("GET_BOOKS", response.data.books)
      })
      .catch(error => console.log(error)); 

    },

    getMyProfil({ commit }) {
            
      axios.get("http://localhost:3000/api/users/me", {
          headers: { Authorization: "Bearer " + localStorage.getItem("token")}
      })
      .then(response => {
        commit("GET_MY_PROFIL", response.data)
      })
      .catch(error => console.log(error));

    }
  }
});
