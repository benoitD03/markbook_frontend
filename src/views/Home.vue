<template>
  <v-container>
    <hello-world />
    <h1>Livres Terminés</h1>

    <div v-for="book in books" :key="book.id">
    <v-card
    class="mx-auto"
    max-width="344"
    outlined
    v-if="book.finish"
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          OVERLINE
        </div>
        <v-list-item-title class="text-h5 mb-1">
          {{ book.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ book.comment }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        tile
        size="80"
        color="grey"
      >
        <v-img :src="book.imageUrl"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
      >
        Button
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>

  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";
export default {
  name: "Home",
  components: {
    HelloWorld,
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
