const express = require('express')
const products = require('../products.json')

const app = express()
const port = 3000

// Routes
app.get('/', (req, res) => {
  res.status(200).json(products)
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})
