const express = require('express')
const userRouter = express.Router()

userRouter.post('/signup', (req, res) => {
  res.send('User signup request!')
})
userRouter.post('/login', (req, res) => {
  res.send('User login request!')
})

module.exports = userRouter
