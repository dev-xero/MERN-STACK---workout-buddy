import React from 'react'
import { useEffect, useState } from 'react'

export default function Home() {
  const [workouts, setWorkouts] = useState(null)

  useEffect(() => {
    const fetchWorkouts = async () => {
			const response = await fetch('/api/workouts')
			console.log(response)
      const json = await response.json()
      if (response.ok) {
        setWorkouts(json)
      }
    }
    fetchWorkouts()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map(({ _id, title, reps, load }) => (
						<p key={_id}>{ title }</p>
          ))}
      </div>
    </div>
  )
}
