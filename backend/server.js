const express = require('express')
const { workoutRoutes } = require('./routes/workouts.routes')

const app = express()
const port = process.env.PORT || 3000

app.use((req, res, next) => {
  console.log(`Request made to the server: ${req.path} ${req.method}`)
  next()
})

app.use('/api/workouts', workoutRoutes)

app.listen(port, () => {
  console.log(
    `Listening for requests at port ${port}, site live on: http://localhost:${port}`
  )
})
