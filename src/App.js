import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home/Home';
import About from './pages/Khim/About'
import NotFound from './pages/NotFound/NotFound'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='about' element={<About/>}> </Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
