import React, { useState } from "react";
import "./CreatePost.css";
import logo from "../KK/assets/logo.png";
import home from "../KK/assets/home.png";
import pencil from "../KK/assets/pencil.png";
import { Link } from "react-router-dom";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDatabase, ref, push } from "firebase/database"; // Import database functions

const CreatePost = ({ user, posts, setPosts }) => {
  const [postContent, setPostContent] = useState("");
  const db = getDatabase();

  const handlePostSubmit = () => {
    if (postContent.trim() !== "") {
      // Create a new post object
      const newPost = {
        content: postContent,
        timestamp: new Date().toLocaleString(),
        user: user.displayName,
      };

      // Get a reference to the posts in the database and push the new post
      const postsRef = ref(db, "posts");
      push(postsRef, newPost);

      // Clear the post content
      setPostContent("");
    }
  };

  return (
    <div className="CreatePostContainer">
      <div className="CreatePostCookie"></div>

      <div className="CreatePostLogoBox"></div>
      <div className="CreatePostHomeBox"></div>
      <img className="CreatePostLogo" src={logo}></img>
      <p class="BiskketText">BISKKET</p>

      <Link to="/MainPost">
        <img className="CreatePostHome" src={home}></img>
        <p class="HomeText">HOME</p>
      </Link>

      <div className="CreatePostWhiteBox"></div>
      <p class="CreatePostText">Create Post</p>
      <div className="WritePostBox"></div>
      <img className="CreatePostPencil" src={pencil}></img>
      <div className="WritePostBox">
        <textarea
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <Link to="/MainPost">
        <div onClick={handlePostSubmit}>
          <div className="PostPicButton"></div>
        <p class="PostPicButtonText">POST</p>
        </div>
        
      </Link>
    </div>
  );
};

export default CreatePost;
