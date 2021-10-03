<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on" class="mt-3 mb-7 ml-3">
          <v-list-item-icon class="align-center">
            <span class="mdi mdi-24px mdi-comment-edit text-light"></span>
          </v-list-item-icon>
          <v-list-item-title class="text-light">Ajouter un livre</v-list-item-title>
        </v-list-item>
      </template>
      <v-card>
        <v-card-title style="background: #1c76d2;">
          <span class="text-h5 text-light text-center">Ajouter un nouveau livre</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="book.finish"
                  label="Livre terminé"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="book.isBeingRead"
                  label="Livre en cours"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="book.wish"
                  label="Liste d'envie"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Titre *"
                  v-model="book.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Auteur *"
                  v-model="book.author"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="URL de l'image *"
                  v-model="book.imageUrl"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-if="book.finish || book.isBeingRead"
                  label="Idées principales"
                  v-model="book.comment"
                  hint="Notez ici ce que vous souhaitez retenir de ce livre"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          <small>*Champs requis</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Fermer
          </v-btn>
          <v-btn color="blue darken-1" text @click="createBook">
            Ajouter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    dialog: false,
    user: null,
    book: {
      title: "",
      author: "",
      comment: "",
      imageUrl: "",
      finish: false,
      wish: false,
      isBeingRead: false,
    },
  }),
  methods: {
    createBook() {
  
      const formResult = {
        title: this.book.title,
        author: this.book.author,
        comment: this.book.comment,
        imageUrl: this.book.imageUrl,
        finish: this.book.finish,
        wish: this.book.wish,
        isBeingRead: this.book.isBeingRead,
      };
        this.$store.dispatch("createBook", formResult)
        this.dialog = false;
        window.location.reload();
    }
  }
};
</script>

<style>
</style>