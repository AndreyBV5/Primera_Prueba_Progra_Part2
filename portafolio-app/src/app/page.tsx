"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ColorSchemesExample from './components/Navbar'


const page = () => {
  return (
    <div>
      <ColorSchemesExample/>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default page
