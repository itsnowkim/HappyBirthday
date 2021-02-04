<!-- Vue Component -->
<template>
  <div>
    <!--1번째 블럭-->
    <v-sheet class="d-flex">
      <v-container fluid grid-list-md>
        <v-layout align-center justify-center class="text-center">
          <div color="white" class="mt-12">
              <h3 class="headline font-weight-bold mb-3">GIFT</h3>
              <h1 class="display-2 font-weight-bold mb-3">사랑하는 사람에게 선물을</h1>
              <v-row justify="center" class="mt-15">
                <v-img
                class="rounded-xl"
                width="1000"
                src="../assets/presento.png"
                aspect-ratio="1.7"
              ></v-img></v-row>
          </div>
        </v-layout>
      </v-container>
    </v-sheet>
    <!--1번째 블럭-->
    <!--2번째 블럭-->
    <!--2번째 블럭-->
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
