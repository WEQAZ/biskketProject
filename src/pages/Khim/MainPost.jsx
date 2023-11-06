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
import { getDatabase, ref, onValue, update } from "firebase/database";

const About = ({ user }) => {
  const [username, setUsername] = useState(null);
  const [posts, setPosts] = useState([]);
  const [commentText, setCommentText] = useState("");
  const db = getDatabase();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const userUsername = user.displayName;
        setUsername(userUsername);
      } else {
        setUsername(null);
      }
    });

    const postsRef = ref(db, "posts");
    onValue(postsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const postList = Object.entries(data).map(([key, post]) => ({
          key,
          ...post,
        }));
        setPosts(postList.reverse());
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLikePost = (post) => {
    const likeId = user.uid; //retrieves the unique user ID of the currently logged-in user
    const updatedPosts = [...posts]; // construct array of post
    const postIndex = updatedPosts.findIndex((p) => p.key === post.key); // This line finds the index of the post that the user is trying to like or unlike

    if (postIndex !== -1) {
      // if the post exists
      if (!updatedPosts[postIndex].likes) {
        //if empty create like
        updatedPosts[postIndex].likes = {};
      }

      if (updatedPosts[postIndex].likes[likeId]) {
        // likeId
        // User has already liked the post, so we can remove the like
        delete updatedPosts[postIndex].likes[likeId];
      } else {
        // User hasn't liked the post, so we add a like
        updatedPosts[postIndex].likes[likeId] = true;
      }

      // Update the post in the database
      const postRef = ref(db, `posts/${post.key}`);
      update(postRef, { likes: updatedPosts[postIndex].likes });
    }
  };

  const handleAddComment = (post) => {
    // Check if the comment text is not empty (contains non-whitespace characters)
    if (commentText.trim() !== "") {
      // Create a copy of the posts array to avoid directly modifying the state
      const updatedPosts = [...posts];

      // Find the index of the selected post in the updatedPosts array
      const postIndex = updatedPosts.findIndex((p) => p.key === post.key);

      // Check if the post exists in the updatedPosts array
      if (postIndex !== -1) {
        // Initialize the 'comments' property if it doesn't already exist
        if (!updatedPosts[postIndex].comments) {
          updatedPosts[postIndex].comments = [];
        }

        // Create a new comment object with the user's display name and comment text
        const newComment = {
          user: user.displayName,
          text: commentText,
        };

        // Add the new comment to the 'comments' array of the selected post
        updatedPosts[postIndex].comments.push(newComment);

        // Update the post in the Firebase Realtime Database with the new comments
        const postRef = ref(db, `posts/${post.key}`);
        update(postRef, { comments: updatedPosts[postIndex].comments });

        // Clear the comment input field
        setCommentText("");
      }
    }
  };

  return (
    <div className="mainPostContainer">
      <div className="mainToolBar">
        <div className="mainImg">.</div>
        <Link to="/piyawut_b">
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

        <Link to="/piyawut_b/OwnProfile">
          <div class="mainButtonToProfile">
            <div className="mainTextVT323">Hi!</div>
            <div className="mainTextPangolinUsr">{username}</div>
          </div>
        </Link>

        <div className="mainArea">
          <div className="mainFeatureBar">
            <Link to="/piyawut_b/CreatePost" style={{ textDecoration: "none" }}>
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

            <Link to="/piyawut_b/PostPic" style={{ textDecoration: "none" }}>
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

            <Link
              to="/piyawut_b/FriendProfile"
              style={{ textDecoration: "none" }}
            >
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
                <div className="">
                  <div className="mainTextPangolinUser">{post.user}</div>
                  <div className="mainTextTimestamp">
                    Posted at: {post.timestamp}
                  </div>
                  <div className="mainContent">
                    <div className="polaroid">
                      {post.mediaURL && (
                        <img src={post.mediaURL} alt="Posted Image" />
                      )}
                      <div className="mainTextPangolinCaption">
                        {post.content}
                      </div>
                      {/* Like button */}

                      <div className="mainLike">
                        <img src={heartPic} />
                        <div className="optionLike">
                          {post.likes ? Object.keys(post.likes).length : 0}
                          <button onClick={() => handleLikePost(post)}>
                            {post.likes && post.likes[username]
                              ? "Unlike"
                              : "Like"}
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Comment input */}
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button onClick={() => handleAddComment(post)}>
                      Add Comment
                    </button>
                    {/* Comment section */}
                    <div className="commentBox">
                      {post.comments &&
                        post.comments.map((comment, commentIndex) => (
                          <div key={commentIndex}>
                            <div className="mainTextPangolinUsr">
                              {comment.user}
                            </div>
                            <div className="commentText">{comment.text}</div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
