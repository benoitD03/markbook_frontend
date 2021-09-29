<template>
  <div class="ma-12 pa-12">
    <v-card v-if="display">
      <v-navigation-drawer
        permanent
        expand-on-hover   
        app
      >
        <v-list class="menu-list">
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img :src="myProfil.image"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item link>
            <v-list-item-content>
              <v-list-item-title class="text-h6">
                {{ myProfil.pseudo }}
              </v-list-item-title>
              <v-list-item-subtitle>{{ myProfil.email }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>
            <v-list-item-title class="text-h6 px-4 mt-4 title">
                Ma bibliothèque
              </v-list-item-title>
        <v-list
          nav
          dense
        >
          <router-link to="/home">
          <v-list-item link>
            <v-list-item-icon>
              <v-img style="width:25px; height: 25px;" src="../assets/logo.png"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Mes livres terminés</v-list-item-title>
          </v-list-item>
          </router-link>
          
          <router-link to="/inprogressbooks">
          <v-list-item link>
            <v-list-item-icon>
              <v-img style="width:25px; height: 25px;" src="../assets/logo.png"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Mes livres en cours</v-list-item-title>
          </v-list-item>
          </router-link>
          
          <router-link to="/wishlist">
          <v-list-item link>
            <v-list-item-icon>
              <v-img style="width:25px; height: 25px;" src="../assets/logo.png"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Ma liste d'envie</v-list-item-title>
          </v-list-item>
          </router-link>

          <CreateBook />

          <v-divider></v-divider>

          <v-list-item link class="mt-2">
            <v-list-item-icon>
              <v-img style="width:25px; height: 25px;" src="../assets/logo.png"></v-img>
            </v-list-item-icon>
            <v-list-item-title>Les MarkBookeurs</v-list-item-title>
          </v-list-item>

          <!-- <router-link to="/" @click="removeToken">   -->
            <v-list-item link class="deconnexion" @click="logOut">
                <v-list-item-icon>
                <v-img style="width:25px; height: 25px;" src="../assets/logo.png"></v-img>
                </v-list-item-icon>
                <v-list-item-title>Se déconnecter</v-list-item-title>
            </v-list-item>
          <!-- </router-link> -->

        </v-list>
      </v-navigation-drawer>
    </v-card>
  </div>
</template>

<script>

import CreateBook from '../components/CreateBook'
export default {
    components: {
        CreateBook
    },
    data() {
        return {
            display: false,
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
}
a {
    text-decoration: none;
}
</style>