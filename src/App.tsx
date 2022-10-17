import './style.css'
import LandingPage from './views/landingPage/landingPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home/home'
import Login from './components/Login/login'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </div>
  )
}

export default App
