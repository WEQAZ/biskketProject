import React, { useEffect, useState } from "react";
import "./MainPost.css";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import biskketLogo from "./picture/mainLogo.png";
import iconPencil from "./picture/pencil.png";
import iconCamera from "./picture/camera.png";
import iconVideo from "./picture/video-camera.png";
import iconCookies from "./picture/cookies.png";
import demoPic from "./picture/gallery-2.png";
import userPic from "./picture/user.png";
import heartPic from "./picture/heart.png";
import { Link } from "react-router-dom";
import firebaseApp from "../../config";
import { getDatabase, ref, onValue } from "firebase/database";

const About = () => {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);
  const db = getDatabase();

  useEffect(() => {
    const auth = getAuth(); // Initialize Firebase Auth with your Firebase app instance
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUsername = user.displayName;
        setUsername(userUsername);
      } else {
        setUsername(null);
      }
    });
    

    // Fetch posts from the database
    const postsRef = ref(db, "posts");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postList = Object.values(data);
        setPosts(postList);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="mainPostContainer">
      <div className="mainToolBar">
        <div className="mainImg">
          .
        </div>
        <Link to="/">
          <div class="mainLogo">
            <img
              src={biskketLogo}
              alt="Biskket Logo"
              width="93px"
              height="88px"
            />
            <div className="mainTextPangolin"> BISKKET </div>
          </div>
        </Link>

        <Link to="/OwnProfile">
          <div class="mainButtonToProfile">
            <div className="mainTextVT323">Hi!</div>
            <div className="mainTextPangolinUsr">{username}</div>
          </div>
        </Link>

        <div className="mainArea">
          <div className="mainFeatureBar">
            <Link to="/CreatePost" style={{ textDecoration: "none" }}>
              <div className="mainButtonToNext">
                <img
                  src={iconPencil}
                  alt="Pencil Icon"
                  width="70px"
                  height="70px"
                />
                <div className="mainTextPangolin"> Write a post </div>
              </div>
            </Link>

            <Link to="/PostPic" style={{ textDecoration: "none" }}>
              <div className="mainButtonToNext">
                <img
                  src={iconCamera}
                  alt="Camera Icon"
                  width="70px"
                  height="70px"
                />
                <div className="mainTextPangolin"> Post Picture </div>
              </div>
            </Link>

            <div className="mainButtonToNext">
              <img
                src={iconVideo}
                alt="Video Icon"
                width="70px"
                height="70px"
              />
              <div className="mainTextPangolin"> Post Video </div>
            </div>

            <Link to="/FriendProfile" style={{ textDecoration: "none" }}>
              <div className="mainButtonToNext">
                <img
                  src={iconCookies}
                  alt="Cookie Icon"
                  width="70px"
                  height="70px"
                />
                <div className="mainTextPangolin"> Find Friends </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="mainScrollArea">
          
        <div className="mainPostText">
  {posts.map((post, index) => (
    <div key={index} className="PostText">
      <div className="mainTextPangolinUser">{post.user}</div>
      {post.mediaURL && <img src={post.mediaURL} alt="Posted Image" />}
      <div className="mainTextPangolinCaption">{post.content}</div>
      <div className="mainTextTimestamp">Posted at: {post.timestamp}</div>
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default About;
