import React from 'react'
import { useState } from 'react'

function WorkoutForm() {
  const [title, setTitle] = useState('')
  const [reps, setReps] = useState('')
  const [load, setLoad] = useState('')
  const [err, setErr] = useState(null)

  const handleSubmit = async ev => {
    ev.preventDefault()
    const workout = { title, reps, load }
    const response = await fetch('/api/workouts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workout),
    })
    const json = response.json()
    if (!response.ok) {
      setErr('Could not create a new workout, please check all your fields.')
    } else if (response.ok) {
      setErr(null)
      setTitle('')
      setLoad(0)
      setReps(0)
      console.log('new workout added')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="create">
      <h3>Add a New Workout</h3>

      <label>Exercise Title:</label>
      <input
        type="text"
        onChange={ev => setTitle(ev.target.value)}
        value={title}
      />

      <label>Reps:</label>
      <input
        type="number"
        onChange={ev => setReps(ev.target.value)}
        value={reps}
      />

      <label>Load (kg):</label>
      <input
        type="number"
        onChange={ev => setLoad(ev.target.value)}
        value={load}
      />

      <button type="submit">Add Workout</button>
      {err && <div className="error">{err}</div>}
    </form>
  )
}

export default WorkoutForm
