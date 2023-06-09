"use client"
import React from 'react'
import Profile from "../components/Perfil Andrey.jpeg"
import Image from "next/image";
import { Button } from "react-bootstrap"

const About = () => {
  return (
    <section id="About">
      <div className="containers">
        <div className="box2">
          <figure className="Image">
            <Image src={Profile} alt="" width={500} height={300} />
          </figure>
          <h2>I’m Andrey, and I like to
            <br /> work on your next project</h2>
          <p>I like working with others to create design solutions
            <br />I have done some projects
            <br />most college jobs</p>
          <div className="Button">
            <a href="https://github.com/AndreyBV5">
              <Button variant="dark" size="lg">Free consultion Github</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About