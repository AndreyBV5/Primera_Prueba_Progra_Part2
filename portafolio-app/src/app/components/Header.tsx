import React from 'react'
import Image from "next/image";
import Logo from '../components/Logo_github.png'

const Header = () => {
  return (

    <div className="container">
      <div className='HeaderImage'>
      <Image src={Logo} alt="" width={50} height={50} />
      </div>
        <h1>Andrey Portfolio</h1>
        <p>If you are interested in my portfolio, do not hesitate to follow me for more information.</p>
        <div className="secondP"><p >portfolio for your design needs</p></div>
    </div>
  )
}

export default Header