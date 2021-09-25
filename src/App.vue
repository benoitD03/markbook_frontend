<template>
  <v-app>
    <NavigationDrawer/>
    <v-main>
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
