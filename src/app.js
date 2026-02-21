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

// Connect to MongoDB and start the server
mongoose
  .connect(
    'mongodb+srv://admin:admin@cluster0.ixhnxgz.mongodb.net/?appName=Cluster0',
  )
  .then(() => {
    // Start the server after successful connection to MongoDB
    console.log('Connected to MongoDB')
    app.listen(port, () => {
      console.log(`Server started on port ${port}`)
    })
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err)
  })
