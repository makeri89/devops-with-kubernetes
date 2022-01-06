const express = require('express')

const app = express()

app.use(express.static('public', { extensions: ['html'] }))

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})