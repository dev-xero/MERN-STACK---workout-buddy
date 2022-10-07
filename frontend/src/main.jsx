import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { WorkoutsContextProvider } from './context/WorkoutContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <WorkoutsContextProvider>
      <App />
    </WorkoutsContextProvider>
  </React.StrictMode>
)
