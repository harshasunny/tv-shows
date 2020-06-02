<template>
    <v-container>
    <v-tabs class="mt-5" v-model="activeTab" show-arrows>
        <v-tab v-for="(season, i) in seasons" :key="i">Season {{season}}</v-tab>
      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item v-for="(season, i) in episodes" :key="i">
             <v-simple-table>
    <template v-slot:default>
        <thead>
        <tr>
          <th class="text-left">Episode</th>
          <th class="text-left">Name</th>
          <th class="text-left">Air Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(episode, j) in season" :key="j">
          <td>{{ episode.number }}</td>
          <td>{{ episode.name }}</td>
          <td>{{ episode.airdate | dateMonthYear }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-tab-item>
      </v-tabs-items>
    </v-container>
</template>

<script>
import { dateMonthYear } from '../../filters'
export default {
    props: ["showData"],
    filters: {
        dateMonthYear
    },
    data: () => ({
        activeTab: null
    }),
    computed: {
        seasons () {
            let episodeData = this.showData._embedded.episodes
            let seasonWise = []
            for (let i = 0; i < episodeData.length; i++) {
                seasonWise.push(episodeData[i].season)
            }
            let uniqueSet = new Set(seasonWise) // It will return in object format
            return [...uniqueSet]
        },
        episodes () {
            let seasons = []
            let episodeData = this.showData._embedded.episodes
            for (let i = 0; i < this.seasons.length; i++) {
                let episodes = episodeData.filter((episode) => episode.season === this.seasons[i])
                seasons.push(episodes)
            }
            return seasons
        }
    }
}
</script>