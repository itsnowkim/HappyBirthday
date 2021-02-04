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

    <v-footer
      padless
    >
      <v-card
        flat
        tile
        class="lighten-1 text-center"
        color="#f2f2f2"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
          <a :href="icon.link" style="color: #515154">
            <v-icon size="24px">
              {{ icon.img }}
            </v-icon></a>
          </v-btn>
        </v-card-text>

        <v-card-text class="pt-0">
          생일 축하 페이지는 Nowkim 혼자 독립적으로 제작하였으며 재배포 및 수정은 허용됩니다. vue.js를 사용하여 제작한 두 번째 페이지로, 상당히 미숙할 수 있음에 유의하여 주시기 바랍니다. 진심을 담아서 마음을 담아서 제작하였습니다. 일부 브라우저나 환경에서는 본 페이지가 어색할 수 있으며, 모바일과 데스크톱 모두 지원하도록 노력하였습니다. 생일을 맞이한 사람을 위해 축하하는 마음으로 너그러이 넘어가 주시길 바랍니다.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text>
          2021 — <strong>Now Kim</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      group: null,
      icons: [
        {
          img: 'mdi-facebook',
          link: 'https://www.facebook.com/people/%EA%B9%80%ED%98%84%EC%9E%AC/100014398279125'
        },
        {
          img: 'mdi-git',
          link: 'https://github.com/itsnowkim'
        },
        {
          img: 'mdi-instagram',
          link: 'https://www.instagram.com/n0wkim/'
        }
      ]
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
