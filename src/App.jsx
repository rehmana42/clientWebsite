import { useState } from 'react'
import TopBar from './Component/TopBar'
import Home from './Pages/Home'
import About from './Pages/About'
import { Route, Routes } from 'react-router-dom'
import Stair from './Component/Stair'
import Layout from './Component/Layout'
import Product from './Pages/Product'
import ContactUs from './Pages/ContactUs'

function App() {


  return (
    <>
   
    <div className=' bg-black   h-screen w-full'>
    
      <TopBar/>
      <Routes >
        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        </Route>
      </Routes>

</div>
</>
  )
}

export default App
