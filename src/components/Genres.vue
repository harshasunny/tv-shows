<template>
  <v-container>
    <template v-for="(category, i) in categories">
      <v-chip
        @click="genreSelected(category)"
        class="ma-2"
        :color="selected == category ? 'primary' : 'default'"
        :key="i"
      >{{category | capitalize}}</v-chip>
    </template>
  </v-container>
</template>
<script>
import { capitalize } from "../filters";

export default {
  data: () => ({
    selected: "popular",
    categories: ["Popular", "Comedy", "Drama", "Crime", "Thriller", "Fantasy", "Action", "War", "Medical"]
  }),
  filters: {
    capitalize
  },
  methods: {
    genreSelected(category) {
      this.selected = category;
      this.$emit("genre-selected", this.selected);
    }
  }
};
</script>