const express = require('express')
const app = express()

const port = process.env.PORT || 3000

app.use((req, res, next) => {
  console.log(`Request made to the server: ${req.path} ${req.method}`)
  next()
})

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the app' })
})

app.listen(port, () => {
  console.log(
    `Listening for requests at port ${port}, site live on: http://localhost:${port}`
  )
})
