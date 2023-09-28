import React from 'react'
import "./OwnProfile.css"
import logo from "../KK/assets/logo.png"
import home from "../KK/assets/home.png"
import userprofile from "../KK/assets/userprofile.png"
import like from "../KK/assets/like.png"

const OwnProfile = () => {
  return (
    <div className='OwnProfileContainer'>
      <div className='OwnProfileCookie'></div>

      <div className='OwnProfileLogoBox'></div>
      <div className='OwnProfileHomeBox'></div>
      <img className='OwnProfileLogo' src={logo}></img>
      <p class='BiskketText'>BISKKET</p>

      <img className='OwnProfileHome' src={home}></img>
      <p class='HomeText'>HOME</p>

      <div className='UserBox'></div>
      <img className='UserImage' src={userprofile}></img>
      <div className='UserText'>username</div>
      <div className='EditProfileButton'></div>
      <div className='EditProfileText'>edit profile</div>

      <div className='FirstBox'></div>
      <div className='FirstImageBox'></div>
      <div className='FirstCaption'>This will be the caption</div>
      <img className='FirstLikeImg' src={like}></img>
      <div className='FirstNumberLikes'>Likes : </div>

      <div className='SecondBox'></div>
      <div className='SecondImageBox'></div>
      <div className='SecondCaption'>This will be the caption</div>
      <img className='SecondLikeImg' src={like}></img>
      <div className='SecondNumberLikes'>Likes : </div>

      <div className='ThirdBox'></div>
      <div className='ThirdCaptionBox'></div>
      <div className='ThirdCaption'>This will be the post caption</div>
      <img className='ThirdLikeImg' src={like}></img>
      <div className='ThirdNumberLikes'>Likes : </div>
      
      <div className='FourthBox'></div>
      <div className='FourthImageBox'></div>
      <div className='FourthCaption'>This will be the caption</div>
      <img className='FourthLikeImg' src={like}></img>
      <div className='FourthNumberLikes'>Likes : </div>
      
      </div>
  )
}

export default OwnProfile