<template>
  <v-app>
    <div v-if="mobile == 0">
      <v-app-bar app color="rgb(51, 51, 51)" dark>
        <v-app-bar-nav-icon @click="drawer = !drawer"/>
        <v-spacer></v-spacer><v-btn class="mr-12" icon to="/"><v-icon>mdi-cake</v-icon></v-btn>
        <v-spacer></v-spacer>
      </v-app-bar>

      <v-navigation-drawer app v-model="drawer">
        <v-list nav dense>
          <v-list-item-group v-model="group">
            <v-list-item to="/photo">
              <v-list-item-title>PHOTO</v-list-item-title>
            </v-list-item>
            <v-list-item to="/gift">
              <v-list-item-title>GIFT</v-list-item-title>
            </v-list-item>
            <v-list-item to="/letter">
              <v-list-item-title>LETTER</v-list-item-title>
            </v-list-item>
            <v-list-item to="/learnmore">
              <v-list-item-title>LEARN MORE</v-list-item-title>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    </div>
    <v-app-bar app color="rgb(51, 51, 51)" dark v-else>
    <v-row no-gutters align="center" justify="space-around">
      <v-btn icon to="/"><v-icon>mdi-cake</v-icon></v-btn>
      <v-btn text to="/photo">Photo</v-btn>
      <v-btn text to="/gift">Gift</v-btn>
      <v-btn text to="/letter">Letter</v-btn>
      <v-btn text to="/learnmore">Learn more</v-btn>
    </v-row>

    </v-app-bar>

    <v-main>
    <router-view></router-view>
    </v-main>

    <v-footer app absolute>
      hi
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      group: null
    }
  },
  watch: {
    group () {
      this.drawer = false
    }
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    mobile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 0
        case 'sm': return 0
      }
    }
  }
}
</script>
