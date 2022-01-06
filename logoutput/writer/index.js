const fs = require('fs')
const moment = require('moment')
const { v4: uuidv4 } = require('uuid')
const path = require('path')

const randomString = uuidv4()

const directory = path.join('/', 'usr', 'src', 'app', 'logs')
const filePath = path.join(directory, 'log.txt')

const getTimestampedString = (string) => {
  const timestamp = moment().format()
  return `${timestamp}: ${string}`
}

const write = () => {
  const stringToWrite = getTimestampedString(randomString)
  fs.writeFile(filePath, stringToWrite, (error) => {
    if (error) {
      console.error(error)
    }
  })
  setTimeout(write, 5000)
}

write()