<template>
  <div class="pa-8" style="background: #f9f9f9;">
    <v-card v-if="display">
      <v-navigation-drawer
        :permanent="$vuetify.breakpoint.smAndUp"
        v-model="drawer"
        app
        color="primary"
      >
        <v-list class="menu-list">
          <v-list-item class="px-2">
            <v-list-item-avatar size="92">
              <v-img :src="myProfil.image"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <MyProfil :myProfil="myProfil"/>
        </v-list>

        <v-divider class="mx-auto" style="width: 95%;" color="white"></v-divider>
            <v-list-item-title class="text-h6 px-4 mt-4 text-light">
                Ma bibliothèque
              </v-list-item-title>
        <v-list
          nav
          dense
        >
          <router-link to="/home">
          <v-list-item link>
            <v-list-item-icon class="align-center">
              <span class="mdi mdi-24px mdi-comment-check text-light"></span>
            </v-list-item-icon>
            <v-list-item-title class="text-light">Mes livres terminés</v-list-item-title>
          </v-list-item>
          </router-link>
          
          <router-link to="/inprogressbooks">
          <v-list-item link>
            <v-list-item-icon class="align-center">
              <span class="mdi mdi-24px mdi-comment-eye text-light"></span>
            </v-list-item-icon>
            <v-list-item-title class="text-light">Mes livres en cours</v-list-item-title>
          </v-list-item>
          </router-link>
          
          <router-link to="/wishlist">
          <v-list-item link>
            <v-list-item-icon class="align-center">
              <span class="mdi mdi-24px mdi-comment-processing text-light"></span>
            </v-list-item-icon>
            <v-list-item-title class="text-light">Ma liste d'envie</v-list-item-title>
          </v-list-item>
          </router-link>

          <CreateBook />

          <v-divider color="white"></v-divider>

          <router-link to="/markbookeurs">
          <v-list-item link class="mt-2">
            <v-list-item-icon class="align-center">
              <span class="mdi mdi-24px mdi-account-search text-light"></span>
            </v-list-item-icon>
            <v-list-item-title class="text-light">Les MarkBookeurs</v-list-item-title>
          </v-list-item>
          </router-link>

            <v-list-item link class="deconnexion" @click="logOut">
                <v-list-item-icon class="align-center">
                <span class="mdi mdi-24px mdi-logout text-light"></span>
                </v-list-item-icon>
                <v-list-item-title class="text-light">Se déconnecter</v-list-item-title>
            </v-list-item>

        </v-list>
      </v-navigation-drawer>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up text-light"></v-app-bar-nav-icon>
    </v-card>
  </div>
</template>

<script>

import CreateBook from '../components/CreateBook'
import MyProfil from '../components/MyProfil'
export default {
    components: {
        CreateBook,
        MyProfil
    },
    data() {
        return {
            display: false,
            drawer: null
        }
    },
    created() {
        if (localStorage.getItem("token")) {
            this.display = true;
            this.$store.dispatch("getMyProfil")
        }  
    },
    computed: {
        myProfil() {
            return this.$store.state.myProfil;
        }
    },
    methods: {
        logOut() {
            localStorage.removeItem("token");
            window.location.href="/"
        }
    }
}
</script>

<style scoped>
.deconnexion {
    position: absolute;
    bottom: 15px;
    width: 95%;
}
a {
    text-decoration: none;
}
.toolbar {
  position: absolute;
  top: 1px;
  left: 0px;
  border-radius: 50%;
}
.v-card {
  width: 37px;
  background: #1c76d2;
}
</style>