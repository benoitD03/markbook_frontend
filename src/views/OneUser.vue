<template>
<div>
  <h1 class="text-center">{{ user.pseudo }}</h1>
  <div class="text-center my-10">
    <img :src="user.image" :alt="user.pseudo">
  </div>
</div>
</template>

<script>
export default {
computed: {
        user() {
            return this.$store.state.oneUser;
        }
    },
}
</script>

<style scoped>
img {
    width: 300px;
    height: 300px;
}
</style>