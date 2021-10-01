<template>
  <v-container>

    <div>
      <h1 class="text-center">{{ user.pseudo }}</h1>
      <div class="text-center my-10">
        <img :src="user.image" :alt="user.pseudo" />
      </div>
    </div>

    <h2 class="text-center my-10">
      Les 3 derniers livres lus par {{ user.pseudo }}
    </h2>
    <div class="my-10">
      <v-row class="mx-auto">
        <v-col
          cols="6"
          sm="4"
          v-for="bookFinish in threeFinishedBooksList"
          :key="bookFinish._id"
          class="image"
        >
          <v-img :src="bookFinish.imageUrl" class="image"></v-img>
          <h4 class="mb-15"> {{ bookFinish.title }}</h4>
        </v-col>
      </v-row>
    </div>
    <div>
        <h2 class="text-center my-10">Sa liste d'envie</h2>
        <div v-for="book in books" :key="book._id">
            <v-img v-if="book.wish" :src="book.imageUrl" class="image"></v-img>
        </div>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      finishedBooks: [],
    };
  },
  computed: {
    user() {
      return this.$store.state.oneUser;
    },
    books() {
      return this.$store.state.otherUserBooks;
    },
    threeFinishedBooksList() {
      this.books.forEach((book) => {
        if (book.finish) {
          this.finishedBooks.push(book);
        }
      });
      return this.finishedBooks.slice(-3);
    },
  },
  beforeDestroy() {
      this.finishedBooks = [];
      window.location.reload();
    },
};
</script>

<style scoped>
img {
  width: 300px;
  height: 300px;
  border-radius: 50%;
}
.image {
  height: 200px;
  width: 150px;
}
</style>