
import './App.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User from './components/user';
import Reqres from './components/reqres';
import Login from './components/login';
import {BeforeLogin, Guard} from './components/guard';
import { HttpService } from './services/httpsservice';
import Profile from './components/profile';
import Review from './components/review';
import Debug from './components/debug';

function App() {
  
  return (
    <BrowserRouter>
    <HttpService>
    <Routes>
      <Route path="" element={<BeforeLogin><Login/></BeforeLogin>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/user" element={<User/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/debug" element={<Debug/>}/>
      <Route path="/reqres" element={<Guard><Reqres/></Guard>}/>
    </Routes>
      </HttpService>
    </BrowserRouter>
  );
}

export default App;
