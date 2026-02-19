const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./routes/user-routes')
const noteRouter = require('./routes/note-routes')
const app = express()
const port = 3000

app.use(express.json())

// Routes
app.use('/api/users', userRouter)
app.use('/api/notes', noteRouter)

app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Note API!')
})

mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.ixhnxgz.mongodb.net/?appName=Cluster0',
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
    console.log('Connected to MongoDB')
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
  })
