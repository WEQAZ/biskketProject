import React from "react";
import "./Home.css";
import logoboon from "../Boon/picture/logoboon.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeBackground">
      <div className="homeBiskketLogo">
        <div className="homeLogoBox"></div>

        <div className="homeLogoName">
          <img src={logoboon} width="93px" height="88px" />
          BISKKET
        </div>
      </div>

      <div className="signInbutton">
        <Link to="/piyawut_b/SignIn" style={{ textDecoration: "none" }}>
          <div className="homeLogin">LOG IN</div></Link>
          <div className="homeLoginBox"></div>
        
      </div>

      <div className="homeWelcomeText">
        WELCOME <br></br>
        TO <br></br>
        'BISKKET'
      </div>
    </div>
  );
};

export default Home;
