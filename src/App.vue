<template>
  <v-app>
    <NavigationDrawer/>
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavigationDrawer from "./components/NavigationDrawer"
export default {
  components: {
    NavigationDrawer
  },
  name: "App",

  data: () => ({
    //
  }),
};
</script>

<style>
.main {
  background: #f9f9f9;
}
.text-light {
  color: #f9f9f9 !important;
}
.text-primary {
  color: #1c76d2 !important;
}
</style>
