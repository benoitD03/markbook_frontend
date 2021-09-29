<template>
  <v-container>
    <hello-world />
    <h1>Livres Terminés</h1>

    <div v-for="book in books" :key="book.id">
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
  created() {
    this.$store.dispatch("getBooks")
  },
  computed: {
    books() {
      return this.$store.state.books;
    }
  }
};
</script>
