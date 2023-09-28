import React from 'react'
import "./CreatePost.css"
import logo from "../KK/assets/logo.png"
import home from "../KK/assets/home.png"
import pencil from "../KK/assets/pencil.png"

const CreatePost = () => {
  return (
    <div className='CreatePostContainer'>
      <div className='CreatePostCookie'></div>

      <div className='CreatePostLogoBox'></div>
      <div className='CreatePostHomeBox'></div>
      <img className='CreatePostLogo' src={logo}></img>
      <p class='BiskketText'>BISKKET</p>

      <img className='CreatePostHome' src={home}></img>
      <p class='HomeText'>HOME</p>

      <div className='CreatePostWhiteBox'></div>
      <p class='CreatePostText'>Create Post</p>
      <div className='WritePostBox'></div>
      <img className='CreatePostPencil' src={pencil}></img>
      <p class='WriteYourPost'>Write your post</p>
      <div className='CreatePostButton'></div>
      <p class='CreatePostButtonText'>POST</p>
    </div>
  )
}

export default CreatePost
