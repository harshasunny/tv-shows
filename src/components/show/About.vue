<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-img class="white--text align-end" height="500px" :src="showData.image.original">
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col cols="8">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Summary</v-list-item-subtitle>
            <small><p class="text-justify" v-html="this.showData.summary"></p></small>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Status</v-list-item-subtitle>
            <small><p>{{this.showData.status}}</p></small>
          </v-list-item-content>
        </v-list-item>
        
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Language</v-list-item-subtitle>
            <small><p>{{this.showData.language}}</p></small>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Genres</v-list-item-subtitle>
            <small><p>{{this.showData.genres | arrayToList}}</p></small>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Premiered</v-list-item-subtitle>
            <v-list-item-title>{{this.showData.premiered}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Official Site</v-list-item-subtitle>
            <v-list-item-title>
              {{this.showData.officialSite}}
              <v-btn  fab x-small dark>
              <a :href="this.showData.officialSite" target="_blank">
                <v-icon>mdi-open-in-new</v-icon>
              </a>
            </v-btn>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Rating</v-list-item-subtitle>
            <v-list-item-title>{{this.showData.rating.average}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { arrayToList } from '../../filters'

export default {
  props: ["showData"],
  filters: {
    arrayToList
  }
};
</script>