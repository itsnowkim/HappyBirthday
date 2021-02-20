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
      message: '신체장애자 및 질병·노령 기타의 사유로 생활능력이 없는 국민은 법률이 정하는 바에 의하여 국가의 보호를 받는다. 제1항의 해임건의는 국회재적의원 3분의 1 이상의 발의에 의하여 국회재적의원 과반수의 찬성이 있어야 한다.모든 국민은 소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 훈장등의 영전은 이를 받은 자에게만 효력이 있고, 어떠한 특권도 이에 따르지 아니한다.'
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
