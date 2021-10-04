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
                    {{ finishedBooksList.length }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                >
                <span class="mdi mdi-48px mdi-bookshelf text-primary "></span>
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
                  <div class="text-h4  my-5">En cours</div>
                  <v-list-item-title class="text-h1 mb-1 text-primary">
                    {{ isBeingReadBooksList.length }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                >
                <span class="mdi mdi-48px mdi-book-open-page-variant text-primary"></span>
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
                  <div class="text-h4  my-5">Liste d'envies</div>
                  <v-list-item-title class="text-h1 mb-1 text-primary">
                    {{ wishedBooksList.length }}
                  </v-list-item-title>
                </v-list-item-content>

                <v-list-item-avatar
                  tile
                  size="80"
                >
                <span class="mdi mdi-48px mdi-book-search text-primary"></span>
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
          isBeingReadBooks: []
      }
  },
  computed : {
      finishedBooksList() {
      this.books.forEach((book) => {
        if (book.finish) {
          this.finishedBooks.push(book);
        }
      });
      console.log(this.finishedBooks);
      return this.finishedBooks;
    },
    wishedBooksList() {
      this.books.forEach((book) => {
        if (book.wish) {
          this.wishedBooks.push(book);
        }
      });
      return this.wishedBooks;
    },
    isBeingReadBooksList() {
      this.books.forEach((book) => {
        if (book.isBeingRead) {
          this.isBeingReadBooks.push(book);
        }
      });
      return this.isBeingReadBooks;
    },
  }
}
</script>

<style scoped>
</style>