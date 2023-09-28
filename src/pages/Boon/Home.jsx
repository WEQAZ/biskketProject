import React from 'react'
import "./Home.css"
import logoboon from "../Boon/picture/logoboon.png"

const Home = () => {
  
  return (
    <div className='homeBackground'>
      <div className='homeBiskketLogo'>
       
        <div className='homeLogoBox'></div>
        <div className='homeLoginBox'></div>
        
        <div className='homeLogoName'>
        <img src={logoboon} width="93px" height="88px"/>
          BISKKET</div>
      </div>
      <div className='homeLogin'>LOG IN</div>
      <div className="homeWelcomeText">
        WELCOME <br></br>
        TO <br></br>
        'BISKKET'
      </div>
     
    </div>
  )
}

export default Home
