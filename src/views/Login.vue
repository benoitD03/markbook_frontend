<template>
<v-container>
    <h1>Bienvenue sur MarkBook</h1>
    <h2>Connexion</h2>
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
      color="success"
      class="mt-4"
      @click.prevent="login"
    >
      Connexion
    </v-btn>
  </v-form>
  <p class="mt-3">Vous n'êtes pas encore incrit ? <router-link to="/signup">Inscription</router-link></p>
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
</style>