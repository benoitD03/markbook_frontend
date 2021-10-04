<template>
<v-container>
    <h1 class="text-center text-primary my-10">Bienvenue sur <span class="mdi mdi-book-open-page-variant"></span> MARK<span>BOOK</span></h1>
    <v-card class="pa-10 mx-auto form-card" elevation="5">
    <h2 class="text-center text-primary">Connexion</h2>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      label="Email"
      required
    ></v-text-field>
    <span class="errorForm" v-if="!$v.email.required && $v.email.$dirty">Votre email est requis</span>

    <v-text-field
      v-model="password"
      label="Mot de passe"
      required
      type="password"
    ></v-text-field>
    <span class="errorForm" v-if="!$v.password.required && $v.password.$dirty">Votre Mot de passe est requis</span><br>

    <v-btn
      color="primary"
      class="mt-4"
      @click.prevent="login"
    >
      Connexion
    </v-btn>
  </v-form>
  <p class="mt-3">Vous n'êtes pas encore incrit ? <router-link to="/signup">Inscription</router-link></p>
    </v-card>
</v-container>
</template>

<script>
import axios from 'axios';
import { required } from 'vuelidate/lib/validators'
export default {
data() {
    return {
        email: '',
        password: ''
    }
},
validations: {
    email: {
        required,
    },
    password: {
        required,
    }
},
methods: {
        login() {
            this.$v.$touch()
            if(this.$v.$invalid) {
                console.log("missing elements")
            } else {
            axios.post('http://localhost:3000/api/users/login', {
                email: this.email,
                password: this.password
            })
            .then(response => {
                localStorage.setItem("token", response.data.token);
                window.location.href='/home'
            })
            .catch(() => alert("Email ou Mot de passe incorrect"));
            }
        }
    }
}
</script>

<style scoped>
.errorForm {
    color: crimson;
}
.form-card {
  width: 75%;
}
span {
  color: #333;
}
@media all and (max-width: 767px) {
  .form-card {
  width: 95%;
}
}
</style>