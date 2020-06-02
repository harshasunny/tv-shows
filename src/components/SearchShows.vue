<template>
      <v-container>
        <v-text-field
          v-model="searchValue"
          placeholder="Search for shows"
          :outlined="true"
          :rounded="true"
          :solo="true"
          :clearable="true"
          :flat="true"
          :dense="true"
        ></v-text-field>
        <div class="mt-1 text-center">
          <v-btn small @click="onClickSearch">Search</v-btn>
        </div>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    data: () => ({
        searchValue: ''
    }),
    methods: {
      ...mapActions(['searchShows', 'tvShows']),
      async onClickSearch () {
        if (this.searchValue === '' || this.searchValue === null) {
          await this.tvShows()
        } else {
          await this.searchShows(this.searchValue.trim())
        }
      }
    }
}
</script>