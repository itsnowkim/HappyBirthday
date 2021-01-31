<!-- Vue Component -->
<template>
  <div>
    <v-sheet>
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 xl2>
            <v-card>first</v-card>
          </v-flex>
          <v-flex xs12 sm6 md4 lg3 xl2>
            <v-card>second</v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    height () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 0
        case 'sm': return 0
      }
    }
  }
}
</script>
