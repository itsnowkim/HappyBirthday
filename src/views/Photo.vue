<!-- Vue Component -->
<template>
  <div>
    <!--1번째 블럭-->
    <v-sheet>
      <v-container fluid grid-list-md>
        <v-row class="ma-12" align="center">
          <v-col cols="6">
            <v-layout justify-center class="text-center">
              <v-sheet color="white" class="mt-12">
                  <h1 class="display-2 font-weight-bold mb-3">광장동에서</h1>
                  <h3 class="headline font-weight-bold mb-3">20.03.03</h3>
                  <p>{{letter}}</p>
              </v-sheet>
            </v-layout>
          </v-col>
          <v-col cols="6">
            <v-layout>
                <v-carousel cycle height="auto" hide-delimiters>
                  <v-carousel-item v-for="(item, i) in items" :key="i">
                    <v-img :src="item.src" contain height="400" ></v-img>
                  </v-carousel-item>
                </v-carousel>
            </v-layout>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <!--1번째 블럭-->
    <!--2번째 블럭-->
    <v-sheet color="#f2f2f2">
      <v-container fluid grid-list-md>
        <v-row class="ma-12" align="center">
          <v-col cols="6">
            <v-layout>
                <v-carousel cycle height="auto" hide-delimiters>
                  <v-carousel-item v-for="(item, i) in items" :key="i">
                    <v-img :src="item.src" contain height="400" ></v-img>
                  </v-carousel-item>
                </v-carousel>
            </v-layout>
          </v-col>
          <v-col cols="6">
            <v-layout justify-center class="text-center">
              <v-sheet color="#f2f2f2" class="mt-12">
                  <h1 class="display-2 font-weight-bold mb-3">광장동에서</h1>
                  <h3 class="headline font-weight-bold mb-3">20.03.03</h3>
                  <p>{{letter}}</p>
              </v-sheet>
            </v-layout>
          </v-col>
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
      items: [
        { src: require('@/assets/birthdaycake.jpg') },
        { src: require('@/assets/hbd.png') },
        { src: require('@/assets/present.jpg') },
        { src: require('@/assets/presento.png') }
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
