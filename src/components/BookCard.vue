<template>
 
<v-card
    class="mx-auto my-12 book-card"
    max-width="60%"
    elevation="5"
  >
  <div>
    <v-img style="width:100%; height: 50px;" src="../assets/bibliotheque.jpg"></v-img>
  </div>
  <v-card-title class="justify-center mt-2">{{ book.title }}</v-card-title>
  <div class="d-flex justify-center">
    <img class="mt-3" :src="book.imageUrl">
  </div>

    

    <v-card-text class="text-center">
    
      <div class="my-4 text-subtitle-1">
        <b>Auteur : </b> {{ book.author }}
      </div>

      <div v-if="book.comment">{{ book.comment }}</div>
      <div v-if="(book.finish || book.isBeingRead) && !book.comment">Vous n'avez pas encore rédigé de commentaire sur ce livre</div>
    </v-card-text>

    <v-divider color="#1c76d2" class="mx-4"></v-divider>

    <v-card-actions class="actions my-3 pb-5">
      <v-dialog v-model="dialog" persistent max-width="600px">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            class="button"
            color="primary"
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
      <v-btn class="button" color="primary" v-if="book.isBeingRead" @click="isBeingReadToFinish()">Livre terminé</v-btn>
      <v-btn class="button" color="primary" v-if="book.wish" @click="wishToIsBeingRead()">Livre commencé</v-btn>
      <v-btn class="button" color="red lighten-2" medium @click="deleteBook()">
        <v-icon class="text-light">mdi-delete</v-icon>
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

<style scoped>
img {
  width: 230px;
  height: 320px;
}
.header {
  width: 100%;
  height: 50px;
  background: #1c76d2;
}
h2 {
  width: 100%;
}
.container {
  display: flex;
}
.actions {
  display: flex;
  justify-content: space-between;
}
@media all and (max-width: 1024px) {
  .actions {
    flex-direction: column;
  }
  .button {
    margin-bottom: 10px;
  }
}
</style>