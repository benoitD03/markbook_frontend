<template>
      
          <v-container>
            <v-row>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="oneBook.finish"
                  label="Livre terminé"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="oneBook.isBeingRead"
                  label="Livre en cours"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="4" md="4">
                <v-checkbox
                  v-model="oneBook.wish"
                  label="Liste d'envie"
                ></v-checkbox>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Titre *"
                  v-model="oneBook.title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Auteur *"
                  v-model="oneBook.author"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="URL de l'image *"
                  v-model="oneBook.imageUrl"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-if="oneBook.finish || oneBook.isBeingRead"
                  label="Idées principales"
                  v-model="oneBook.comment"
                  hint="Notez ici ce que vous souhaitez retenir de ce livre"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
          
   
</template>

<script>
export default {
    props: ['oneBook']
}
</script>

<style>

</style>