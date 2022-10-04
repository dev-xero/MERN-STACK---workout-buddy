const express = require('express')
const {
  workout_all_get,
  workout_single_get,
  workout_create_post,
  workout_update_single,
  workout_delete_single,
} = require('../controllers/workout.controllers')

const routes = express.Router()

routes.get('/', workout_all_get)
routes.get('/:id', workout_single_get)
routes.post('/', workout_create_post)
routes.patch('/:id', workout_update_single)
routes.delete('/:id', workout_delete_single)

module.exports = { workoutRoutes: routes }
