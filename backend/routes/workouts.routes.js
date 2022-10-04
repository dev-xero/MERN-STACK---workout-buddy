const express = require('express')
const {
  workout_all_get,
  workout_single_get,
  workout_create_post,
} = require('../controllers/workout.controllers')

const routes = express.Router()

routes.get('/', workout_all_get)
routes.get('/:id', workout_single_get)
routes.post('/', workout_create_post)

routes.patch('/:id', (req, res) =>
  res.json({ workout: `Updating workout details for ${req.params.id}` })
)

routes.delete('/:id', (req, res) =>
  res.json({ workout: `Deleting the workout at ${req.params.id}` })
)

module.exports = { workoutRoutes: routes }
