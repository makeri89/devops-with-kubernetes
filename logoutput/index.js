const moment = require('moment')
const { v4: uuidv4 } = require('uuid')

const logger = (string) => {
  const timestamp = moment().format()

  console.log(`${timestamp}: ${string}`)

  setTimeout(logger, 5000, string)
}

const main = () => {
  const randomString = uuidv4()
  logger(randomString)
}

main()