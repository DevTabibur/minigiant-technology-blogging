import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About Us/About';
import Contact from './Pages/Contact Us/Contact';
import Posts from './Pages/Posts/Posts';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Sign Up/SignUp';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/login' element={<Login/>}></Route>

      </Routes>
    </>
  );
}

export default App;
