<template>
  <v-container>
    <Stats :books="books"/>
    <h1 class="text-center text-primary my-10">LIVRES EN COURS</h1>
    <div v-for="book in books" :key="book.id">
      <BookCard :book="book" v-if="book.isBeingRead" />
    </div>
  </v-container>
</template>

<script>
import BookCard from '../components/BookCard'
import Stats from '../components/Stats'
export default {
  name: "InProgressBooks",
  components: {
      BookCard,
      Stats
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