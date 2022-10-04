import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'

const App = () => (
  <div className="App">
    <BrowserRouter>
      <NavBar></NavBar>
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  </div>
)

export default App
