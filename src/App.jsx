import { useState } from 'react'
import Card from './Components/Card'
import Form from './Components/Form'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Card/>
      <Form/>
      <h1>Vite + React</h1>
      
    </>
  )
}

export default App
