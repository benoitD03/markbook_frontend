<template>
  <v-container>
    <h1 class="text-primary text-center mb-5"><span class="mdi mdi-book-open-page-variant"></span> MARK<span>BOOK</span></h1>
    <Stats :books="books"/>
    <h2 class="text-center text-primary my-10">LISTE D'ENVIES</h2>

    <div v-for="book in books" :key="book.id">
      <BookCard :book="book" v-if="book.wish" />
    </div>
  </v-container>
</template>

<script>
import BookCard from '../components/BookCard'
import Stats from '../components/Stats'
export default {
  name: "WishList",
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
<style scoped>
h1 {
  font-size: 50px;
}
span {
  color: #333;
}
</style>