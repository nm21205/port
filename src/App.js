import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Price from './page/Price.jsx'; 
import Weather from './page/Weather';
import Air from './page/Air';
import Trips from './page/Trips';
import './App.scss';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/air" element={<Air />} />
        <Route path="/trips" element={<Trips />} />
      </Routes>
    </Router>
  );
}

export default App;

