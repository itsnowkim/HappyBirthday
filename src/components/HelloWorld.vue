<template>
  <div>
    <!--1번째 블럭-->
    <v-row class="text-center mt-10">
      <v-col
        cols="12"
      >
        <h1 class="display-2 font-weight-bold mb-3">21.03.03</h1>
        <h2 class="display-1 font-weight-bold mb-3">
          생일 그 이상의 생일.
        </h2>
        <v-col class="mb-4">
        <p class="grey--text subheading font-weight-regular">
          가격은 걱정 없이,
          <br>마음은 그대로
        </p>
        </v-col>
      </v-col>
    </v-row>
    <v-row justify="center" class="mb-10">
        <v-img
          class="rounded-xl"
          max-width="1000"
          max-height="588"
          src="../assets/birthdaycake.jpg"
          aspect-ratio="1.7"
        ></v-img>
    </v-row>
    <!--1번째 블럭-->
    <!--2번째 블럭-->
    <v-sheet
      class="d-flex"
      color="rgb(0,0,0)"
      >
      <v-row justify="center" class="text-center mt-10 mb-12">
        <v-col
          cols="12"
        >
          <h1 class="white--text display-2 font-weight-bold mb-3">PHOTO</h1>
          <h2 class="white--text display-1 font-weight-bold mb-3">
            행복했던 시간들.
          </h2>
          <v-col class="mb-4">
          <p class="grey--text subheading font-weight-regular">
            지금까지의 추억을 한 눈에.
          </p>
          </v-col>
          <v-row justify="center" class="mb-5">
            <a
              href="/photo"
              class="mx-3 font-weight-bold"
            >
              체험하기 >
            </a>
          </v-row>
          <v-row justify="center">
          <v-img
          class="rounded-xl"
          max-width="1000"
          max-height="1000"
          src="../assets/photo.png"
          aspect-ratio="1.7"
        ></v-img></v-row>
        </v-col>
    </v-row>
    </v-sheet>
    <!--2번째 블럭-->
    <!--4번째 블럭-->
    <v-sheet
      class="d-flex"
      color="rgb(0,0,0)"
      >
      <v-row justify="center" class="text-center mt-10 mb-12">
        <v-col
          cols="12"
        >
          <h1 class="white--text display-2 font-weight-bold mb-3">LETTER</h1>
          <h2 class="white--text display-1 font-weight-bold mb-3">
            손편지의 감동을 웹에서.
          </h2>
          <v-row justify="center" class="mt-5 mb-5">
            <a
              href="/letter"
              class="mx-3 font-weight-bold"
            >
              더 알아보기 >
            </a>
          </v-row>
          <v-row justify="center">
          <v-img
          class="rounded-xl"
          max-width="1000"
          max-height="1000"
          src="../assets/hbd.png"
          aspect-ratio="1.7"
        ></v-img></v-row>
        </v-col>
    </v-row>
    </v-sheet>
    <!--4번째 블럭-->
  </div>
</template>

<script>
export default {

  data: () => ({
  })
}
</script>
