const Workout = require('../models/Workouts.model')
const mongoose = require('mongoose')

// GET ALL WORKOUTS
const workout_all_get = async (req, res) => {
  const workouts = await Workout.find({}).sort({ createdAt: -1 })
  res.status(200).json(workouts)
}

// GET A SINGLE WORKOUT
const workout_single_get = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout' })
  }
  const workout = await Workout.findById(id)
  if (!workout) {
    return res.status(404).json({ error: 'No such workout' })
  }
  res.status(200).json(workout)
}

// CREATE A NEW WORKOUT
const workout_create_post = async (req, res) => {
  const { title, reps, load } = req.body
  try {
    const workout = await Workout.create({ title, reps, load })
    res.status(200).json(workout)
  } catch (err) {
    res.status(400).json({ error: err })
  }
}

// UPDATE A SINGLE WORKOUT
const workout_update_single = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout to delete' })
  }
  const workout = await Workout.findOneAndUpdate({ _id: id }, { ...req.body })
  if (!workout) {
    return res.status(400).json({ error: 'No such workout to update' })
  }
  res.status(200).json(workout)
}

// DELETE A WORKOUT
const workout_delete_single = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'No such workout to delete' })
  }
  const workout = await Workout.findOneAndDelete({ _id: id })
  if (!workout) {
    return res.status(400).json({ error: 'No such workout to delete' })
  }
  res.status(200).json(workout)
}

// EXPORT CONTROLLER FUNCTIONS
module.exports = {
  workout_all_get,
  workout_single_get,
  workout_create_post,
  workout_update_single,
  workout_delete_single,
}
