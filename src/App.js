import React, { useState } from 'react';
import './App.css';

import { Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import AboutPage from './Components/AboutPage';
import SignInPage from './Components/SignInPage';
import ContactPage from './Components/ContactPage';
import FoodOrder from './Components/FoodOrder';

function App() {
  return (
    <>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/about" element = {<AboutPage />} />
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path = '/foodOrder' element={<FoodOrder />}>
          <Route path=':foodId' element={<FoodOrder />} />
          </Route>
        </Routes>
    </>
  );
}

export default App;
