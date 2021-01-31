<!-- Vue Component -->

<template>
  <div>
      <v-card v-if="height == 0">
          I'm mobile
      </v-card>
      <v-card v-else>
          I'm desktop
      </v-card>
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
