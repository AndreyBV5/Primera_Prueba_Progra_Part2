"use client"
import React from 'react'
import Profile from "../components/Logo Andrey.png"
import Image from "next/image";

const About = () => {
  return (
    <div className="containers">
      <figure className="Image">
        <Image src={Profile} alt="" width={400} height={250} />
      </figure>
      <h2>I’m Andrey, and I like to
        <br /> work on your next project</h2>
      <p>I like working with others to create design solutions
        <br />I have done some projects
        <br />most college jobs</p>
    </div>
  )
}

export default About