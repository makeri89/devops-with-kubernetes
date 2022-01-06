const express = require('express')

const app = express()

let count = 0

app.get('/', (_req, res) => {
  res.send(`pong ${count}`)
  count++
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})