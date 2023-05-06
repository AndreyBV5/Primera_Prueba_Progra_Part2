"use client"
import React from 'react'
import { Button } from "react-bootstrap"

const CalltoAction = () => {
  return (
    <section id="Hiring">
      <div className="Contenedor">
        <div className="box">
          <h2>Call to action </h2>
          <br />
          <p>I am a person focused on improving my skills
            <br />If you are interested in getting to know me better,
            <br />go to the following link to make a contract
          </p>
          <a href="https://www.linkedin.com/">
          <Button variant="dark" size="lg">Free consultion Linkedin</Button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default CalltoAction