import React from 'react'
import "./MainPost.css"
import biskketLogo from "./picture/mainLogo.png"
import iconPencil from "./picture/pencil.png"
import iconCamera from "./picture/camera.png"
import iconVideo from "./picture/video-camera.png"
import iconCookies from "./picture/cookies.png"
import demoPic from "./picture/gallery-2.png"
import userPic from "./picture/user.png"
import heartPic from "./picture/heart.png"

const About = () => {
  return (
    <div className='mainPostContainer'>
      <div className='mainToolBar'>
        <div class='mainLogo'>
          <img src={biskketLogo} alt="Biskket Logo" width="93px" height="88px" />
          <div className='mainTextPangolin'> BISKKET </div>
        </div>

        <div class='mainButtonToProfile'>
          <div className='mainTextVT323'>Hi!</div>
          <div className='mainTextPangolinUsr'>username</div>
        </div>


        <div className='mainArea'>
          <div className='mainFeatureBar'>
            <div className='mainButtonToNext'>
              <img src={iconPencil} alt="Pencil Icon" width="70px" height="70px" />
              <div className='mainTextPangolin'> Write a post </div>
            </div>
            <div className='mainButtonToNext'>
              <img src={iconCamera} alt="Camera Icon" width="70px" height="70px" />
              <div className='mainTextPangolin'> Post Picture </div>
            </div>
            <div className='mainButtonToNext'>
              <img src={iconVideo} alt="Video Icon" width="70px" height="70px" />
              <div className='mainTextPangolin'> Post Video </div>
            </div>
            <div className='mainButtonToNext'>
              <img src={iconCookies} alt="Cookie Icon" width="70px" height="70px" />
              <div className='mainTextPangolin'> Find Friends </div>
            </div>
          </div>
        </div>

        <div className='mainScrollArea'>
          <div className='mainPostPic'>
            <img src={demoPic} alt="demo Pic" width="314px" height="314px" />
          </div>
          <div className='mainPostProfile'>
            <div className="mainUserPic">
              <img src={userPic} alt="user Pic" width="129px" height="129px" />
            </div>
            <div className='mainTextPangolinUser'>
              username
            </div>
            <div className='mainTextPangolinCaption'>
              #caption Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </div>
            <div className="mainUserLikePost">
              <img src={heartPic} alt="like Pic" width="50px" height="50px" />
              <div className="mainTextPangolinLike">
                10 likes
              </div>
            </div>
          </div>

          <div className='mainPostText'>
            <div className='mainTextPangolinCaption'>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
          </div>
          <div className='mainPostProfile'>
            <div className="mainUserPic">
              <img src={userPic} alt="user Pic" width="129px" height="129px" />
            </div>
            <div className='mainTextPangolinUser'>
              username
            </div>
            <div className="mainUserLikeText">
              <img src={heartPic} alt="like Pic" width="50px" height="50px" />
              <div className="mainTextPangolinLike">
                20 likes
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About
