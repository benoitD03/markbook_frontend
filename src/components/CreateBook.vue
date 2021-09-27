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
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-text-field
                  label="Auteur"
                ></v-text-field>
              </v-col>
              
              <v-col cols="12">
                <v-text-field
                  label="URL de l'image"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Idées principales"
                  hint="Ce champs n'est évidemment pas nécessaire pour les livres de votre wish list"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-checkbox
                    v-model="checkbox"
                    label="Livre terminé"
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-checkbox
                    v-model="checkbox"
                    label="Livre en cours"
                ></v-checkbox>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                md="4"
              >
                <v-checkbox
                    v-model="checkbox"
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
            @click="dialog = false"
          >
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
    }),
};
</script>

<style>
</style>