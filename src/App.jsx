import { useState } from 'react'
import Card from './Components/Card'
import Formulario from './Components/Formulario'
import './App.css'

function App() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado correctamente');
  }
  

  return (
    <>
        <Formulario 
        nombre={nombre} 
        apellido={apellido} 
        setNombre={setNombre} 
        setApellido={setApellido}
        handleSubmit={handleSubmit} 
        />
      <Card nombre={nombre} apellido={apellido}/>
      
    </>
  )
}

export default App
