import logo from './logo.svg';
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

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='SignIn' element={<SignIn/>}> </Route>

      <Route path='MainPost' element={<MainPost/>}> </Route>

      <Route path='CreatePost' element={<CreatePost/>}> </Route>
      <Route path='FriendProfile' element={<FriendProfile/>}> </Route>
      <Route path='OwnProfile' element={<OwnProfile/>}> </Route>
      <Route path='PostPic' element={<PostPic/>}> </Route>
      

      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
