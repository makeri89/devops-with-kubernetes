const fs = require('fs')
const path = require('path')
const express = require('express')

const app = express()

const directory = path.join('/', 'usr', 'src', 'app', 'logs')
const filePath = path.join(directory, 'log.txt')

let log = 'reading'

const read = async () => {
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.log(error)
      return error
    }
    log = data
  })
}

read()

app.get('/status', async (_req, res) => {
  await read()
  res.send(log)
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
