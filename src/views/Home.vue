<template>
  <v-container>
    <Genres @genre-selected="genreSelected" />
    <SearchShows  />
    <template v-if="!tvShowsLoading">
      <TvShowsGrid v-if="tvShowsData != null" :tv-shows-data="tvShowsData" />
    </template>

  </v-container>
</template>

<script>
import Genres from "@/components/Genres.vue";
import TvShowsGrid from "@/components/TvShowsGrid.vue";
import SearchShows from "@/components/SearchShows.vue";
import { mapActions, mapState } from "vuex";

export default {
  name: "Home",
  components: {
    TvShowsGrid, SearchShows, Genres
  },
  computed: {
    ...mapState({
      tvShowsData: "tvShows", 
      tvShowsLoading: 'tvShowsLoading'
    })
  },
  created() {
    this.getTvShows();
  },
  methods: {
    ...mapActions(["tvShows"]),
    async getTvShows() {
      await this.tvShows()
    },
    async genreSelected (genre) {
      if (genre === '' || genre === 'Popular') {
        await this.tvShows()
      } else {
        await this.tvShows()
        let cloneTvShowsData = JSON.parse(JSON.stringify(this.tvShowsData))
        let genreShows = cloneTvShowsData.filter((show) => {
          return show.genres.includes(genre)
        })
        await this.$store.commit('LOADING_TV_SHOWS', true)
        await this.$store.commit('UPDATE_TV_SHOWS_DATA', genreShows)
        await this.$store.commit('LOADING_TV_SHOWS', false)
      }
    }
  }
};
</script>
