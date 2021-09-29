<template>
  <v-container>
    <h1>Livres en cours</h1>

    <div v-for="book in books" :key="book.id">
      <BookCard :book="book" v-if="book.isBeingRead" />
    </div>
  </v-container>
</template>

<script>
import BookCard from '../components/BookCard'
export default {
  name: "InProgressBooks",
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