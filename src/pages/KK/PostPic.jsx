import React from "react";
import "./PostPic.css";
import logo from "../KK/assets/logo.png";
import home from "../KK/assets/home.png";
import postpicimage from "../KK/assets/postpicimage.png";
import { Link } from "react-router-dom";

const PostPic = () => {
  return (
    <div className="PostPicContainer">
      <div className="PostPicCookie"></div>
      <Link to="/MainPost">
        <div className="PostPicLogoBox"></div>
        <div className="PostPictHomeBox"></div>
        <img className="PostPicLogo" src={logo}></img>
        <p class="BiskketText">BISKKET</p>
      </Link>

      <Link to="/MainPost">
        <img className="PostPicHome" src={home}></img>
        <p class="HomeText">HOME</p>
      </Link>

      <div className="PostPicWhiteBox"></div>
      <p class="PostPicText">Post Picture</p>
      <div className="PostPicBox"></div>
      <div className="ImageBox"></div>
      <img className="PostPicImage" src={postpicimage}></img>
      <p class="WriteYourCaption">Write your caption</p>
      <div className="PostPicButton"></div>
      <p class="PostPicButtonText">POST</p>
    </div>
  );
};

export default PostPic;
