<template>
  <v-container>
    <!--1번째 블럭-->
    <v-sheet>
      <v-row align="center" justify="center" class="text-center mt-10">
          <v-col xs6 sm6 md4 lg2>
            <v-sheet color="white" class="mt-12">
              <h1 class="display-2 font-weight-bold mb-3">광장동에서</h1>
              <h3 class="headline font-weight-bold mb-3">20.03.03</h3>
            </v-sheet>
          </v-col>
          <v-col xs6 sm6 md4 lg2>
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            show-arrows-on-hover
          >
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
          </v-col>
      </v-row>
    </v-sheet>
  <!--1번째 블럭-->
  </v-container>
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
      ]
    }
  }
}
</script>
