const express = require('express')
const fs = require('fs')
const path = require('path')

const app = express()

const directory = path.join('/', 'usr', 'src', 'app', 'logs')
const filePath = path.join(directory, 'pongs.txt')

let count = 0

const saveCount = (count) => {
  fs.writeFile(filePath, String(count), (error) => {
    if (error) {
      console.log(error)
    }
  })
}

app.get('/', (_req, res) => {
  res.send(`pong ${count}`)
  saveCount(count)
  count++
})

const PORT = 4000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})