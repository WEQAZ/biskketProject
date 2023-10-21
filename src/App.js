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

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, [auth]);

 

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='SignIn' element={<SignIn/>}> </Route>
      <Route
          path="/MainPost"
          element={<MainPost user={user} posts={posts} />}
        />
        <Route
          path="/CreatePost"
          element={<CreatePost user={user} posts={posts} setPosts={setPosts} />}
        />
      <Route path='FriendProfile' element={<FriendProfile/>}> </Route>
      <Route path='OwnProfile' element={<OwnProfile/>}> </Route>
      <Route path='PostPic' element={<PostPic/>}> </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
