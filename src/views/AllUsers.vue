<template>
<div>
  <h1 class="text-center">Les MarkBookeurs</h1>
  <div class="text-center my-15">
      <input
        v-model="searchKey"
        type="search"
        id="search"
        placeholder="Rechercher un markbookeur..."
        autocomplete="off"
      />
  </div>
  <div v-for="user in filteredUsers" :key="user._id">
      <div class="user-container">
        <img :src="user.image" :alt="user.pseudo">
        <h2>{{ user.pseudo }}</h2>
        <router-link to="/markbookeur">
        <v-btn color="primary" @click="getOneUser(user._id)"><span class="mdi mdi-arrow-right-bold"></span></v-btn>
        </router-link>
      </div>
      <v-divider class="divider mx-auto"></v-divider>
  </div>
</div>
</template>

<script>
export default {
    data() {
    return {
      searchKey: "",
    }
  },
created() {
    this.$store.dispatch("getAllUsers");
  },
  computed: {
    users() {
      return this.$store.state.users;
    },
    filteredUsers() {
      return this.users.filter(user => {
        return (user.pseudo.toLowerCase()).includes(this.searchKey.toLowerCase());
      });
    }
  },
  methods: {
      getOneUser(id) {
          this.$store.dispatch("getOneUser", id);
          this.$store.dispatch("getOtherUserBooks", id);
      }
  }
}
</script>

<style scoped>
.user-container {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 20px auto;
}
img {
    widows: 100px;
    height: 100px;
    border-radius: 50%;
}
.divider {
    width: 50%;
}
#search {
  width: 75%;
  height: 50px;
  padding: 0 15px;
  border-radius: 12px;
  border: 2px solid rgba(51, 51, 51, 0.835);
}
#search:focus {
  outline: none;
  border: 2px solid cadetblue;
}
</style>