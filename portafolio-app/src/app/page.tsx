"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import NavbarHeader from './components/Navbar';
import Header from './components/Header';


const page = () => {
  return (
    <div>
      <NavbarHeader/>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </div>
  )
}

export default page
