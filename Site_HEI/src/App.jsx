import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import HeroSection from './components/Section1'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    </>
  )
}

export default App
