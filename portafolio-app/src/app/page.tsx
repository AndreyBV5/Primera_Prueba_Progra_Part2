"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import NavbarHeader from './components/Navbar';
import Header from './components/Header';
import CalltoAction from './components/CalltoAction';
import Footer from './components/Footer';


const page = () => {
  return (
    <div>
      <NavbarHeader/>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <CalltoAction/>
      <Footer/>
    </div>
  )
}

export default page
