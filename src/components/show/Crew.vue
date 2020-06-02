<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="(person, i) in crew" :key="i" class="d-flex child-flex" cols="3">
        <v-card  class="mx-auto" max-width="200" align="center">
          <!-- <v-icon size="xl" v-if="person.person.image === null">mdi-account</v-icon> -->
          <v-img src="@/assets/no-poster.png" v-if="person.person.image === null"  class="white--text align-end"></v-img>
          <v-img v-else :src="person.person.image.medium" class="white--text align-end">
            <template v-slot:placeholder>
              <v-row class="fill-height ma-0" align="center" justify="center">
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-subtitle class="pb-0">{{person.person.name}}</v-card-subtitle>

          <v-card-text class="text--primary">
            <div>{{person.type}}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["showData"],
  computed: {
    crew() {
      return this.showData._embedded.crew;
    }
  }
};
</script>