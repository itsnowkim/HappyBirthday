<template>
    <div>
        <div class="text-center mt-15 mb-10">
            <h1>HAPPY BIRTHDAY, <span class="green--text">{{name}}</span>!</h1>
        </div>
        <div>
            <v-card class="ma-15">
                <v-card-title>현재에게</v-card-title>
                <v-card-subtitle>안녕?</v-card-subtitle>
                <v-card-text>{{ message }}</v-card-text>
            </v-card>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      name: '',
      message: 'hello'
    }
  },
  created () {
    // user is not login
    if (localStorage.getItem('token') === null) {
      this.$router.push('/letter')
    }
  },
  mounted () {
    axios.get('http://localhost:5000/user', {
      headers: { token: localStorage.getItem('token') }
    }).then(res => {
      this.name = res.data.user.name
    })
  }
}
</script>
