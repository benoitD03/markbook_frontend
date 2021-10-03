<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-item>
            <v-card
              class="d-flex align-center"
              height="200"
            >
            <div class="d-flex">
                <h3>Livres terminés</h3>
                <span class="mdi mdi-36px mdi-bookshelf"></span>
             </div>
             <div class="mt-4">
                 <h3>Livres terminés</h3>
             </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
props: ["books"]
}
</script>

<style>

</style>