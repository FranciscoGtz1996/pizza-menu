//import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//Agregamos react router
import { BrowserRouter } from 'react-router-dom'
//import './index.css'
import App from './App.jsx'
//import Menu from './components/Menu.jsx'

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <App />
  </BrowserRouter>
  
)
