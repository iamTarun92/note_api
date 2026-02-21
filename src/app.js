require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRouter = require('./routes/user-routes')
const noteRouter = require('./routes/note-routes')

const app = express()
const port = process.env.PORT || 3000
const MONGODB_URI =
  process.env.MONGODB_URI ||
  'mongodb+srv://admin:admin@cluster0.ixhnxgz.mongodb.net/notes_db?appName=Cluster0'

app.use(cors()) // Enable CORS for all routes (you can configure it further if needed)
app.use(express.json())

// Routes
app.use('/api/users', userRouter)
app.use('/api/notes', noteRouter)

// Default route
app.get('/', (req, res) => {
  res.status(200).send('Welcome to the Note API!')
})

// Connect to MongoDB and start the server
mongoose
  .connect(MONGODB_URI)
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
