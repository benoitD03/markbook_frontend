import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    oneBook: [],
    myProfil: [],
    baseUrlBooks: "http://localhost:3000/api/books"
  },
  mutations: {
    GET_BOOKS(state, allBooks) {
      state.books = allBooks
    },
    GET_ONE_BOOK(state, book) {
      state.oneBook = book;
    },
    CREATE_BOOK(state, book) {
      state.books = [book, ...state.books]
    },
    MODIFY_BOOK(state, book) {
      state.books = [book,...state.books]
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

    getOneBook({ commit }, id) {

      axios.get(`http://localhost:3000/api/books/one/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token")}
      })
      .then(response => {
        commit("GET_ONE_BOOK", response.data);
      })
      .catch(error => console.log(error))

    },
    createBook({ commit }, book) {

      axios.post("http://localhost:3000/api/books", book, {
          headers: { Authorization: "Bearer " + localStorage.getItem("token")}
        })
        .then((response) => {
          console.log(response);
          commit("CREATE_BOOK", book);
        })
        .catch((error) => console.log(error));

    },

    modifyBook({ commit }, book) {

      axios.put(`http://localhost:3000/api/books/one/${book._id}`, book, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token"),
          },    
      })
      .then(response => {
          console.log(response);
          commit("MODIFY_BOOK", book);
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
