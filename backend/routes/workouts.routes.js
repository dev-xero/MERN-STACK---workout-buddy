const express = require('express')
const routes = express.Router()

routes.get('/workouts', (req, res) =>
  res.json({ workouts: 'Here are your workouts' })
)

module.exports = routes
