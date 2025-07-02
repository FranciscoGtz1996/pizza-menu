//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//Este es un estilo global, aplica a todo el archivo
import './App.css'
//Importamos el componente Card
//import Card from './components/Card'
//Importamos pizza
//import Pizza from './components/Pizza'

//Todas las rutas que vammos a tener
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Owner from './pages/Owner'
import Navbar from './components/Navbar'

function App() {
  //No puede haber elementos hermanos
  return (
    //Etiqueta que envuelve todo
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Owner" element={<Owner />} />
    </Routes>
    </>
  )
}

export default App
