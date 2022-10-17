import './style.css'
import LandingPage from './views/landingPage/landingPage'
import { BrowserRouter } from 'react-router-dom'

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
