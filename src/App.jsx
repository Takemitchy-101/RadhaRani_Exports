import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import AboutUs from './Pages/AboutPage/aboutUs';
import BottomBar from './components/bottombar';
import { Home } from './Pages/HomePage';
import Navbar from './components/navbar';
import './App.css'

function App() {
  const location  = useLocation();
  return (
    <>
        {
        location.pathname !== "/"
          ?  <Navbar/>
          :""
        } 
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
      <BottomBar />
    </>
  );
}

export default App;