<template>
  <v-app>
    <v-app-bar app clipped-left>
      <v-btn to="/" exact>
        <v-toolbar-title>TV Shows</v-toolbar-title>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
    <v-footer app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-app>
</template>
<script>
export default {};
</script>
<style>
</style>
