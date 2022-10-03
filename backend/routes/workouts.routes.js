const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>
  res.json({ workouts: 'Here are your workouts' })
)

module.exports = { workoutRoutes: routes }
