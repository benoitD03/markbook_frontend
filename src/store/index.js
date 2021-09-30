import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    books: [],
    oneBook: [],
    myProfil: [],
    users: [],
    oneUser: [],
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
    DELETE_BOOK(state, book) {
      const index = state.books.findIndex(item => item._id === book._id);
      state.books = state.books.splice(state.books[index], 1);
    },
    GET_MY_PROFIL(state, profil) {
      state.myProfil = profil;
    },
    MODIFY_PROFIL(state, profil) {
      state.myProfil = profil
    },
    GET_ALL_USERS(state, allUsers) {
      state.users = allUsers;
    },
    GET_ONE_USER(state, user) {
      state.oneUser = user;
    },
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

    deleteBook({ commit }, id) {
   
              axios.delete(`http://localhost:3000/api/books/one/${id}`, {
                  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
              })
              .then(response => {
                  commit("DELETE_BOOK", response.data);
              })
              .catch(error => console.log(error));
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

    },

    modifyProfil({ commit }, profil) {

      axios.put('http://localhost:3000/api/users/me', profil, {
              headers: { Authorization: "Bearer " + localStorage.getItem("token"),
                },    
          })
          .then(response => {
            console.log(response);
              commit("MODIFY_PROFIL", profil)
          })
          .catch(error => console.log(error));

    },

    getAllUsers({ commit }) {

      axios.get('http://localhost:3000/api/users/all', {
              headers: { Authorization: "Bearer " + localStorage.getItem("token")}
          })
          .then(response => {
              commit("GET_ALL_USERS", response.data)
          })
          .catch(error => console.log(error));
    },

    getOneUser({ commit }, id) {

      axios.get(`http://localhost:3000/api/users/one/${id}`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("token")}
      })
      .then(response => {
        commit("GET_ONE_USER", response.data);
      })
      .catch(error => console.log(error))

    },
  }
});
