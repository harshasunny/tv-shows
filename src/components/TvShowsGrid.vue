<template>
  <v-container>
    <div class="text-center pa-4">
      <v-pagination v-model="currentPage" :length="totalPages" :total-visible="7"></v-pagination>
    </div>
    <v-row align="center" justify="center">
      <template v-for="(show, i) in recordsOnPage">
        <v-col :key="i">
          <TvShowCard :showData="show" />
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>
<script>
import TvShowCard from '@/components/TvShowCard.vue'

export default {
  components: {
    TvShowCard
  },
  props: {
    tvShowsData: Array
  },
  data: () => ({
    sortedTvShows: [],
    currentPage: 1,
    totalPages: 0,
    perPage: 10,
    startIndex: 0,
    recordsOnPage: []
  }),
  watch: {
    currentPage(newVal) {
      this.filterRecords(newVal);
    }
  },
  created() {
    this.sortTvShows();
    this.filterRecords(this.currentPage);
    this.totalPages = Math.ceil(this.tvShowsData.length / this.perPage);
  },
  methods: {
    // Sorting TV shows based on rating in descending order
    sortTvShows() {
      let sortedData = this.tvShowsData.sort((a, b) => {
        return b.rating.average - a.rating.average;
      });
      this.sortedTvShows = sortedData;
    },
    filterRecords(currentPage) {
      this.startIndex = this.perPage * currentPage - this.perPage;
      this.endIndex = this.perPage * currentPage;
      this.recordsOnPage = this.sortedTvShows.slice(
        this.startIndex,
        this.endIndex
      );
    }
  }
};
</script>