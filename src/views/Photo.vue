<!-- Vue Component -->
<template>
  <div>
    <!--1번째 블럭-->
    <v-sheet>
      <v-container fluid grid-list-md>
        <v-row class="ma-12">
        <v-layout align-center justify-center class="text-center">
          <v-sheet color="white" class="mt-12">
              <h1 class="display-2 font-weight-bold mb-3">광장동에서</h1>
              <h3 class="headline font-weight-bold mb-3">20.03.03</h3>
              <p>{{letter}}</p>
          </v-sheet>
        </v-layout>
        <v-layout>
            <v-carousel cycle height="400px" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
              >
                <v-sheet
                  :color="colors[i]"
                  height="100%"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="display-3">
                      {{ slide }} Slide
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
        </v-layout>
      </v-row>
      </v-container>
    </v-sheet>
    <!--1번째 블럭-->
    <!--2번째 블럭-->
    <v-sheet color="#f2f2f2">
      <v-container fluid grid-list-md>
        <v-row class="ma-12">
        <v-layout>
            <v-carousel cycle height="400px" hide-delimiter-background show-arrows-on-hover>
              <v-carousel-item
                v-for="(slide, i) in slides"
                :key="i"
              >
                <v-sheet
                  :color="colors[i]"
                  height="100%"
                >
                  <v-row
                    class="fill-height"
                    align="center"
                    justify="center"
                  >
                    <div class="display-3">
                      {{ slide }} Slide
                    </div>
                  </v-row>
                </v-sheet>
              </v-carousel-item>
            </v-carousel>
        </v-layout>
        <v-layout align-center justify-center class="text-center">
          <v-sheet color="#f2f2f2" class="mt-12">
              <h1 class="display-2 font-weight-bold mb-3">광장동에서</h1>
              <h3 class="headline font-weight-bold mb-3">20.03.03</h3>
              <p>{{letter}}</p>
          </v-sheet>
        </v-layout>
      </v-row>
      </v-container>
    </v-sheet>
    <!--2번째 블럭-->
  </div>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'indigo',
        'warning',
        'pink darken-2',
        'red lighten-1',
        'deep-purple accent-4'
      ],
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth'
      ],
      // eslint-disable-next-line quotes
      letter: `aesrf
      faewoihfe
      aowefhie`
    }
  },
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
