<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="text-h5 mb-1">
          {{ book.title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ book.comment }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey">
        <v-img :src="book.imageUrl"></v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="red lighten-2"
            dark
            v-bind="attrs"
            v-on="on"
            @click="getOneBook(book._id)"
          >
            Modifier
          </v-btn>
        </template>
        <v-card>
          <v-card-title>
            <span class="text-h5">Modifier ce livre</span>
          </v-card-title>
          <v-card-text>
            <ModifyBook :oneBook="oneBook" />
            <small>*Champs requis</small>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">
              Fermer
            </v-btn>
            <v-btn color="blue darken-1" text @click="modify"> Enregistrer </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-btn v-if="book.isBeingRead" @click="isBeingReadToFinish()">Livre terminé</v-btn>
      <v-btn v-if="book.wish" @click="wishToIsBeingRead()">Livre possédé</v-btn>
      <v-btn color="red lighten-2" medium @click="deleteBook()">
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import ModifyBook from "./ModifyBook";
export default {
  components: {
    ModifyBook,
  },
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    book: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getOneBook(id) {
      this.$store.dispatch("getOneBook", id);
    },
    isBeingReadToFinish() {
        
           const formResult = {
            _id: this.book._id,
            title: this.book.title,
            author: this.book.author,
            comment: this.book.comment,
            imageUrl: this.book.imageUrl,
            finish: true,
            wish: this.book.wish,
            isBeingRead: false,
           } 

            this.$store.dispatch("modifyBook", formResult);
            window.location.reload();
    },
    wishToIsBeingRead() {
        
           const formResult = {
            _id: this.book._id,
            title: this.book.title,
            author: this.book.author,
            comment: this.book.comment,
            imageUrl: this.book.imageUrl,
            finish: false,
            wish: false,
            isBeingRead: true,
           } 

            this.$store.dispatch("modifyBook", formResult);
            window.location.reload();
    },
    modify() {
        this.$store.dispatch("modifyBook", this.oneBook);
        window.location.reload();
    },
    deleteBook() {
      const confirmation = confirm("Êtes vous sûr de vouloir supprimer ce livre ?")
          if (confirmation){
            //   this.token = localStorage.getItem("token");
            //   axios.delete('http://localhost:3000/api/books/one/' + id, {
            //       headers: { Authorization: "Bearer " + this.token }
            //   })
            //   .then(response => {
            //       console.log(response.data);
            //       window.location.reload();
            //   })
            //   .catch(error => console.log(error));
            this.$store.dispatch("deleteBook", this.book._id);
            window.location.reload();
          }
    }
  },
  computed: {
    oneBook() {
      return this.$store.state.oneBook;
    },
  },
};
</script>

<style>
</style>