const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) =>
  res.json({ workouts: 'Here are your workouts' })
)

routes.get('/:id', (req, res) =>
		res.json({ workout: `Viewing workout for ${req.url.id}` })
)

routes.post('/', (req, res) =>
		res.json({ workout: `Creating a new workout` })
)

routes.patch('/:id', (req, res) =>
  res.json({ workout: `Updating workout details for ${req.url.id}` })
)

routes.delete('/:id', (req, res) =>
		res.json({ workout: `Deleting the workout at ${req.url.id}` })
)

module.exports = { workoutRoutes: routes }
