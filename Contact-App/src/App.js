// import logo from './logo.svg';
// import { Profiler } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ProfileData from './components/ProfileData';
import Profile from './components/Profilee';
import Friends from './components/Friends';
import Relatives from './components/Relatives';
import Office from './components/Office';
import Neighbours from './components/Neighbours';
import Business from './components/Business';
import Vieww from './components/Vieww';
function App() {
  return (
    <>
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Signup' element={ <Signup/>}/>
      <Route path='/Home' element={<Home/>}/>
      <Route path='/Profile' element={<ProfileData/>}/>
      <Route path='/EditPro' element={<Profile/>}/>
      <Route path='/Friends' element={<Friends/>}/>
      <Route path='/Relatives' element={<Relatives/>}/>
      <Route path='/Office' element={<Office/>}/>
      <Route path='/Neighbours' element={<Neighbours/>}/>
      <Route path='/Business' element={<Business/>}/>
      <Route path='/View' element={<Vieww/>}/>
      {/* <Route path='/Relatives' element={<Relatives/>}/> */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
