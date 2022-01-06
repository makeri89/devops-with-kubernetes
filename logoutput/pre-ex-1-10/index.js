const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
const express = require('express')

const app = express()

const randomString = uuidv4()

app.get('/status', (_req, res) => {
  res.send(getTimestampedString(randomString))
})

const getTimestampedString = (string) => {
  const timestamp = moment().format()
  return `${timestamp}: ${string}`
}

const logger = (string) => {
  console.log(getTimestampedString(string))
  setTimeout(logger, 5000, string)
}

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
  logger(randomString)
})