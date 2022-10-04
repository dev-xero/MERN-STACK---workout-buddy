import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
	return (
		<header>
			<Link to="/">
				<h1>Workout Buddy</h1>
			</Link>
		</header>
	)
}
