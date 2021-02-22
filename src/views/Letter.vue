<template>
    <v-container>
        <div class="text-center"><br><br><br>
            <h1>401 not authorized!</h1>
            <h2>If you want to see the contents, Please Log in</h2><br><br><br>
            <v-dialog v-model="dialog">
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-bind="attrs" v-on="on">Login</v-btn>
              </template>
              <v-card>
                <v-card-title class="headline">Login</v-card-title>
                <v-card-text>
                  <v-container>
                    <v-text-field v-model="email" label="Email : "></v-text-field>
                    <v-text-field v-model="password" type="password" label="Password : "></v-text-field>
                    <span class="red--text">{{ error }}</span>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text @click="dialog = false" color="red">Close</v-btn>
                  <v-btn text @click="login" color="blue">Login</v-btn>
                  <v-btn text @click="signup" color="green">Signup</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
        </div>
    </v-container>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: '',

      error: '',

      dialog: false
    }
  },
  methods: {
    login () {
      // need login method
      const user = { email: this.email, password: this.password }
      axios.post('http://localhost:5000/login', user)
        .then(res => {
          if (res.status === 200) { // login success
            localStorage.setItem('token', res.data.token)
            this.error = ''
            this.dialog = false
            this.$router.push('/letterview')
          }
        }, err => {
          console.log(err)
          this.error = err.response.data.error
        })
    },
    signup () {
      this.dialog = false
      this.$router.push('/signup')
    }
  },
  mounted () {
    axios.get('http://localhost:5000/user', {
      headers: { token: localStorage.getItem('token') }
    }).then(res => {
      this.$router.push('/letterview')
    })
  }
}
</script>
