import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/landing/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <LandingPage />
      <Footer />
    </>
  )
}

export default App
