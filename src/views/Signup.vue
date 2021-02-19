<template>
    <v-container>
        <div class="text-center"><br><br><br>
            <h1>This is SignUp Page</h1>
            <h2>Only who authorized can sign up</h2><br><br><br>

            <v-dialog v-model="dialog">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on">SignUp</v-btn>
                </template>
                <v-card>
                    <v-card-title class="headline">SignUp</v-card-title>
                    <v-card-text>
                    <v-container>
                        <v-text-field v-model="name" label="Name : "></v-text-field>
                        <v-text-field v-model="email" label="Email : "></v-text-field>
                        <v-text-field v-model="password" type="password" label="Password : "></v-text-field>
                        <span class="red--text">{{ error }}</span>
                    </v-container>
                    </v-card-text>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false" color="red">Close</v-btn>
                    <v-btn text @click="signup" color="green">Save</v-btn>
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
      name: '',

      error: '',

      dialog: false
    }
  },
  methods: {
    signup () {
      // need login method
      const user = { email: this.email, password: this.password, name: this.name }
      console.log(user)
      axios.post('http://localhost:5000/signup', user)
        .then(res => {
          console.log(res.data)
          this.error = ''
          this.$router.push('/')
        }, err => {
          console.log(err.response)
          this.error = err.response.data.error
        })
    }
  }
}
</script>
