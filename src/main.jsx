import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from 'flowbite-react'
import { ThemeInit } from '../.flowbite-react/init.js'
import { BrowserRouter } from 'react-router-dom'
import Stair from './Component/Stair.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  
 <ThemeProvider>
  <ThemeInit/>
  <BrowserRouter>
  <ToastContainer/>
    <App />
    </BrowserRouter>
    </ThemeProvider>


)
