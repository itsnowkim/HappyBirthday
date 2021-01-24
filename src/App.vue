<template>
  <v-app>
    <v-app-bar
      app
      color="rgb(51, 51, 51)"
      dark
    >
    <v-btn icon to="/">
      <v-icon>mdi-cake</v-icon>
    </v-btn>

    <v-row align="center" justify="space-around">
      <v-btn text to="/about">Photo</v-btn>
      <v-btn text>Gift</v-btn>
      <v-btn text>Letter</v-btn>
      <v-btn text>Learn more</v-btn>
    </v-row>

    </v-app-bar>
    <v-content>
    <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>
