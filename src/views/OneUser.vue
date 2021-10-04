<template>
<div>
  <v-container>
    
    <div>
      <h1 class="text-center">{{ user.pseudo }}</h1>
      <div class="text-center my-10">
        <img :src="user.image" :alt="user.pseudo" />
      </div>
    </div>
    <div>
    <StatsUsers :books="books"/>
  </div>
    <v-divider></v-divider>
    <h2 class="text-center my-10">
      Les 5 derniers livres lus par {{ user.pseudo }}
    </h2>
    <div class="d-flex book-container">
      <div
        v-for="bookFinish in fiveFinishedBooksList"
        :key="bookFinish._id"
        class="finish-container"
      >
        <v-img :src="bookFinish.imageUrl" class="image mb-15"></v-img>
      </div>
    </div>
    <v-divider></v-divider>
    
      <h2 class="text-center my-10">Sa liste d'envie</h2>
      <div class="d-flex book-container mb-15">
        <div v-for="bookWish in wishedBooks" :key="bookWish._id" class="finish-container">
          <v-img :src="bookWish.imageUrl" class="image"></v-img>
        </div>
      </div>
  </v-container>
  </div>
</template>

<script>
import StatsUsers from "../components/StatsUsers"
export default {
  data() {
    return {
      finishedBooks: [],
      wishBooks: []
    };
  },
  components: {
   StatsUsers
  },
  computed: {
    user() {
      return this.$store.state.oneUser;
    },
    books() {
      return this.$store.state.otherUserBooks;
    },
    fiveFinishedBooksList() {
      this.books.forEach((book) => {
        if (book.finish) {
          this.finishedBooks.push(book);
        }
      });
      return this.finishedBooks.slice(-5);
    },
    wishedBooks() {
      this.books.forEach((book) => {
        if (book.wish) {
          this.wishBooks.push(book);
        }
      });
      return this.wishBooks;
    },
  },
  beforeDestroy() {
    this.finishedBooks = [];
    window.location.reload();
  },
};
</script>

<style scoped>
.header {
  filter: grayscale(.5);
}
img {
  width: 300px;
  height: 300px;
  border-radius: 30px;
}
.image {
  height: 200px;
  width: 150px;
}
.book-container {
  justify-content: space-around;
  flex-wrap: wrap;
}
.finish-container {
  width: 160px;
}

</style>