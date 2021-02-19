const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./models/User')
const bcrypt = require('bcrypt')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())

app.get('/', (req, res) => {
  res.send('here is backend')
})

const port = process.env.PORT || 5000

app.listen(port, (err) => {
  if (err) return console.log(err)
  console.log('server running on port : ' + port)
})

// mongoose connect
mongoose.connect('mongodb+srv://dbUser:dbUser123@cluster0.l8dq1.mongodb.net/<birthday>?retryWrites=true&w=majority', { useNewUrlParser: true }, err => {
  if (err) return console.log('ERROR' + err)
  console.log('mongoose connected!')
})

// signup method
app.post('/signup', (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10)
  })
  newUser.save(err => {
    if (req.body.email !== 'peterhyunjae@naver.com' && req.body.email !== 'hongmiyo03@snu.ac.kr') {
      return res.status(401).json({
        title: 'error',
        error: '승인이 필요한 이메일입니다.'
      })
    }
    if (err) {
      return res.status(400).json({
        // 같은 이메일이 있어서 저장이 되지 않을 경우
        title: 'error',
        error: '이미 사용중인 이메일입니다.'
      })
    }
    // err없음, 저장 성공, status code 보내줘야 함
    return res.status(200).json({
      title: 'success'
    })
  })
})

// login method
