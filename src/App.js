import React, { useState } from 'react';
import './App.css';

import { Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';

function App() {
  return (
    <>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<AboutPage />} />
        </Routes>
    </>
  );
}

export default App;
