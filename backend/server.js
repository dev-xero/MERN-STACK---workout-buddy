const express = require('express')
const mongoose = require('mongoose')
const { workoutRoutes } = require('./routes/workouts.routes')

const app = express()
const dbURI = process.env.MONGO_URI
const port = process.env.PORT || 3000

app.use(express.json())

app.use((req, res, next) => {
  console.log(`Request made to the server: ${req.path} ${req.method}`)
  next()
})

app.use('/api/workouts', workoutRoutes)

mongoose
  .connect(dbURI)
  .then(() => {
    console.log('connected to database')
    app.listen(port, () =>
      console.log(
        `Listening for requests at port ${port}, site live on: http://localhost:${port}`
      )
    )
  })
  .catch(err => console.log(err))
