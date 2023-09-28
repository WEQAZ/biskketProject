import React from "react";
import "./FriendProfile.css";
import logo from "../KK/assets/logo.png";
import home from "../KK/assets/home.png";
import userprofile from "../KK/assets/userprofile.png";
import like from "../KK/assets/like.png";
import { Link } from "react-router-dom";

const FriendProfile = () => {
  return (
    <div className="FriendProfileContainer">
      <div className="FriendProfileCookie"></div>
      <Link to="/">
        <div className="FriendProfileLogoBox"></div>
        <div className="FriendProfileHomeBox"></div>
        <img className="FriendProfileLogo" src={logo}></img>
        <p class="BiskketText">BISKKET</p>
      </Link>
      <Link to="/">
        <img className="FriendProfileHome" src={home}></img>
        <p class="HomeText">HOME</p>
      </Link>

      <div className="FPUserBox"></div>
      <img className="FPUserImage" src={userprofile}></img>
      <div className="FPUserText">username</div>

      <div className="FPFirstBox"></div>
      <div className="FPFirstImageBox"></div>
      <div className="FPFirstCaption">This will be the caption</div>
      <img className="FPFirstLikeImg" src={like}></img>
      <div className="FPFirstNumberLikes">Likes : </div>

      <div className="FPSecondBox"></div>
      <div className="FPSecondImageBox"></div>
      <div className="FPSecondCaption">This will be the caption</div>
      <img className="FPSecondLikeImg" src={like}></img>
      <div className="FPSecondNumberLikes">Likes : </div>

      <div className="FPThirdBox"></div>
      <div className="FPThirdCaptionBox"></div>
      <div className="FPThirdCaption">This will be the post caption</div>
      <img className="FPThirdLikeImg" src={like}></img>
      <div className="FPThirdNumberLikes">Likes : </div>

      <div className="FPFourthBox"></div>
      <div className="FPFourthImageBox"></div>
      <div className="FPFourthCaption">This will be the caption</div>
      <img className="FPFourthLikeImg" src={like}></img>
      <div className="FPFourthNumberLikes">Likes : </div>
    </div>
  );
};

export default FriendProfile;
