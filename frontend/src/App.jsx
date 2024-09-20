import { useState } from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/landing/LandingPage'
import Footer from './components/Footer'

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
