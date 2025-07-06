import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './components/Navbar'
import HeroSection from './components/section1'
import  AboutUs from "./components/AboutUs";
import { Team } from './components/Team'
import { CareerOpportunities} from './components/CareerOpportunities'
import { Domains } from './components/Domains'
import { Admission } from './components/Admission'
import { Program } from './components/Program'
import { Technologies } from './components/Technologies'
import { Partners } from './components/Partners'
import { Footer } from './components/Footer'
function App() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
   <AboutUs/>
   <Team/>
   <CareerOpportunities/>
   <Domains/>
   <Admission/>
   <Program/>
   <Technologies/>
   <Partners/>
   <Footer/>
    </>
  )
}

export default App
