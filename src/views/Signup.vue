<template>
<v-container>
    <h1 class="text-center text-primary my-10">Bienvenue sur <span class="mdi mdi-book-open-page-variant"></span> MARK<span>BOOK</span></h1>
    <v-card class="pa-10 mx-auto form-card" elevation="5">
    <h2 class="text-center text-primary">Inscription</h2>
  <v-form
    ref="form"
    lazy-validation
  >
    <v-text-field
      v-model="email"
      label="Email"
      required
    ></v-text-field>
    <span class="errorForm" v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty">Veuillez rentrer un email valide</span>

    <v-text-field
      v-model="password"
      label="Mot de passe"
      required
      type="password"
    ></v-text-field>
    <span class="errorForm" v-if="!$v.password.required && $v.password.$dirty">Un mot de passe est requis</span>
    <span class="errorForm" v-if="!$v.password.minLength && $v.password.$dirty">Votre mot de passe doit contenir au moins {{ $v.password.$params.minLength.min }} caractères</span>

    <v-text-field
      v-model="pseudo"
      label="Pseudo"
      required
    ></v-text-field>
    <span class="errorForm" v-if="!$v.pseudo.required && $v.pseudo.$dirty">Un pseudo est requis</span>
    <span class="errorForm" v-if="!$v.pseudo.minLength && $v.pseudo.$dirty">Votre pseudo doit contenir au moins {{ $v.pseudo.$params.minLength.min }} caractères</span><br>

    <v-btn
      color="primary"
      class="mt-4"
      @click.prevent="signup"
    >
      Valider
    </v-btn>
  </v-form>
  <p class="mt-3">Vous êtes déja incrit ? <router-link to="/">Connexion</router-link></p>
  </v-card>
</v-container>
</template>

<script>
import axios from 'axios';
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
data() {
    return {
        email: '',
        password: '',
        pseudo: ''
    }
},
validations: {
    email: {
        required,
        email
    },
    password: {
        required,
        minLength: minLength(6)
    },
    pseudo: {
        required,
        minLength: minLength(4)
    }
},
methods: {
        signup() {
            this.$v.$touch()
            if(this.$v.$invalid) {
                console.log("missing elements")
            } else {
            axios.post('http://localhost:3000/api/users/signup', {
                email: this.email,
                password: this.password,
                pseudo: this.pseudo
            })
            .then(response => {
                console.log(response);
                window.location.href='/'
            })
            .catch(() => console.log("Email ou Mot de passe incorrect"));
            }
        },
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