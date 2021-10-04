<template>
  <v-item-group>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" height="200">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-h4 my-5">Terminés</div>
                  <v-list-item-title class="text-h1 mb-1 text-primary">
                    {{ finishedBooksList() }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <span class="mdi mdi-48px mdi-bookshelf text-primary"></span>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-item>
        </v-col>

        <v-col cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" height="200">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-h4 my-5">En cours</div>
                  <v-list-item-title class="text-h1 mb-1 text-primary">
                    {{ isBeingReadBooksList() }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <span
                    class="mdi mdi-48px mdi-book-open-page-variant text-primary"
                  ></span>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-item>
        </v-col>

        <v-col cols="12" md="4">
          <v-item>
            <v-card class="d-flex align-center" height="200">
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="text-h4 my-5">Liste d'envies</div>
                  <v-list-item-title class="text-h1 mb-1 text-primary">
                    {{ wishedBooksList() }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar tile size="80">
                  <span
                    class="mdi mdi-48px mdi-book-search text-primary"
                  ></span>
                </v-list-item-avatar>
              </v-list-item>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  props: ["books"],
  data() {
    return {
      finishedBooks: [],
      wishedBooks: [],
      isBeingReadBooks: [],
    };
  },
  methods: {
    finishedBooksList() {
      let finishCounter = 0;
      for (let i = 0; i < this.books.length; i++) {
        if (this.finishedBooks.includes(this.books[i])) {
          finishCounter--;
        }
        if (this.books[i].finish) {
          finishCounter++;
        }
      }
      return finishCounter;
    },
    wishedBooksList() {
      let wishCounter = 0;
      for (let i = 0; i < this.books.length; i++) {
        if (this.wishedBooks.includes(this.books[i])) {
          wishCounter--;
        }
        if (this.books[i].wish) {
          wishCounter++;
        }
      }
      return wishCounter;
    },
    isBeingReadBooksList() {
      let isBeingReadCounter = 0;
      for (let i = 0; i < this.books.length; i++) {
        if (this.isBeingReadBooks.includes(this.books[i])) {
          isBeingReadCounter--;
        }
        if (this.books[i].isBeingRead) {
          isBeingReadCounter++;
        }
      }
      return isBeingReadCounter;
    },
  }
};
</script>

<style scoped>
</style>