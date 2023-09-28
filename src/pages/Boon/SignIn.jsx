import React from "react";
import "./signin.css";
import logoboon from "../Boon/picture/logoboon.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signinBackGround">
      <Link to="/">
        <div className="signinLogoBox">
          <div className="signinBiskketLogo">
            <img src={logoboon} width="93px" height="88px" />
            BISKKET
          </div>
        </div>
      </Link>
      <div className="signinBox">
        <img
          className="signinLogo"
          src={logoboon}
          width="180px"
          height="120px"
        />
        <div className="signinLogo"></div>
        <button className="signinGoogle">Signin with Google</button>

        <div className="signinText">
          Sign In To Enjoy<br></br> Biskket !
        </div>
      </div>
    </div>
  );
};

export default SignIn;
