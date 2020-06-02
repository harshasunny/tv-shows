<template>
  <v-card class="mx-auto" max-width="250" @click="onClickTvShow">
    <v-img src="@/assets/no-poster.png" v-if="showData.image === null" height="350px"  class="white--text align-end"></v-img>
    <v-img v-else class="white--text align-end" height="350px"  :src="showData.image.medium">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-subtitle class="pb-0">{{showData.name}}</v-card-subtitle>
    
    <v-card-text class="text--primary">
      <div><small>{{showData.premiered | dateMonthYear}}</small></div>
      <div><small><i>{{showData.genres | arrayToList}}</i></small></div>
    </v-card-text>

  </v-card>
</template>
<script>
import { dateMonthYear, arrayToList } from '../filters'

export default {
  props: {
    showData: Object
  },
  filters: { 
    dateMonthYear, arrayToList
  },
  methods: {
    onClickTvShow () {
      this.$router.push('show/' + this.showData.id)
    }
  }
}
</script>