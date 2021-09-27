<template>
  <v-container>
    <hello-world />
    <h1>Livres Terminés</h1>
  </v-container>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>
