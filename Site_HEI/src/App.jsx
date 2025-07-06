import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import HeroSection from './components/section1'
import  AboutUs from "./components/AboutUs";
import { Team } from './components/Team'
import { CareerOpportunities} from './components/CareerOpportunities'

function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
   <AboutUs/>
   <Team/>
   <CareerOpportunities/>
    </>
  )
}

export default App
