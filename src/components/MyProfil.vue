<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-list-item link v-bind="attrs" v-on="on" class="my-3 ml-3 text-content">
          <v-list-item-content>
            <v-list-item-title class="text-h6 text-light">
              {{ myProfil.pseudo }}
            </v-list-item-title>
            <v-list-item-subtitle class="text-light">Mes informations</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-card>
        <v-card-title style="background:#1c76d2;">
          <span class="text-h5 text-light">Mes informations</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Pseudo"
                  v-model="myProfil.pseudo"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Email"
                  v-model="myProfil.email"
                  required
                ></v-text-field>
              </v-col>

              <div class="mx-auto my-8 avatar">
                <img v-if="!fileInput" class="avata-image mb-5"  :src="myProfil.image">
                <v-btn color="primary" class="modifyImage py-8"
                  ><span class="mdi mdi-24px mdi-cog-transfer" @click="displayFileInput"></span
                ></v-btn>
                <div v-if="fileInput" class="input-container">
                  <button class="btn-upload">
                    <span class="mdi mdi-24px mdi-download-box-outline text-primary my-auto"></span> Choisir une image
                  </button>
                  <input id="uploadImage" type="file" ref="image" @change="uploadImage">
                </div>
              </div>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="mt-10">
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Fermer
          </v-btn>
          <v-btn color="blue darken-1" text @click="modifyProfil"> Enregistrer </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// import axios from 'axios'
export default {
  data() {
    return {
      dialog: false,
      fileInput: false
    };
  },
  props: ["myProfil"],

  methods: {
      displayFileInput() {
          this.fileInput = !this.fileInput;
      },
       uploadImage() {
          this.myProfil.image = this.$refs.image.files[0];
          console.log(this.$refs.image.files[0]);
      },
      modifyProfil() {
          let formData = new FormData();
          formData.append('pseudo', this.myProfil.pseudo);  
          formData.append('email', this.myProfil.email);  
          formData.append('image', this.myProfil.image);  
          
        console.log(formData);
        this.$store.dispatch("modifyProfil", formData);
        window.location.reload();
      }
  },
  created() {
      console.log(this.myProfil.image); 
  }
};
</script>

<style scoped>
.avatar {
  width: 200px !important;
  height: 200px !important;
  position: relative;
}
.avata-image {
  border-radius: 50%;
  width: 200px !important;
  height: 200px !important;
}
.modifyImage {
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
}
.text-content {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.input-container {
  display: inline-block;
  position: relative;
  overflow: hidden;
}
.input-container input[type=file] {
  left: 0;
  top: 0;
  right: 0;
  bottom:0;
  opacity: 0;
  position: absolute;
  font-size: 90px;
  cursor: pointer;
}
.btn-upload {
  background-color: #fff;
  border: 3px solid #000;
  color: #1c76d2;
  padding: 10px 25px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: bold;
  
}
</style>