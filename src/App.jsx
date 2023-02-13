import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import './components/navbar'
import Navbar from './components/navbar'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar>
        
      </Navbar>
      <h1><b>HELLO YOGESH SHARMA</b></h1>
    </div>
  )
}

export default App
