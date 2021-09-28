<template>

<v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on" class="my-3 ml-3">
            <v-list-item-icon>
                <v-img style="width:25px; height: 25px;" src="../assets/logo.png"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Ajouter un livre</v-list-item-title>
        </v-list-item>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Ajouter un nouveau livre</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Titre"
                  v-model="book.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Auteur"
                  v-model="book.author"
                  required
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="URL de l'image"
                  v-model="book.imageUrl"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Idées principales"
                  v-model="book.comment"
                  hint="Ce champs n'est évidemment pas nécessaire pour les livres de votre wish list"
                ></v-textarea>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-checkbox
                    v-model="book.finish"
                    label="Livre terminé"
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-checkbox
                    v-model="book.isBeingRead"
                    label="Livre en cours"
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-checkbox
                    v-model="book.wish"
                    label="Liste d'envie"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Fermer
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            @click="createBook"
          >
            Ajouter
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>


</template>

<script>
import axios from 'axios';
import VueJwtDecode from 'vue-jwt-decode';
export default {
    data: () => ({
      dialog: false,
      user: null,
      book: {
          title : "",
          author: "",
          comment: "",
          imageUrl: "",
          finish: false,
          wish: false,
          isBeingRead: false
      }
    }),
    methods: {
        createBook() {
            this.token = this.$store.state.token;
            this.user = VueJwtDecode.decode(this.token);
            const formResult = {
                    title : this.book.title,
                    author: this.book.author,
                    comment: this.book.comment,
                    imageUrl: this.book.imageUrl,
                    finish: this.book.finish,
                    wish: this.book.wish,
                    isBeingRead: this.book.isBeingRead
            }
                axios.post(this.$store.state.baseUrlBooks, formResult , {
                    headers: {
                        Authorization: "Bearer "  + this.token,
                    },
                })
                .then(response => {
                    console.log(response);
                    this.dialog = false;
                })
                .catch(error => console.log(error));
        }
    }
};
</script>

<style>
</style>