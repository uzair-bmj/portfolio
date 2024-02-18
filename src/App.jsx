import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Services from './Components/Services'

export default function App() {
  return (
    <div className='bg-[rgba(9,27,42,255)] text-white min-h-screen'>
        <Navbar/>
        <Home/>
        <About/>
        <Services/>
    </div>
  )
}
