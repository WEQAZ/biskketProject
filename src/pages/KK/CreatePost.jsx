import React, { useEffect,useState } from "react";
import "./CreatePost.css";
import logo from "../KK/assets/logo.png";
import home from "../KK/assets/home.png";
import pencil from "../KK/assets/pencil.png";
import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase, ref, push, update } from "firebase/database"; // Import database functions
import PostPic from "./PostPic"; // Import the new component

const CreatePost = ({ user }) => {
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
      const newPostRef = push(postsRef); // Create a new post reference with a unique key
      update(newPostRef, newPost); // Update the post with data

      // Clear the post content
      setPostContent("");
    }
  };

  return (
    <div className="CreatePostContainer">
      <div className="CreatePostCookie"></div>

      <Link to="/piyawut_b/MainPost">
        <div className="CreatePostLogoBox"></div>
      <div className="CreatePostHomeBox"></div>
      <img className="CreatePostLogo" src={logo}></img>
      <p class="BiskketText">BISKKET</p>
      </Link>
      

      <Link to="/piyawut_b/MainPost">
        <img className="CreatePostHome" src={home}></img>
        <p class="HomeText">HOME</p>
      </Link>

      <div className="CreatePostWhiteBox"></div>
      <p class="CreatePostText">Create Post</p>
      <div className="WritePostBox"></div>
      <img className="CreatePostPencil" src={pencil}></img>
      <div className="WritePostBox">
        <textarea
          placeholder="What do you thinking..."
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        />
      </div>
      <Link to="/piyawut_b/MainPost">
        <div onClick={handlePostSubmit}>
          <div className="PostPicButton"></div>
        <p class="PostPicButtonText">POST</p>
        </div>
        
      </Link>
    </div>
  );
};

export default CreatePost;
