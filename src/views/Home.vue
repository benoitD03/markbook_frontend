<template>
  <v-container>
    <hello-world />
    <h1>Livres Terminés</h1>
    
    <div class="text-center my-5">
      <input
        v-model="searchKey"
        type="search"
        id="search"
        placeholder="Rechercher un titre, un auteur..."
        autocomplete="off"
      />
      <span v-if="searchKey && filteredBooks.length >= 1" class="ml-2">
        {{ filteredBooks.length }} Résultat<span v-if="filteredBooks.length >= 2"
          >s</span
        >
      </span>
    </div>

    <div v-for="book in filteredBooks" :key="book.id">
    <BookCard :book="book" v-if="book.finish"/>
  </div>

  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
import BookCard from "../components/BookCard"
export default {
  name: "Home",
  components: {
    HelloWorld,
    BookCard
  },
  data() {
    return {
      searchKey: "",
    }
  },
  created() {
    this.$store.dispatch("getBooks")
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
    filteredBooks() {
      return this.books.filter(book => {
        return ((book.title.toLowerCase()).includes(this.searchKey.toLowerCase())) || ((book.author.toLowerCase()).includes(this.searchKey.toLowerCase()));
      });
    },
  }
};
</script>

<style scoped>
#search {
  width: 75%;
  height: 50px;
  padding: 0 15px;
  border-radius: 12px;
  border: 2px solid rgba(51, 51, 51, 0.835);
}
#search:focus {
  outline: none;
  border: 2px solid cadetblue;
}
</style>
