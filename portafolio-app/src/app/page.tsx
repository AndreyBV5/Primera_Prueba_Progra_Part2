"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
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
      <About/>
      <Projects/>
      <CalltoAction/>
      <Footer/>
    </div>
  )
}

export default page
