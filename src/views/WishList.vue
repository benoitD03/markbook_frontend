<template>
  <v-container>
    <h1>Liste d'envie</h1>

    <div v-for="book in books" :key="book.id">
      <BookCard :book="book" v-if="book.wish" />
    </div>
  </v-container>
</template>

<script>
import BookCard from '../components/BookCard'
export default {
  name: "WishList",
  components: {
      BookCard
  },
  created() {
    this.$store.dispatch("getBooks");
  },
  computed: {
    books() {
      return this.$store.state.books;
    },
  },
};
</script>