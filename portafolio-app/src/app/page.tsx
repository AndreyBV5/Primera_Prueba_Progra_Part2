import Image from 'next/image'
import styles from './page.module.css'

import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'

const page = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>



    </div>
  )
}

export default page
