<template>
  <v-container>
    <div>
      <v-btn color="blue-grey ma-2 white--text" to="/" exact>
        Go back<v-icon right dark>mdi-keyboard-backspace</v-icon>
      </v-btn>
    </div>
    <div v-if="tvShowData != null">
      <!-- <v-img src="@/assets/no-poster.png" v-if="person.person.image === null"  class="white--text align-end"></v-img> -->
      <div v-if="backgrounndImage === ''" class="text-center">
        <v-sheet color="orange lighten-2 pa-10">No background image available</v-sheet>
      </div>
      <v-img v-else :src="backgrounndImage" class="grey lighten-2" max-height="300">
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
      </v-img>

      <v-card>
        <v-card-title class="text-center justify-center py-6">
          <h1 class="font-weight-bold display-1">{{tvShowData.name}}</h1>
        </v-card-title>
      </v-card>
      <v-tabs class="mt-5" v-model="activeTab">
        <v-tab>About</v-tab>
        <v-tab>Episodes</v-tab>
        <v-tab>Cast</v-tab>
        <v-tab>Crew</v-tab>
      </v-tabs>
      <v-tabs-items v-model="activeTab">
        <v-tab-item>
          <About :showData="tvShowData" />
        </v-tab-item>
        <v-tab-item>
          <Episodes :showData="tvShowData" />
        </v-tab-item>
        <v-tab-item>
          <Cast :showData="tvShowData" />
        </v-tab-item>
        <v-tab-item>
          <Crew :showData="tvShowData" />
        </v-tab-item>
      </v-tabs-items>
    </div>
    <div v-else>
      <v-row class="fill-height ma-0" align="center" justify="center">
        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
      </v-row>
    </div>
  </v-container>
</template>
<script>
import { mapActions, mapState } from "vuex";
import About from "@/components/show/About.vue";
import Cast from "@/components/show/Cast.vue";
import Crew from "@/components/show/Crew.vue";
import Episodes from "@/components/show/Episodes.vue";

export default {
  components: {
    About,
    Cast,
    Crew,
    Episodes
  },
  data: () => ({
    activeTab: null
  }),
  computed: {
    ...mapState(["tvShowData"]),
    showId() {
      return this.$route.params.id;
    },
    backgrounndImage() {
      let backgronudImageData = this.$store.state.tvShowData._embedded.images.find(
        rec => {
          return rec.type === "background";
        }
      );
      if (!backgronudImageData) {
        return "";
      }
      return backgronudImageData.resolutions.original.url;
    }
  },
  created() {
    this.getTvShowData();
  },
  beforeDestroy: function() {
    this.removeShowData();
  },
  methods: {
    ...mapActions(["getTvShowById", "removeShowData"]),
    async getTvShowData() {
      await this.getTvShowById(this.showId);
    }
  }
};
</script>