import React, { useEffect, useState } from "react";
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Boon/Home';
import MainPost from './pages/Khim/MainPost'
import NotFound from './pages/NotFound/NotFound'
import SignIn from './pages/Boon/SignIn'
import CreatePost from './pages/KK/CreatePost'
import FriendProfile from './pages/KK/FriendProfile'
import OwnProfile from './pages/KK/OwnProfile'
import PostPic from './pages/KK/PostPic'
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { initializeApp } from 'firebase/app';


const App = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Check if the user is already signed in
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    // Fetch posts from the database
    // Initialize posts with your data fetching logic
    // You can fetch the initial data from the Firebase Realtime Database here
    const initialPosts = [/* Your initial posts here */];
    setPosts(initialPosts);

    return () => unsubscribe();
  }, [auth]);

  const updatePosts = (newPosts) => {
    setPosts(newPosts);
  };
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='SignIn' element={<SignIn />} />
        <Route
          path="/MainPost"
          element={<MainPost user={user} posts={posts} updatePosts={updatePosts} />}
        />
        <Route
          path="/CreatePost"
          element={<CreatePost user={user} posts={posts} setPosts={setPosts} />}
        />
        <Route
          path="/PostPic"
          element={<PostPic user={user} posts={posts} setPosts={setPosts} />}
        />
        <Route path="/FriendProfile" element={<FriendProfile />} />
        <Route
          path="/OwnProfile"
          element={<OwnProfile user={user} posts={posts} updatePosts={updatePosts} />}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
